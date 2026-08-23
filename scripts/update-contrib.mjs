// Update the contribution heatmap SVG from the real GitHub contribution
// calendar. Runs in CI (GITHUB_TOKEN) or locally (a PAT with user scope).
// Writes assets/contrib-heatmap.svg (neon palette, last 26 weeks).
import fs from 'node:fs';

const USER = process.env.GITHUB_REPOSITORY?.split('/')[0] || 'TmxjTmxj';
const repo = new URL('../', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1').replace(/\/$/, '');
const OUT = `${repo}/assets/contrib-heatmap.svg`;

const TOKEN = process.env.GH_PAT || process.env.GITHUB_TOKEN || '';
const query = `query($u:String!){user(login:$u){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionCount}}}}}}`;

async function fetchCalendar() {
  if (!TOKEN) throw new Error('GITHUB_TOKEN not set');
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', 'User-Agent': 'tmxj-profile' },
    body: JSON.stringify({ query, variables: { u: USER } }),
  });
  if (!res.ok) throw new Error(`GitHub GraphQL ${res.status}: ${await res.text()}`);
  const json = await res.json();
  const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!cal) throw new Error('No contribution calendar returned');
  return cal;
}

const cal = await fetchCalendar();
const total = cal.totalContributions;
const days = [];
for (const w of cal.weeks) for (const d of w.contributionDays) days.push({ date: new Date(d.date + 'T00:00:00Z'), count: d.contributionCount });
days.sort((a, b) => a.date - b.date);
const latest = days[days.length - 1].date;

const WEEKS = 26;
let start = new Date(latest);
start.setUTCDate(start.getUTCDate() - (WEEKS * 7 - 1));
start.setUTCDate(start.getUTCDate() - start.getUTCDay());
const map = new Map();
for (const d of days) map.set(d.date.toISOString().slice(0, 10), d.count);
const key = (d) => d.toISOString().slice(0, 10);
const color = (n) => (n === 0 ? '#0c1324' : n === 1 ? '#123a63' : n === 2 ? '#0e7490' : n <= 3 ? '#22d3ee' : n <= 5 ? '#60a5fa' : n <= 8 ? '#a855f7' : '#3fb950');

const cell = 14, gap = 4, stride = cell + gap, gutterL = 30, gutterT = 46;
const W = gutterL + WEEKS * stride + 20, H = gutterT + 7 * stride + 44;
const mono = "'JetBrains Mono','SFMono-Regular',Consolas,Menlo,monospace";
const cjk = "'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans CJK SC',sans-serif";

const out = [];
out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${USER} 最近 ${WEEKS} 周提交热力图">`);
out.push('  <defs>');
out.push('    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0d1526"/><stop offset="100%" stop-color="#0a1120"/></linearGradient>');
out.push('    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#22d3ee"/><stop offset="55%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#a855f7"/></linearGradient>');
out.push('  </defs>');
out.push(`  <rect x="10" y="10" width="${W - 20}" height="${H - 20}" rx="18" fill="url(#bg)" stroke="#2a3a5e" stroke-width="1.5"/>`);
out.push(`  <rect x="10" y="10" width="${W - 20}" height="${H - 20}" rx="18" fill="none" stroke="url(#bar)" stroke-width="1" opacity="0.2"/>`);
out.push(`  <text x="${gutterL}" y="20" font-family="${mono}" font-size="13" font-weight="700" letter-spacing="1" fill="#e6edf3">CONTRIBUTIONS</text>`);
out.push(`  <text x="${W - 20}" y="20" font-family="${cjk}" font-size="12" fill="#8b98ac" text-anchor="end">最近 ${WEEKS} 周 · 共 ${total} 次贡献</text>`);
const dayLabels = ['日', '', '一', '', '三', '', '五'];
for (let r = 1; r < 7; r += 2) out.push(`  <text x="${gutterL - 8}" y="${gutterT + r * stride + cell - 2}" font-family="${cjk}" font-size="9" fill="#5b6b85" text-anchor="end">${dayLabels[r]}</text>`);
let prevMonth = -1;
for (let c = 0; c < WEEKS; c++) {
  const d = new Date(start);
  d.setUTCDate(start.getUTCDate() + c * 7);
  if (d.getUTCMonth() !== prevMonth) {
    out.push(`  <text x="${gutterL + c * stride}" y="${gutterT - 10}" font-family="${cjk}" font-size="9" fill="#5b6b85">${d.getUTCMonth() + 1}月</text>`);
    prevMonth = d.getUTCMonth();
  }
}
for (let c = 0; c < WEEKS; c++) {
  for (let r = 0; r < 7; r++) {
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + c * 7 + r);
    const n = map.get(key(d)) || 0;
    out.push(`  <rect x="${gutterL + c * stride}" y="${gutterT + r * stride}" width="${cell}" height="${cell}" rx="3" fill="${color(n)}"/>`);
  }
}
const ly = H - 18;
out.push(`  <text x="${gutterL + 2}" y="${ly}" font-family="${cjk}" font-size="11" fill="#8b98ac">少</text>`);
const cols = ['#0c1324', '#123a63', '#0e7490', '#22d3ee', '#60a5fa', '#a855f7'];
cols.forEach((c, i) => out.push(`  <rect x="${gutterL + 34 + i * 20}" y="${ly - 11}" width="12" height="12" rx="2" fill="${c}"/>`));
out.push(`  <text x="${gutterL + 34 + cols.length * 20 + 2}" y="${ly}" font-family="${cjk}" font-size="11" fill="#8b98ac">多</text>`);
out.push('</svg>');

fs.writeFileSync(OUT, out.join('\n'), 'utf8');
console.log(`OK ${OUT}  ${W}x${H}  total=${total}  user=${USER}`);

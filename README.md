<div align="center">

```text
  _____ ____  ______   ____  _____ ______   _____ _      ______ 
 |_   _|  _ \|  ____| |  _ \| ____|  ____| |_   _| |    |  ____|
   | | | |_) | |__    | |_) |  _| | |__      | | | |    | |__   
   | | |  _ <|  __|   |  _ <| |___|  __|     | | | |    |  __|  
   | | | |_) | |____  | |_) |____| |____    _| |_| |____| |____ 
   |_| |____/|______| |____/|_____|______| |_____|______|______|
                                                                
```

### 天漠雪佳 · TMXJ

**用 AI Agent 造东西的工程师** —— 不写传统代码，指挥 Agent 落地智能制造

```bash
$ whoami
山大学机械 · AI Agent × 智能工厂 × 具身智能

$ cat ~/philosophy
代码是 Agent 写的。
需求、判断、迭代、验收，是我的。

$ ./roadmap --next
Agent 控制 ROS2 机器人 → 让 Agent 进车间
```

</div>

---

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/ROS2-lyrical-22314E?style=for-the-badge&logo=ros&logoColor=white"/>
  <img src="https://img.shields.io/badge/Gazebo-gz_sim_10-00BFFF?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/MCP-FastMCP-000000?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/AI_Agent-Orchestrator-FF6F00?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Abaqus%2FANSYS-Simulation-0054A6?style=for-the-badge"/>
</p>

<p align="center">
  <a href="https://github.com/TmxjTmxj"><img src="https://visitor-badge.laobi.icu/badge?page_id=TmxjTmxj.TmxjTmxj" alt="visitors"/></a>
  <img src="https://img.shields.io/github/followers/TmxjTmxj?style=flat&label=Followers&color=2ea44f"/>
</p>

<p align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=TmxjTmxj&show_icons=true&theme=radical&hide_border=true&count_private=true&locale=cn"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=TmxjTmxj&layout=compact&theme=radical&hide_border=true&locale=cn"/>
</p>

---

## 🚀 主打作品

### 🤖 [ros2-agent-workflow](https://github.com/TmxjTmxj/ros2-agent-workflow) — Agent 控制 ROS2 机器人
> **让 AI Agent 安全、可复现地自动控制 ROS2 机器人**，以「智能车国赛·医院配送」为完整验证案例。
> MCP 协议桥接 + Fail-Closed 安全网关（激活许可 / 心跳 / 急停闩锁）+ 可验证证据防伪造。
> ✅ 322 项测试全绿 · 实测三段配送 49.6s · 端点误差 ≤0.35m

### 🏭 [cnc-cam-gcode-simulator](https://github.com/TmxjTmxj/cnc-cam-gcode-simulator) — CNC CAM 与 G 代码仿真
> DXF 导入 → CAM 刀路生成 → Fanuc G 代码 → 2D/3D 仿真，车铣双模式，独立桌面软件。
> ✅ 44 项测试 · 4000+ 行

### 💉 [microneedle-skin-pullout](https://github.com/TmxjTmxj/microneedle-skin-pullout) — 自锁微针穿刺仿真（专利支撑）
> Abaqus/Explicit 微针穿刺分层皮肤，端到端由 Codex 经 MCP 自动化完成。
> ✅ 0.18N 峰值力-位移曲线 · 真实工程报告

### 🎯 [agent-orchestrator](https://github.com/TmxjTmxj/agent-orchestrator) — 轻量多 Agent 编排框架
> plan → delegate → execute → collect，6 种 Agent 角色 + 11 角色定义 + 5 技能，并行执行与失败隔离。

---

## 🧠 Agent 生态（我设计并日常使用）

| 项目 | 一句话 |
|---|---|
| [hermes-core](https://github.com/TmxjTmxj/hermes-core) | Agent 意识引擎 + 四层记忆 + 跨 Agent 记忆桥 |
| [lobster-core](https://github.com/TmxjTmxj/lobster-core) | Agent 技能工厂 + 学习循环 + 技能编排注册 |
| [tmxj-agent](https://github.com/TmxjTmxj/tmxj-agent) | Rust 编码 Agent，基于开源框架深度定制，日常主力 |
| [hermes-obsidian-vault](https://github.com/TmxjTmxj/hermes-obsidian-vault) | 基于 Obsidian 的三层知识管道（规则→工作流→领域记忆） |
| [pi-agent-omnipotent](https://github.com/TmxjTmxj/pi-agent-omnipotent) | TypeScript 通用 Agent，多场景任务调度 |
| [software-dev-team-skill](https://github.com/TmxjTmxj/software-dev-team-skill) | Agent 虚拟团队 SOP — 把 AI 编排成 PM/架构/开发/QA |

## 🏭 工业仿真矩阵

| 项目 | 领域 | 结果 |
|---|---|---|
| [ansys-mech-sim-cases](https://github.com/TmxjTmxj/ansys-mech-sim-cases) | 涡轮叶片/轴承/缸筒 | 26 张仿真图 + 工程报告 |
| [shrapnel-force-predictor](https://github.com/TmxjTmxj/shrapnel-force-predictor) | 弹片力值预测 | 7 种 ML 回归，误差 3.72% |
| [beifeng-wind-agent](https://github.com/TmxjTmxj/beifeng-wind-agent) | 风电运维 RAG Agent | 评测准确率 91.4% |
| [G-code-simulation](https://github.com/TmxjTmxj/G-code-simulation) | G 代码仿真（早期） | 第一版 |

## 🎮 彩蛋

| 项目 | 一句话 |
|---|---|
| [electronic-muyu](https://github.com/TmxjTmxj/electronic-muyu) | 电子木鱼微信小程序 — 敲一敲涨功德 |
| [cat-cradle-checker](https://github.com/TmxjTmxj/cat-cradle-checker) | 猫摇篮检查器 |

---

## 🏅 资产

> - **发明专利** — 自锁微针（穿刺仿真支撑）
> - **软件著作权** — CAM 仿真软件
> - **项目** — 15+ Agent 系统 · MCP 工业软件 · 赛题级 ROS2 框架

---

<div align="center">

> **寂轨生新绿，旧树矮旧人。**
>
> —— 代码是 Agent 写的，但每一行判断，都来自我。

<p align="center">
  <sub>从山东荣成的一台电脑开始 · 正在走向 Agent 进车间的那一天</sub>
</p>

</div>

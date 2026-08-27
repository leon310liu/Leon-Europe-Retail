# Leon 2030人生事业战略地图 V2.0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Leon 2030人生事业战略地图升级为“四大板块、十二个模块”的战略闭环。

**Architecture:** 保留V1.0作为历史版本，新建V2.0作为当前唯一顶层入口；新增第四板块定义模块10—12，并只更新现有文件的版本归属、导航和闭环关系。

**Tech Stack:** Markdown、Git、shell文本检查、Python相对链接校验。

**Spec:** `docs/superpowers/specs/2026-08-27-leon-2030-strategy-map-v2-design.md`

## Global Constraints

- 顶层固定为四大板块、十二个模块，按01—12顺序阅读。
- V1.0原文件必须原样保留，V2.0成为新的唯一顶层入口。
- 模块10、11、12分别负责现状差距、阶段路径、年度行动与复盘。
- 阶段门槛必须是结果，资源与能力必须关联具体阶段。
- 不写入未经 Leon 确认的目标、数据、路径、资源、能力或行动。
- 不创建空模块目录，不改写资源地图的业务内容。
- 不提交可视化草稿、临时文件或无关变更。

## File Structure

- Create: `80-Leon2030人生事业战略/00-顶层战略框架/Leon-2030人生事业战略地图-V2.0.md` — 当前唯一顶层框架。
- Create: `80-Leon2030人生事业战略/04-战略路径与执行/README.md` — 第四板块运行入口。
- Modify: `80-Leon2030人生事业战略/README.md` — 当前目录、结构树和导航。
- Modify: `80-Leon2030人生事业战略/02-事业系统/README.md` — 上级框架引用。
- Modify: `80-Leon2030人生事业战略/02-事业系统/06-资源体系/README.md` — 顶层框架引用。
- Modify: `80-Leon2030人生事业战略/02-事业系统/06-资源体系/Leon-2030-Resource-Map-V0.1.md` — 归属和顶层框架引用。
- Preserve: `80-Leon2030人生事业战略/00-顶层战略框架/Leon-2030人生事业战略地图-V1.0.md` — 历史版本，不修改。

---

### Task 1: 建立V2.0顶层战略框架

**Files:**
- Create: `80-Leon2030人生事业战略/00-顶层战略框架/Leon-2030人生事业战略地图-V2.0.md`
- Preserve: `80-Leon2030人生事业战略/00-顶层战略框架/Leon-2030人生事业战略地图-V1.0.md`

**Interfaces:**
- Consumes: V1.0三大板块、九个模块和V2.0设计说明。
- Produces: 四大板块、十二个模块的唯一顶层定义。

- [ ] **Step 1: 记录V1.0哈希**

Run: `shasum -a 256 '80-Leon2030人生事业战略/00-顶层战略框架/Leon-2030人生事业战略地图-V1.0.md'`

Expected: 输出一条SHA-256，Task 4再次运行时必须完全一致。

- [ ] **Step 2: 创建V2.0文件**

文件依次写入：版本与边界、六条框架原则、四大板块十二模块表、01—12运行闭环、第四板块运行规则、版本边界、资源地图归属、V1.0历史版本链接。四张模块表严格采用设计说明第二节的名称和核心问题。

- [ ] **Step 3: 验证V2.0结构契约**

Run:

```bash
python3 -c 'from pathlib import Path; s=Path("80-Leon2030人生事业战略/00-顶层战略框架/Leon-2030人生事业战略地图-V2.0.md").read_text(); required=["四大板块","十二个模块","人生使命与事业愿景","资源体系","认知与人生管理","现状诊断与战略差距","阶段路径与里程碑","年度行动与战略复盘","返回01—11动态校准"]; missing=[x for x in required if x not in s]; assert not missing, missing; print("V2 structure: PASS")'
```

Expected: `V2 structure: PASS`。

- [ ] **Step 4: 检查格式**

Run: `git diff --check -- '80-Leon2030人生事业战略/00-顶层战略框架'`

Expected: 无输出，退出码0。

---

### Task 2: 建立第四板块运行入口

**Files:**
- Create: `80-Leon2030人生事业战略/04-战略路径与执行/README.md`

**Interfaces:**
- Consumes: V2.0模块01—09的目标、事业和个人成长要求。
- Produces: 模块10的差距结论供模块11使用；模块11的当前阶段与门槛供模块12使用；模块12的复盘结论返回模块01—11。

- [ ] **Step 1: 创建第四板块README**

文件必须包含：V2.0上级链接；板块定位；模块10—12表格；模块10的输入、输出和事实/判断/假设分离；模块11的阶段顺序、主要矛盾、资源能力和结果门槛；模块12的年度重点、90天行动、领先指标、结果指标、停止条件和复盘；`01—09 → 10 → 11 → 12 → 01—11校准`闭环；不填未经验证内容且不创建空目录的边界。

- [ ] **Step 2: 验证职责契约**

Run:

```bash
python3 -c 'from pathlib import Path; s=Path("80-Leon2030人生事业战略/04-战略路径与执行/README.md").read_text(); required=["现状基线","关键差距","主要矛盾","阶段划分","先后顺序","结果门槛","年度重点","90天行动","战略复盘","01—11"]; missing=[x for x in required if x not in s]; assert not missing, missing; print("Path modules: PASS")'
```

Expected: `Path modules: PASS`。

- [ ] **Step 3: 检查格式**

Run: `git diff --check -- '80-Leon2030人生事业战略/04-战略路径与执行/README.md'`

Expected: 无输出，退出码0。

---

### Task 3: 切换当前入口与版本引用

**Files:**
- Modify: `80-Leon2030人生事业战略/README.md`
- Modify: `80-Leon2030人生事业战略/02-事业系统/README.md`
- Modify: `80-Leon2030人生事业战略/02-事业系统/06-资源体系/README.md`
- Modify: `80-Leon2030人生事业战略/02-事业系统/06-资源体系/Leon-2030-Resource-Map-V0.1.md`

**Interfaces:**
- Consumes: Task 1的V2.0入口和Task 2的第四板块入口。
- Produces: 所有当前导航一致指向V2.0；资源地图继续归属第二板块06资源体系。

- [ ] **Step 1: 更新战略目录README**

将当前框架升级为V2.0、四大板块、十二个模块；结构树增加第四板块；导航增加V2.0、第四板块和V1.0历史版本；归档原则明确V2.0是当前唯一入口。

- [ ] **Step 2: 更新事业系统与资源体系README**

只将上级/顶层框架文本与相对链接切换到V2.0，保留模块04—06及资源体系正文。

- [ ] **Step 3: 更新资源地图归属**

只将归属和顶层框架引用从V1.0改为V2.0；十大资源库、L0—L5、资源卡、Leon View和数据原则不得变化。

- [ ] **Step 4: 检查旧版本引用**

Run: `rg -n 'V1\.0|三大板块|九个模块' '80-Leon2030人生事业战略' -g '*.md'`

Expected: 仅V1.0历史文件、V2.0历史说明和根README历史导航允许出现；事业系统README、资源体系README和资源地图不得出现V1.0。

---

### Task 4: 全局验证、提交与推送

**Files:**
- Verify: `80-Leon2030人生事业战略/**/*.md`
- Commit: Task 1—3列出的六个实施文件

**Interfaces:**
- Consumes: Task 1—3全部产出。
- Produces: 可导航、无断链、无无关变更的V2.0战略地图提交。

- [ ] **Step 1: 再次确认V1.0哈希**

Run: `shasum -a 256 '80-Leon2030人生事业战略/00-顶层战略框架/Leon-2030人生事业战略地图-V1.0.md'`

Expected: 与Task 1 Step 1完全一致。

- [ ] **Step 2: 检查所有相对Markdown链接**

Run:

```bash
python3 -c 'from pathlib import Path; import re; root=Path("80-Leon2030人生事业战略"); bad=[]; pat=re.compile(r"\[[^\]]+\]\(([^)]+)\)"); [(bad.append((str(p),t)) if not (p.parent/t.split("#",1)[0]).resolve().exists() else None) for p in root.rglob("*.md") for t in pat.findall(p.read_text()) if not t.startswith(("http://","https://","#"))]; assert not bad, bad; print("Relative links: PASS")'
```

Expected: `Relative links: PASS`。

- [ ] **Step 3: 检查格式和变更范围**

Run: `git diff --check && git status --short && git diff --stat`

Expected: 无空白错误；只出现Task 1—3列出的六个战略文件。

- [ ] **Step 4: 提交实施文件**

Stage only the six files listed under File Structure, then run `git diff --cached --check` and commit with message `升级Leon 2030战略地图至V2.0`。

Expected: V1.0历史文件不在提交变更列表中。

- [ ] **Step 5: 推送并核对远端**

Run: `git fetch origin main`，如远端领先则运行`git rebase origin/main`，然后运行`git push origin main`、再次`git fetch origin main`并比较`HEAD`与`origin/main`。

Expected: 推送成功，`HEAD`与`origin/main`一致。

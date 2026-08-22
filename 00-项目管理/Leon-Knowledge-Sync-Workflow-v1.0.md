# Leon Knowledge Sync Workflow v1.0

## 目标
建立 Leon 欧洲渠道智能体知识库的同步管理流程。

## 当前架构

GitHub Remote
↓
GitHub Desktop Local Repository
↓
Codex 工作环境

## 同步规则

1. 所有知识沉淀必须进入 GitHub Remote。
2. 本地 GitHub Desktop 需要保持同步。
3. Channel Card、Leon View、项目文档必须通过版本记录管理。

## 当前限制

GitHub Remote 可以通过自动化工具维护。
本地 GitHub Desktop 不能由远程工具直接点击 Pull，需要在用户设备执行同步操作。

## 推荐本地同步方式

方式1：GitHub Desktop
- Fetch origin
- Pull origin

方式2：Terminal
- git pull origin main

## 后续自动化方向

阶段1：
人工审核 + GitHub版本管理

阶段2：
Codex辅助生成Channel Card

阶段3：
Research Agent自动发现渠道变化并生成更新建议

## 权限原则

Leon View属于核心知识资产：
- AI可以整理
- AI可以格式化
- AI不能未经Leon确认修改核心判断

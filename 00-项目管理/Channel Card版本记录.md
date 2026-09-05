# Channel Card版本记录

## v2.0

日期：2026-09-05

升级内容：

- 保持原 8 大渠道分类不变，明确一级渠道支持多标签。
- 将既有同义字段合并为九段：身份、渠道与标签、产品匹配、组织决策、区域强弱、进入路径、Leon View/风险/误区、AI 调用、证据可信度。
- 产品匹配统一使用“高 / 中 / 低 / 不适合”，并记录匹配理由与证据状态。
- 组织决策必须回答谁组织、谁采购、谁决定上架、门店/成员自主权。
- 区域部分只保留判断与关键节点，详细网点和成员数据链接底层数据库或专项事实卡。
- 进入路径明确切入层级、切入方式、新品牌难度与关键门槛。
- 标准化公开事实、Leon View、Field Intelligence、Private Layer、更新时间与信息可信度边界。

兼容说明：

- v1.0 的 Channel Ecosystem、Decision Making、Entry Strategy、Leon View、AI Retrieval Tags、Member Database、Private Layer 均被保留并合并到新版对应段落。
- `Channel-Card模板.md` 作为稳定入口指向当前正式版本；`Channel-Card模板-v1.0.md` 保留用于历史追溯。

## v1.0

日期：2026-08-22

冻结内容：

- 渠道分类（Channel Taxonomy）
- Vertical标签
- Business Model商业模型标签
- Channel Ecosystem
- Decision Making
- Entry Strategy
- Leon View字段
- AI Retrieval Tags
- Private Layer

说明：
Channel Card v1.0作为未来所有西班牙渠道卡的统一标准模板。

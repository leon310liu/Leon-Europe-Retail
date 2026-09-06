# 05 本土批发采购集团

收录西班牙本土进口商、批发商和采购集团。研究重点包括进口责任、覆盖区域、下游客户、库存承担、批发利润和渠道冲突。

## 已建 Channel Card
- [西班牙五大采购集团总览｜第一阶段框架](./西班牙五大采购集团总览.md) — 01 Sinersis；02 SEGESA；03 Eldisser；04 HGM；05 Cadena Elecco。先建地图和统一入口，真实项目触发后再下钻。
- [Coferdroza](./Coferdroza-Channel-Card.md) — 同时标注 `03 家居建材DIY` 与 `05 本土批发采购集团`
- CECOFERSA
- COMAFE
- [Sinersis](./Sinersis-Channel-Card.md) — 同时标注 `02 家电消费电子` 与 `05 本土批发采购集团`；本目录保存唯一正式卡，相关分类通过链接调用
- [SEGESA / Cadena Redder](./SEGESA-Channel-Card.md) — V1.0 主卡，采用 Channel Card V2.0 结构；同时标注 `02 家电消费电子` 与 `05 本土批发采购集团`；[12 大成员与区域明细](../02-家电消费电子/SEGESA-Cadena-Redder-Channel-Intelligence-Card-2026.md)在底层数据库维护
- [Eldisser](./Eldisser-Channel-Card.md) — 第一阶段统一入口；详细事实继续由底层卡维护
- [HGM](./HGM-Channel-Card.md) — 第一阶段统一入口；详细事实继续由底层卡维护
- [Cadena Elecco](./Cadena-Elecco-Channel-Card.md) — 第一阶段统一入口；详细事实继续由底层卡维护

## 五大采购集团当前工作原则

`先有地图 → 再有渠道卡 → 真实项目触发深挖 → 市场反馈写回来`

本阶段不为补齐空字段继续全面研究。只有具体产品、项目或真实渠道接触触发时，才下钻采购节点、区域成员、采购权和关键联系人。

## 本类渠道统一核验框架
不能因为结构类似就默认交易机制相同。每张卡必须分别核实：
1. 谁批准新供应商/新品牌；
2. 是否存在中央仓、哪些SKU进入中央库存；
3. 是否允许会员直接向供应商/制造商采购；
4. 谁向购买方开票；
5. 谁承担付款与信用风险；
6. 会员自主权及是否可同时使用其他采购集团/供应商。

公开事实、AI分析、Leon View必须分层记录；自动研究不得自行生成Leon View。

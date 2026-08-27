# 04 华人百货渠道

收录西班牙华人经营的百货、批发与区域网络。其价值常在于快速测试和灵活采购；研究时同时关注网络分散、价格敏感和经营数据不标准的问题。

## 已收录

- `华人百元店渠道卡-v1.0.md`：终端零售网络与 Leon View 基础认知。
- `Cobo-Calleja-Wholesale-Hub-Channel-Card.md`：Cobo Calleja 批发/分销节点公开事实基线。
- `Cobo-Calleja-Hair-Dryer-Wholesale-Snapshot-2026-08-26.md`：Cobo Calleja 当前吹风机 B2B 类目、具体 Vendor 样本与 001 AI吹风机企业级筛选规则。
- `EBOX-Cobo-Calleja-Consumer-Electronics-Wholesale-Channel-Card.md`：Cobo Calleja 消费电子/小家电 B2B 批发商样本，覆盖门店、分销商、电商客户及公开最小订单门槛。
- `IGO-Kiten-Cobo-Calleja-Consumer-Electronics-Wholesale-Channel-Card.md`：IGO Kiten 2008 S.L. / IGO Madrid 独立企业官网、消费电子/Beauty & Health/小家电目录与具体吹风机 Vendor 交叉验证样本。

## 数据规则

- 华人百货终端与华人批发供应链必须分层记录，不能混为一个渠道主体。
- Cobo Calleja 园区层、具体批发企业层、终端百货层必须分别建模；园区存在某个品类不等于所有企业都经营该品类。
- 对消费电子/小家电批发企业，应继续核验：实际SKU、品牌关系、Importer of Record、RII-AEE/EPR、库存/开票主体、SAT售后、下游客户类型和付款条件。
- 对 001 AI吹风机，必须进一步区分传统低价吹风机批发与高速 BLDC / 智能温控 / 品牌化 Hair Tools 分销，不能仅因同属 `Secadores` 类目就判定渠道适配。
- B2B平台 Vendor 标识只能证明平台展示/销售关系，不能自动升级为制造商、Importer of Record、品牌方或官方代理关系。
- 商业目录中的企业信息属于线索级证据；建立单独 Channel Card 前，需要用企业官网、法律主体、品牌授权或其他独立来源二次核验。
- 公开资料中的园区企业数量、门店数量、全国覆盖等数据必须带来源和日期。
- 历史执法或监管案例只能证明具体时期/对象的事实，不能外推为整个华人渠道的普遍合规结论。
- 企业官网中的“制造/自有品牌/官方品牌”等表述必须与法律主体和授权关系分开验证，不能自动升级为独家代理或进口商事实。
- Leon View 只记录 Leon 明确确认的经验判断；公开事实卡不自动生成 Leon View。

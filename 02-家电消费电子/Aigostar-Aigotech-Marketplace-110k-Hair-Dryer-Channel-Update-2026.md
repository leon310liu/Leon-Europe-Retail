# Aigostar / Aigotech — Marketplace 110k 高速吹风机渠道更新（2026）

> 类型：公开事实渠道更新 / 001 AI吹风机直接相关
> 更新时间：2026-09-02
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增Leon View。

## 1. 核心新增事实

截至2026-09-02，Aigostar 110,000 rpm高速吹风机已经可以在西班牙两家大型综合/消费电子零售平台公开验证，但两个当前样本均为第三方Marketplace seller路径，而不是平台1P采购证据。

### A. MediaMarkt Spain

MediaMarkt.es 当前公开销售：
- 品牌：AIGOSTAR
- 产品：AirJet
- 功率：1600W
- 电机：BLDC 110,000 rpm
- 公开风速描述：21 m/s
- 公开重量：390g
- 温控：NTC，页面描述为55°C恒温控制
- 当前页面价格快照：€35.92（原价€47.99）
- Seller / Fulfillment：**Vendido y enviado por Aigotech**

来源：
- https://www.mediamarkt.es/es/product/_secador-aigostar-airjet-1600-w-4-niveles-temperatura-negro-176150323.html

数据治理：该页面可以证明Aigostar AirJet已进入MediaMarkt.es Marketplace，但不能写成“MediaMarkt采购Aigostar AirJet”或“MediaMarkt 1P销售”。

### B. Carrefour Spain

Carrefour.es 当前公开销售另一款Aigostar高速吹风机：
- 品牌：Aigostar
- EAN：8719138850556
- 功率：1600W
- 电机：BLDC 110,000 rpm
- 页面描述：智能NTC温控、离子功能
- 页面价格快照：€36.94（页面划线价€57.25）
- 页面标记：EXCLUSIVO ONLINE
- Seller：**Aigotech**
- Carrefour明确写明：该offer“vendida y enviada por un tercero”，退货通过线上账户处理

来源：
- https://www.carrefour.es/secador-de-pelo-ionico-1600w-110000rpm-2-velocidades-4-temperaturas-aigostar/8719138850556/p

数据治理：该页面可以证明Aigostar 110k吹风机已进入Carrefour Marketplace，但不是Carrefour 1P采购证据。

## 2. Aigostar公开渠道能力背景

Aigostar官方西班牙网站当前同时提供：
- Producto B2B
- Compra Online
- “¿Te gustaría convertirte en nuestro distribuidor?”经销商注册入口
- 官方列出的六类服务能力，包括稳定产品供应、差异化产品开发、销售系统、终端陈列、仓储物流和产品营销支持

来源：
- https://www.aigostar.com/index/ES

这可以确认Aigostar公开存在B2B经销/分销招募与线上销售并行的渠道结构，但公开页面不能用于推断具体客户采购关系、MOQ、账期或渠道毛利。

## 3. Aigotech seller身份治理

公开页面可确认：
- MediaMarkt将当前Aigostar AirJet offer显示为“Vendido y enviado por Aigotech”。
- Carrefour将当前Aigostar 110k吹风机offer显示为Aigotech第三方销售。
- Worten.es当前多个Aigostar家电SKU同样显示“Vendido y enviado por Aigotech”，并公开展示Aigotech seller评分和累计销售指标。
- 第三方工商公开资料显示“Aigotech Onsynk S.L.”网站包括 aigostar.com；但本文件不据此自行认定Aigotech与Aigostar之间的最终股权、品牌授权或集团法律关系。

辅助来源：
- https://www.worten.es/productos/freidora-de-aire-aigostar-cube-7l-1900w-mrkean-8719138812295
- https://empresite.eleconomista.es/AIGOTECH-ONSYNK.html

治理规则：
`Brand = Aigostar` 与 `Marketplace Seller = Aigotech` 分字段记录；未经正式法律/官方集团资料验证，不把两者自动合并为同一法律实体。

## 4. 对001知识库的直接意义

### 公开事实

110k rpm级高速吹风机不仅通过Carrefour/MediaMarkt的1P体系出现，也存在“品牌/关联seller自行运营大型平台Marketplace”的公开实例。

### 分析推断（非公开事实）

Aigostar/Aigotech样本说明，大型零售平台上的商品存在至少两种完全不同的进入方式：

1. `Retailer 1P purchase → retailer sells`
2. `Marketplace seller → retailer platform → consumer`

因此，对001后续做竞品渠道映射时，仅记录“已进入MediaMarkt/Carrefour”会高估真实采购深度；必须继续记录Seller和Fulfillment。

该段为结构分析推断，不是Leon View。

## 5. 建议统一的数据字段

对所有大型平台商品继续使用：

`SKU → Offer → Seller → Fulfillment → 1P/Marketplace → Price → Capture Date`

特别禁止：
- 看到商品存在于MediaMarkt/Carrefour就写成“已被渠道采购”；
- 把Marketplace seller价格当作平台1P价格；
- 把Aigotech与Aigostar自动视为同一法律实体；
- 从公开零售价反推采购价、毛利或账期。

## 6. TO VERIFY

仍待公开来源进一步验证：
- Aigotech与Aigostar当前正式法律/集团关系；
- Aigostar AirJet是否存在MediaMarkt或Carrefour 1P offer；
- Aigostar是否通过西班牙其他采购集团/专业家电渠道销售该110k产品；
- 具体Buyer、MOQ、账期、返利、平台佣金和销售量。

## 7. Leon View

本轮没有新增、修改或推断任何Leon View。

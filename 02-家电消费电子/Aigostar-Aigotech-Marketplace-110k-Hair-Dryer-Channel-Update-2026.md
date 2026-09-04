# Aigostar / Aigotech — Marketplace 110k 高速吹风机渠道更新（2026）

> 类型：公开事实渠道更新 / 001 AI吹风机直接相关
> 更新时间：2026-09-04
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增Leon View。

## 1. 核心新增事实

截至2026-09-04，Aigostar 110,000 rpm高速吹风机可以在西班牙两家大型综合/消费电子零售平台公开验证，当前样本均为第三方Marketplace seller路径，而不是平台1P采购证据。

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
- PcComponentes的Aigostar seller页面公开显示卖家公司为 **AIGOTECH ONSYNK SL**、CIF **B85712198**、地址在Parla（Madrid）；但该店当前页面同时标记为“la tienda se encuentra actualmente desactivada”。
- Worten历史商品页仍可被搜索引擎抓取，并显示多个Aigostar SKU由Aigotech销售；但**Worten已于2026年7月31日停止西班牙半岛电商运营**，因此这些页面只能作为历史Marketplace证据，不能作为2026-09当前西班牙半岛有效销售渠道证据。

来源：
- https://www.pccomponentes.com/tiendas/aigostar-store
- https://www.ocu.org/consumo-familia/compras-online/noticias/cierre-web-worten
- https://www.alimarket.es/electro/noticia_amp/428645/worten-culmina-su-etapa-en-la-espana-peninsular-con-el-cierre-de-su-ecommerce

治理规则：
`Brand = Aigostar` 与 `Marketplace Seller = Aigotech` 分字段记录；未经正式法律/官方集团资料验证，不把两者自动合并为同一法律实体。

同时增加渠道状态字段：
`Channel status = active / historical / closed / geography-limited`。

## 4. 对001知识库的直接意义

### 公开事实

110k rpm级高速吹风机存在“品牌/关联seller自行运营大型零售平台Marketplace”的公开实例；但Marketplace平台本身也可能退出特定地理市场，因此SKU历史页面不能自动等同于当前可进入渠道。

### 分析推断（非公开事实）

Aigostar/Aigotech样本说明，大型零售平台上的商品存在至少两种完全不同的进入方式：

1. `Retailer 1P purchase → retailer sells`
2. `Marketplace seller → retailer platform → consumer`

同时，渠道有效性还必须增加第三个维度：

3. `Platform / geography status → active or historical`

因此，对001后续做竞品渠道映射时，仅记录“已进入某零售商”会高估真实采购深度和当前渠道可用性；必须继续记录Seller、Fulfillment、抓取日期和渠道状态。

该段为结构分析推断，不是Leon View。

## 5. 建议统一的数据字段

对所有大型平台商品继续使用：

`SKU → Offer → Seller → Fulfillment → 1P/Marketplace → Price → Capture Date → Channel Status → Geography`

特别禁止：
- 看到商品存在于MediaMarkt/Carrefour就写成“已被渠道采购”；
- 把Marketplace seller价格当作平台1P价格；
- 把Aigotech与Aigostar自动视为同一法律实体；
- 将搜索引擎仍可抓取的Worten旧商品页写成“当前西班牙半岛有效销售渠道”；
- 从公开零售价反推采购价、毛利或账期。

## 6. TO VERIFY

仍待公开来源进一步验证：
- Aigotech与Aigostar当前正式法律/集团关系；
- Aigostar AirJet是否存在MediaMarkt或Carrefour 1P offer；
- Aigostar是否通过西班牙采购集团/专业家电渠道销售该110k产品；
- Worten Canarias当前是否销售Aigostar 110k吹风机，以及其Canarias marketplace与半岛原Marketplace的seller onboarding是否相同；
- 具体Buyer、MOQ、账期、返利、平台佣金和销售量。

## 7. Leon View

本轮没有新增、修改或推断任何Leon View。

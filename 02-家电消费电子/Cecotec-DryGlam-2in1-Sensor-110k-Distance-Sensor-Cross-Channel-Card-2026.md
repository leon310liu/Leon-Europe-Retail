# Cecotec DryGlam 2in1 Sensor × 110k × 距离传感 × 跨渠道 Channel Card（2026）

> 类型：公开事实 Channel Card / 西班牙家电消费电子 / 001 AI吹风机直接相关
> 更新时间：2026-09-11
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增Leon View。

## 1. 为什么该SKU与001直接相关

Cecotec官方当前公开销售 **DryGlam 2in1 Sensor**。与仅有110,000 rpm高速无刷电机的普通benchmark相比，该SKU还明确存在：

- Brushless / BLDC电机；
- **110,000 rpm**；
- 1400W；
- **智能温度控制**；
- **距离传感器（sensor de distancia）用于热量控制**；
- 自动调节温度以避免过热；
- 头皮保护模式；
- 离子/Plasma；
- 2档速度、3档温度；
- 浓缩风嘴与扩散风嘴。

Cecotec官方产品页明确写：`Sensor de distancia para control de calor`，并说明系统会自动调节温度以避免过热、保护头发和头皮。

来源：
- Cecotec官方：https://cecotec.es/es/secadores-de-pelo/dryglam-2in1-sensor-champagne

数据边界：Cecotec官方使用“Sensor inteligente / secado inteligente”等描述，但本轮未找到其把该型号明确命名为AI hair dryer或披露AI算法，因此知识库不得自行把该SKU升级为“AI吹风机”。

## 2. Cecotec D2C — 官方直营

Cecotec官方站当前页面状态：
- 型号：DryGlam 2in1 Sensor Champagne
- Reference：A01_EU01_122040
- 页面显示：In Stock
- 公开价格快照：€69.90（2026-09-11抓取）
- 官方直接提供购买入口与产品手册

来源：
- https://cecotec.es/es/secadores-de-pelo/dryglam-2in1-sensor-champagne

价格仅作为抓取时快照，不作为长期RRP。

## 3. Carrefour Spain — Cecotec Official Store Marketplace路径

Carrefour.es当前公开存在 **DryGlam 2in1 Sensor Black**：
- EAN：**8447562031820**
- 1400W
- 页面标题标注110,000 rpm
- 页面正文描述智能温控/传感器与头皮保护
- 当前主要Offer显示 `Vendido por Cecotec Official Store`
- Carrefour明确标注：该Offer由第三方销售和发货，退货通过线上第三方流程处理
- 页面另有PRECIOMANIA等其他第三方Offer

来源：
- https://www.carrefour.es/secador-de-pelo-iones-dryglam-2in1-sensor-black-1400w-110000rpm-tecnologia-sensor-temperatura-motor-brushless-cecotec/8447562031820/p

### 数据治理

该页面只能证明：

**Cecotec Official Store作为第三方Seller进入Carrefour Marketplace，并销售该110k + Sensor SKU。**

不得把它写成Carrefour 1P中央采购，也不得据此推断该SKU已进入Carrefour实体店库存。

## 4. PcComponentes — 第三方Marketplace路径 + 规格冲突

PcComponentes当前公开存在同一Black SKU：
- P/N：**8447562031820**
- Cod. Artículo：11066200
- 当前页面Seller：**PRECIOMANIA**
- 页面明确显示 `Vendido y enviado por PRECIOMANIA`
- 页面卖点明确写：`sensor inteligente de temperatura y distancia`

来源：
- https://www.pccomponentes.com/secador-de-pelo-ionico-cecotec-dryglam-2in1-sensor-1400w-5-temperaturas-2-velocidades-con-accesorios-negro

### 4.1 重要规格冲突：110k vs 120k

同一PcComponentes商品页存在明显规格口径冲突：

- 商品标题/品牌官方口径：DryGlam 2in1 Sensor属于110,000 rpm产品；
- Cecotec官方当前页面明确：**110,000 rpm**；
- PcComponentes该EAN页面的正文与规格表却写：**120,000 rpm**。

因此知识库统一标记：

`OFFICIAL / RETAILER SPEC CONFLICT — Cecotec official = 110,000 rpm; PcComponentes marketplace page body/spec table = 120,000 rpm; TO VERIFY retailer feed accuracy.`

在没有制造商新技术文件证明参数发生变更前，不得因为PcComponentes页面的120k字段覆盖Cecotec官方110k数据。

## 5. MediaMarkt Spain — 同SKU进入主流消费电子零售网站

MediaMarkt Spain当前公开存在：
- 产品：Cecotec DryGlam 2in1 Sensor Champagne
- Número de artículo：**1628012**
- 标题：Sensor inteligente / Brushless / 1400W / 110,000 rpm
- 页面正文明确：自动调温防过热
- 明确写有：**sensor de distancia para control de calor**
- 页面支持在线购买，并显示门店取货可查询

来源：
- https://www.mediamarkt.es/es/product/_secador-cecotec-dryglam-2in1-sensor-champagne-sensor-inteligente-brushless-1400w-110000rpm-iones-2-velocidades-champagne-1628012.html

### Seller边界

本轮抓取到的MediaMarkt正文没有显示类似Marketplace商品常见的 `Vendido y enviado por [seller]` 字段，但仅凭字段缺失不足以证明它一定是MediaMarkt 1P。

因此当前记录为：

`VERIFIED MediaMarkt listing / seller role TO VERIFY`。

不得在没有明确Seller证据时把该SKU写成MediaMarkt中央采购或1P自营。

## 6. 可确认的跨渠道公开事实

截至2026-09-11，同一个产品族已经至少公开出现在：

1. **Cecotec官方D2C**；
2. **Carrefour Marketplace — Cecotec Official Store 3P**；
3. **PcComponentes Marketplace — PRECIOMANIA 3P**；
4. **MediaMarkt Spain商品体系 — Seller角色仍待验证**。

其中Black版本可以通过EAN `8447562031820`对齐Carrefour和PcComponentes页面；Champagne版本通过Cecotec官方reference及MediaMarkt商品编号验证产品族存在。

## 7. 对001有价值的公开benchmark维度

该SKU提供了一个比“110k + 负离子”更接近001研究需求的公开benchmark：

- 高速BLDC/Brushless：已验证
- 110k rpm：制造商官方已验证
- 距离传感：已验证
- 自动温控：已验证
- 头皮保护：已验证
- Plasma / Ionic：已验证
- AI算法：**未验证**
- AI命名：**未验证**

因此，在知识库中应将其描述为：

`110k high-speed brushless hair dryer with intelligent temperature control + distance sensing + scalp-protection features`

而不是自动写成AI hair dryer。

## 8. 分析推断（非公开事实）

基于公开渠道结构，可以研究三种进入模型：

**路径A：品牌 → 自有D2C → 消费者**

**路径B：品牌官方店 → 大型综合零售Marketplace → 消费者**

**路径C：品牌/分销seller → 消费电子Marketplace → 消费者**

MediaMarkt页面说明该技术组合已经出现在西班牙头部消费电子零售网站环境中，但在Seller身份没有被明确验证前，不能推断MediaMarkt Buyer已经完成1P采购。

以上均为分析推断，不是001已进入这些渠道的事实，也不是Leon View。

## 9. 待验证

- MediaMarkt该SKU当前Seller是否为MediaMarkt 1P
- Cecotec Official Store在Carrefour Marketplace的法律销售主体
- PRECIOMANIA从何种上游获得该SKU
- Cecotec是否存在该型号120,000 rpm的新硬件revision；若无，则PcComponentes 120k字段应视为feed错误
- Cecotec / Carrefour / MediaMarkt / PcComponentes之间是否存在任何1P批发供货关系
- 实体门店实际铺货范围和库存
- 采购Buyer、MOQ、账期、返点、listing fee与营销费用

## 10. Leon View

本文件**不新增、不修改、不推断任何Leon View**。任何Leon View必须由Leon本人明确提出后再写入。
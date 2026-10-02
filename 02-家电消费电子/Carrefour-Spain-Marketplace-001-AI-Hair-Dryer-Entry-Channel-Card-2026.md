# Carrefour Spain Marketplace × 001 AI吹风机进入路径 — Channel Card（2026）

> 类型：公开事实知识库 / 001 AI吹风机直接相关
> 更新时间：2026-09-11
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增、不修改Leon View。

## 1. Channel Definition

**Channel:** Carrefour Spain / Carrefour.es Marketplace  
**Channel Type:** 综合零售 / 大型商超数字Marketplace  
**Geography:** Spain  
**Status:** Active（截至2026-09-11公开页面可验证）

Carrefour Spain官方将Marketplace定义为：第三方卖家通过Carrefour.es销售商品，消费者不是直接向Carrefour购买，而是向Carrefour筛选的外部卖家购买。商品页会展示卖家身份。

官方来源：
- https://www.carrefour.es/condiciones/marketplace.e
- https://www.carrefour.es/condiciones-generales-de-compra/mas-info/

## 2. Marketplace进入规则 — PUBLIC FACT

Carrefour Spain官方Marketplace招募页面当前公开以下规则/能力：

- 卖家先创建seller账户，并由Carrefour.es Marketplace团队协助；
- 卖家上传产品目录并发布offer；
- 卖家按照其配送条件准备和发送商品；
- Carrefour公开称卖家**每月收款3次**；
- Carrefour公开称Marketplace**无固定membership fee（Sin cuota fija de pertenencia）**；
- Carrefour要求潜在卖家通过官方表单提交资料，以便其提出具体合作方案；
- 官方页面称Marketplace覆盖约**2 million products**；
- 官方页面称平台约有**170 million visits per year**；
- 官方页面称覆盖约**8 million loyalty households（hogares fidelizados）**。

来源：
- https://www.carrefour.es/servicios/marketplace-carrefour.e

### 数据治理

上述数字为Carrefour Spain当前公开Marketplace页面的自述数据；页面未在抓取文本中给出统计期间，因此记录为：

`Current official webpage claim / capture date 2026-09-11`

不得将其自动解释为2026完整自然年度实际数据。

## 3. Seller法律与履约关系 — PUBLIC FACT

Carrefour Spain当前官方购买条件明确：

- Marketplace交易发生在消费者与第三方卖家之间；
- Carrefour仅提供平台，不是第三方seller销售合同的一方；
- 第三方seller对其销售商品和消费者关系负责；
- 商品浏览/商品页会明确显示seller身份；
- 不同seller可以自行设定配送公司、配送费用和交付时间；
- Marketplace支持西班牙seller、EU seller和non-EU seller的交易场景；
- 对境外seller，税务/进口处理取决于seller所在地及交易情况。

来源：
- https://www.carrefour.es/condiciones-generales-de-compra/mas-info/
- https://www.carrefour.es/condiciones/marketplace.e

### 关键治理规则

`Listed on Carrefour.es` **不等于** `Carrefour 1P purchased / centrally purchased`。

必须逐SKU记录：

`SKU → Offer → Seller → Fulfillment → 1P/Marketplace → Price → Capture Date`

## 4. 001 AI吹风机直接相关样本 — PUBLIC FACT

### A. Cecotec DryGlam Waves 6in1 Sensor

Carrefour.es当前公开商品页：

- Brand: Cecotec
- Product: DryGlam Waves 6in1 Sensor
- Motor: Brushless
- Speed: **110,000 rpm**
- Power: **1400W**
- Sensor: **distance sensor**
- Function: 根据吹风机与头发的距离自动调节热量，以降低过热风险；
- Memory function: 页面公开描述存在记忆功能；
- Accessories: 6个附件；
- Listing: **EXCLUSIVO ONLINE**；
- 当前页面可见seller包括 **Cecotec Official Store**，同时页面亦出现其他第三方offer，例如Preciomania。

来源：
- https://www.carrefour.es/secador-de-pelo-iones-con-6-accesorios-dryglam-waves-6in1-sensor-1400w-110000rpm-tecnologia-de-sensor-de-distancia-cecotec/8447420875573/p

### B. Cecotec DryGlam 2in1 Sensor Black

Carrefour.es当前公开：

- 1400W
- 110,000 rpm
- Brushless motor
- temperature sensor
- 页面描述sensor用于智能调节温度并保护头发/头皮
- 页面标记 `EXCLUSIVO ONLINE`

来源：
- https://www.carrefour.es/secador-de-pelo-iones-dryglam-2in1-sensor-black-1400w-110000rpm-tecnologia-sensor-temperatura-motor-brushless-cecotec/8447562031820/p

### C. Aigostar 110k NTC Hair Dryer

Carrefour.es当前公开：

- Brand: Aigostar
- 1600W
- 110,000 rpm BLDC
- 页面描述 `control inteligente de temperatura` / NTC intelligent temperature-control chip
- Seller: **Aigotech**
- Carrefour明确标记该offer为第三方销售和发货
- 页面标记 `EXCLUSIVO ONLINE`

来源：
- https://www.carrefour.es/secador-de-pelo-ionico-1600w-110000rpm-2-velocidades-4-temperaturas-aigostar/8719138850556/p

该Aigostar样本已在知识库既有文件 `Aigostar-Aigotech-Marketplace-110k-Hair-Dryer-Channel-Update-2026.md` 中记录。本文件不重复将其作为新产品发现，而是将其纳入Carrefour Marketplace结构验证。

## 5. Professional Hair seller样本 — PUBLIC FACT

Carrefour当前还存在专业美容seller通过Marketplace销售110k高速吹风机的样本：

- Product: Veloce Slim BLDC Ionic Pro
- Speed: **110,000 rpm**
- Power: 1600W
- Seller: **THE BEAUTY CORNER**
- Carrefour明确说明该offer由第三方销售和发送；
- Manufacturer / Importer字段显示：**Postquam Cosmetic, S.L.**, Cigales, Valladolid, Spain。

来源：
- https://www.carrefour.es/secador-profesional-veloce-slim-bldc-ionic-pro-110000-rpm/8432729114539/p

该事实说明Carrefour Marketplace的110k hair-dryer供给并不只来自大众家电品牌seller，也存在beauty/professional seller参与。

## 6. Carrefour Spain实体网络背景 — DATED PUBLIC FACT

Carrefour Spain于**2025-06-09**官方新闻稿披露：

- 当时约有**1,500 establishments**；
- 其中**200+ hypermarkets**；
- 接近**1,100 Carrefour Express**；
- 当时计划2025年底超过**1,600 stores**。

来源：
- https://www.carrefour.es/_includes/multimedia/es/w24_np_carrefour-acelera-su-crecimiento-con-mas-aperturas-20250609_tcm5-58639.pdf

### 数据治理

这是**2025-06-09 dated fact + 2025 year-end target**，不能直接写成2026-09-11当前精确门店数。当前精确门店数量继续标记：`TO VERIFY`。

同时，Marketplace商品标记`EXCLUSIVO ONLINE`不能自动推断进入Carrefour hypermarket实体货架。

## 7. 001进入路径 — ANALYTICAL INFERENCE（非公开组织图）

基于公开seller规则和当前hair-dryer offer，可以建立以下**分析模型**，但不能写成Carrefour正式采购组织图：

### Route A — Marketplace seller test

`Brand / Distributor / EU Seller → Carrefour Marketplace → Consumer`

公开事实支持Carrefour接受第三方seller、seller自行上传目录和履约，且页面提供seller招募入口。

### Route B — Brand official store

`Brand Official Store → Carrefour Marketplace → Consumer`

Cecotec Official Store是当前公开样本。

### Route C — Beauty / professional distributor seller

`Beauty / Professional Distributor → Carrefour Marketplace → Consumer`

THE BEAUTY CORNER销售110k Veloce是当前公开样本。

以上为结构分析推断，不代表001已获准入驻，也不代表Carrefour 1P采购部门的实际组织结构。

## 8. Entry-rule relevance to 001

### 已公开可验证

- seller申请入口：Yes
- fixed membership fee：官方写明 **No fixed membership fee**
- payout cadence：官方写明 **3 times per month**
- seller manages catalog：Yes
- seller shipping responsibility：Yes
- seller identity visible：Yes
- third-country seller scenario：官方消费者规则存在明确说明
- 110k hair dryer category presence：Yes
- distance/temperature sensor hair dryer presence：Yes
- professional-beauty seller presence：Yes

### TO VERIFY

目前公开来源尚不足以确认：

- 001申请时的具体category commission rate；
- Hair Care / PAE对应seller commission；
- seller审批门槛和拒绝条件；
- 是否要求Spain/EU entity、Spain VAT或EU VAT作为强制准入条件；
- CE / WEEE / EPR资料在seller onboarding中的具体上传节点；
- 是否要求本地退货地址；
- seller SLA和performance threshold；
- Carrefour 1P Personal Care / PAE buyer身份；
- 1P采购MOQ、账期、返利、listing fee；
- Marketplace seller能否通过销售表现转入1P；
- `EXCLUSIVO ONLINE` SKU是否存在任何线下试点机制。

## 9. Conflict / stale-data check

本轮未发现上述001直接相关SKU关键规格之间存在足以升级为`CONFLICT`的公开来源矛盾。

发现一项知识库治理重点：

- Carrefour 2025-06-09新闻稿中的`1,500 stores current / >1,600 year-end target`属于历史时点数据；
- 不应在2026知识库中写成“Carrefour Spain currently has 1,600+ stores”，除非找到2026官方更新进行验证。

## 10. Leon View

**本轮没有新增、修改、推断或自行编写任何Leon View。**

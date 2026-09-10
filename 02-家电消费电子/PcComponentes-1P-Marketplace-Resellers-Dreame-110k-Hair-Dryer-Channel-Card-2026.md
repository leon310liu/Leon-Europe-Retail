# PcComponentes × 1P / Marketplace / Resellers × Dreame 110k Hair Dryer — Channel Card（2026）

> 类型：公开事实 Channel Card / 西班牙消费电子渠道 / 001 AI吹风机相关
> 更新时间：2026-09-10
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增Leon View。

## 1. 为什么值得纳入001渠道地图

PcComponentes并不只是单一电商零售节点。2026年公开资料可以同时验证三类不同业务关系：

1. **PcComponentes 1P自营零售**：商品页明确出现“Vendido y enviado por PcComponentes”。
2. **PcComponentes Marketplace第三方零售**：同一品类存在第三方seller，商品页会明确显示第三方销售/发货主体。
3. **PcComponentes Resellers批发/转售计划**：PcComponentes公开提供面向企业、经销商、商店和专业客户的Resellers计划；其可售目录既可包含PcComponentes自营商品，也可以包含满足条件的Marketplace第三方商品。

因此，对001 AI吹风机而言，PcComponentes应被建模为“消费电子零售 + Marketplace + B2B转售/批发触点”的复合渠道，而不能只按普通线上零售商处理。

## 2. 公开事实：Dreame 110k高速吹风机存在PcComponentes 1P样本

PcComponentes当前Dreame品牌/吹风机页面显示：

### Dreame Hair Glory Mix
- 当前页面：**Vendido y enviado por PcComponentes**
- 价格快照：约€119（2026-09-10抓取）
- PcComponentes品牌页将其列入“Secadores y moldeadores Dreame”

来源：
- https://www.pccomponentes.com/marcas/dreame
- https://www.pccomponentes.com/marcas/dreame/secadores-de-pelo

### Dreame Pocket Neo Gold
PcComponentes存在另一商品页：
- 型号：Dreame Pocket Neo 1300W Gold
- 数字高速电机：**110,000 rpm**
- 2档速度 / 5档温度
- 页面明确：**Vendido y enviado por PcComponentes**
- 价格快照：€129
- 抓取时状态：无明确入库日期 / 可设置到货提醒

来源：
- https://www.pccomponentes.com/secador-de-pelo-dreame-pocket-neo-110000-rpm-gold-portatil-ionico-1300w

数据治理：该页面可作为“PcComponentes自身作为seller的110k高速吹风机样本”，但页面存在过往/未来库存状态变化，因此不能把€129或当前可售状态写成长期固定事实。

## 3. 同一型号/品牌同时存在Marketplace第三方seller

PcComponentes当前还存在Dreame Pocket Neo / Pocket的第三方seller页面：

### Dreame Pocket Neo Grey
- 110,000 rpm
- 当前seller：**MBOtechES**
- 页面明确：**Vendido y enviado por MBOtechES**
- 页面价格快照：€275

来源：
- https://www.pccomponentes.com/secador-de-pelo-dreame-pocket-neo-1300-w-gris-plegable-110000-rpm-2-velocidades-5-modos-de-calor

### Dreame Pocket Grey
- 110,000 rpm
- NTC智能温度保护/热保护描述
- 当前seller：**VISOTECNIC**

来源：
- https://www.pccomponentes.com/dreame-pocket-secador-de-pelo-compacto-y-plegable-1300w-gris

这说明“品牌进入PcComponentes”必须继续拆分为：

- `PcComponentes 1P`
- `Marketplace third-party seller`

不能仅凭SKU出现在pccomponentes.com判断为PcComponentes中央采购。

## 4. Marketplace公开进入规则：2026新数据

PcComponentes Marketplace官方卖家资料当前公开披露：

- Seller账户月费：**€39.99 + IVA/月**；
- 首月免费；
- 从第二个月起，仅当该月发生至少一笔订单时收取该月费；
- 月费与每笔订单的Marketplace佣金相互独立；
- Marketplace官方招商页面披露2023年Marketplace GMV为**€125m**；
- 官方招商页面披露Marketplace GMV较2022年增长**25% YoY**；
- 官方宣传“Venta Internacional sin coste extra”。

来源：
- PcComponentes Marketplace seller fee（2026-07-17更新）：https://marketplacehelp.pccomponentes.com/hc/es-es/articles/37682332963613-Cuota-mensual-de-la-cuenta-de-vendedor
- Marketplace seller入口：https://marketplace.pccomponentes.com/es/index.html

数据治理：€125m与25% YoY均为PcComponentes对**2023年**的公开历史数据，不可表述为2026当前GMV；具体类目佣金、吹风机类目审核、EPR/RAEE要求、物流SLA和品牌授权要求需另行核验。

## 5. Resellers：PcComponentes具有可验证的B2B转售层

PcComponentes于2026年7月更新的官方帮助页明确说明：

- **Resellers**是面向希望将PcComponentes产品和服务转售给自己客户的企业计划；
- 目标对象包括：`distribuidores, tiendas, profesionales y empresas`；
- 该目录可以出现PcComponentes直接销售的产品；
- 也可以出现Marketplace第三方卖家的产品，只要满足相关展示条件；
- Marketplace seller无需额外设置即可有机会进入Resellers可售目录；
- seller仍通过自己的Marketplace/Mirakl账户管理价格、库存、配送等日常运营。

PcComponentes独立Resellers页面还公开称其目录包括“超过90,000种其他品牌产品”，范围包括PcComponentes自营和第三方卖家商品。

来源：
- Resellers seller help（2026-07-08更新）：https://marketplacehelp.pccomponentes.com/hc/es-es/articles/24512476843165-Resellers
- Resellers landing：https://www.pccomponentes.com/landings/resellers

## 6. 对001的研究模型（INFERENCE，不是公开组织图）

基于上述公开事实，可建立以下研究模型：

### 路径A — 1P
`品牌/供应商 → PcComponentes自营采购/零售 → 消费者`

### 路径B — Marketplace
`品牌/经销商/seller → PcComponentes Marketplace → 消费者`

### 路径C — Marketplace / 1P商品进入B2B Resellers触点
`PcComponentes 1P 或 Marketplace合格offer → Resellers目录 → 经销商/商店/专业客户 → 其终端客户`

其中路径C的存在依据PcComponentes官方Resellers规则；但某个具体001 SKU是否会被纳入Resellers展示、是否有独立B2B价格以及谁承担最终售后，需逐SKU/合同验证。

## 7. 与001 AI吹风机直接相关的意义（分析推断）

PcComponentes目前已经公开证明：

- 110k高速吹风机能够以**PcComponentes 1P**形式出现；
- 同一品牌/相近SKU也能通过**Marketplace第三方seller**出现；
- PcComponentes Marketplace offer还可能被扩展到**Resellers B2B转售目录**。

因此，对001而言，PcComponentes不是单一“上架即成功”的渠道，而是至少存在三种商业关系，需要分别研究门槛、毛利、库存、售后和品牌控制权。

以上为分析推断，不是PcComponentes公开采购组织图，也不是Leon View。

## 8. TO VERIFY

以下信息尚无足够公开证据，不能自行补写：

- Personal Care / Hair Dryer具体Category Buyer姓名与组织架构
- 001类产品1P导入的MOQ、账期、返利、marketing contribution、listing fee
- Marketplace吹风机类目的具体commission rate
- Marketplace是否要求西班牙/EU本地法人或可接受境外主体的最新细则
- WEEE/RAEE、包装EPR、电池EPR（若适用）在seller onboarding中的具体审核步骤
- Marketplace → PcComponentes 1P转化是否存在正式内部机制
- 具体Dreame产品的PcComponentes采购主体、进口主体与供货合同
- Resellers目录中的具体B2B折扣、价格规则与001类目可见性

## 9. 数据治理结论

以后遇到PcComponentes商品页时必须记录seller字段：

- `Vendido y enviado por PcComponentes` → 可作为**1P自营销售证据**；
- 第三方名称 → **Marketplace**；
- 不能把品牌页/商品页存在直接写成“PcComponentes中央采购”；
- Resellers是独立B2B触点，但不能反推所有Marketplace SKU都有B2B订单。

## 10. Leon View

**本文件不新增、不修改、不推断任何Leon View。**

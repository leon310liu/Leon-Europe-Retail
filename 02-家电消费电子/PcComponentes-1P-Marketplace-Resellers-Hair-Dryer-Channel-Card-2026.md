# PcComponentes — 1P + Marketplace + Resellers 多层消费电子渠道卡（2026）

> 类型：公开事实 Channel Card / 西班牙家电消费电子 / 001 AI吹风机相关
> 更新时间：2026-09-02
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增Leon View。

## 1. 结论摘要

PcComponentes当前不是单一B2C电商，而是至少同时存在三层可公开验证的商业路径：

1. **PcComponentes 1P自营零售**：商品由 PcComponentes 自身销售和发货；
2. **PcComponentes Marketplace**：第三方卖家自主决定价格、商品、销售条件和售后，并通过PcComponentes平台销售；
3. **PcComponentes Resellers**：面向经销商、门店、专业人士和企业的批发/转售项目，可把PcComponentes自营商品及符合条件的Marketplace卖家商品进一步开放给B2B转售客户。

对001 AI吹风机尤其重要的是：当前PcComponentes已经以**1P自营**方式直接销售多款110,000 rpm高速/无刷吹风机，因此这不是仅存在于平台第三方卖家的边缘品类。

## 2. 公开事实

### A. 110k高速吹风机已经进入PcComponentes 1P自营

PcComponentes当前商品页公开显示：

**Cecotec DryGlam Nano Plasma**
- Motor brushless
- 110,000 rpm
- 1600W
- plasma / ions
- 页面价格快照：€39.90
- 页面明确标注：**Vendido y enviado por PcComponentes**

来源：
- https://www.pccomponentes.com/secador-dryglam-nano-plasma-motor-brushless-110-000-rpm-1600w-plasma-iones

此外，PcComponentes当前还公开列有：

**Jata JBSC5577**
- BLDC
- 110,000 rpm
- 2000W
- 公开描述风速最高约170 km/h
- 面向家庭及专业使用场景

来源：
- https://www.pccomponentes.com/jata-jbsc5577-secador-ionico-profesional-motor-bldc-2000w

**PostQuam Veloce Slim BLDC Ionic Pro**
- BLDC专业电机
- 110,000 rpm
- 1600W
- 328g（不含线）

来源：
- https://www.pccomponentes.com/secador-postquam-veloce-slim-bldc-ionic-pro-1600w-ultraligero-110000-rpm

**DAM Electronics 1500W Ionic**
- brushless
- 110,000 rpm
- 1500W
- 25 m/s air flow
- 59 dB

来源：
- https://www.pccomponentes.com/secador-de-pelo-ionizador-dam-electronics-1500w-3-velocidades-pantalla-led-90c-cabezal-magnetico

数据治理：必须逐SKU检查 `Vendido y enviado por` 字段。商品存在于PcComponentes网站，不等于由PcComponentes 1P采购；第三方Marketplace商品必须单独标记。

### B. PcComponentes Marketplace 进入规则与成本公开

PcComponentes官方Marketplace页面公开：
- Marketplace面向技术产品企业卖家开放；
- 基本月费为 **€39.99/月 + IVA**；
- 第一月免月费；
- 从第二个月起，若当月没有订单则不收月费；
- 订单佣金 **from 5%**，具体取决于产品品类；
- 可提供国际销售、广告、Fulfillment等服务；
- 2023年官方披露Marketplace GMV为 **€125 million**；
- 官方披露Marketplace 2023同比增长约 **25% vs 2022**。

来源：
- https://marketplace.pccomponentes.com/es/index.html
- https://marketplace.pccomponentes.com/es/faq.html
- https://marketplacehelp.pccomponentes.com/hc/en-us/articles/37682332963613-Monthly-seller-account-fee

注意：GMV和增长率属于PcComponentes当前官网引用的2023历史数据，不应写成2026实时GMV。

### C. Marketplace卖家是独立销售主体

PcComponentes Marketplace通用条款明确：
- 平台在客户与第三方卖家之间充当中介；
- 第三方卖家自主决定价格、出售商品、销售条件、取消及售后操作；
- Marketplace产品的买卖合同发生在客户与卖家之间；
- 第三方卖家对其销售及售后负责。

来源：
- https://www.pccomponentes.com/landings/condiciones-generales-de-marketplace

因此，知识库不得把第三方Marketplace SKU误记为PcComponentes 1P采购或PcComponentes库存。

### D. PcComponentes提供Fulfillment

官方2026卖家帮助文件说明：
- Marketplace卖家可使用PcComponentes Fulfillment；
- 使用Fulfillment后，相关offer可显示为由PcComponentes发货；
- 库存可由Fulfillment库存管理；
- 订单准备自动化，并可集中处理逆向物流/退货。

来源：
- https://marketplacehelp.pccomponentes.com/hc/es-es/articles/21936098993565-Fulfillment

数据治理：`enviado por PcComponentes` 不必然等于 `vendido por PcComponentes`。判断1P必须同时核对销售方。

### E. 2026年公开的 Resellers B2B 转售层

PcComponentes卖家帮助中心在2026-07-08更新的官方说明中，把 **Resellers** 定义为其面向企业客户的批发/转售项目。目标客户包括：
- distribuidores
- tiendas
- profesionales
- empresas

官方说明还明确：Resellers可展示：
- PcComponentes直接销售的商品；
- 符合条件的Marketplace第三方卖家商品。

Marketplace卖家无需额外配置即可有机会进入Resellers可用目录；其价格、库存、物流和销售条件仍通过Mirakl卖家账户管理。

来源：
- https://marketplacehelp.pccomponentes.com/hc/es-es/articles/24512476843165-Resellers

这说明PcComponentes当前公开商业结构已经不仅是 `supplier → PcComponentes → consumer`，还存在面向下游商业客户的二次转售层。

### F. 国际销售渠道

PcComponentes 2026官方卖家帮助文档说明，Marketplace卖家可管理不同国家销售channel，例如 Spain、France、Italy及其他已开放市场；仅激活channel不足以销售，卖家还必须配置物流并满足目标国家法规。

来源：
- https://marketplacehelp.pccomponentes.com/hc/es-es/articles/20837987334685-Canales-de-venta

## 3. 渠道结构推断（非公开事实，不是Leon View）

基于上述公开事实，可以把PcComponentes建模成一个多层节点：

### 路径1：1P零售
`品牌/供应商 → PcComponentes采购/自营 → PcComponentes.com → 消费者`

### 路径2：Marketplace
`品牌/卖家 → PcComponentes Marketplace → 消费者`

### 路径3：Marketplace + Fulfillment
`品牌/卖家 → PcComponentes Marketplace → PcComponentes Fulfillment → 消费者`

### 路径4：B2B Resellers
`PcComponentes自营商品 或 Marketplace符合条件商品 → Resellers → 经销商/门店/专业人士/企业 → 其客户`

以上为公开事实基础上的渠道结构整理，不代表已确认PcComponentes内部Buyer权限、具体采购流程或001可直接获得1P供应商资格。

## 4. 对001 AI吹风机的公开事实意义

可确认：
- 110k brushless高速吹风机已进入PcComponentes 1P自营；
- 当前至少可验证Cecotec、Jata、PostQuam、DAM等不同品牌/定位的110k级产品；
- 低价大众样本已出现约€39.90公开促销价；
- Marketplace为另一条无需先证明1P采购关系的公开销售基础设施；
- Resellers使Marketplace商品在满足条件时可能进一步触达B2B转售客户。

不能确认：
- 001是否能直接进入PcComponentes 1P；
- 001所属具体Marketplace佣金率；
- 1P Buyer姓名及采购组织；
- 1P采购MOQ、付款条件、退货条款、listing fee、年度返点；
- 进入Resellers目录的具体筛选阈值；
- 使用Fulfillment的具体电器类费用与库存要求。

以上继续标记 `TO VERIFY`。

## 5. 知识库治理提醒

1. **1P与Marketplace必须严格拆分。**
2. **“PcComponentes发货”不能单独作为1P证据**，因为Marketplace Fulfillment也可能显示由PcComponentes发货。
3. 2023 Marketplace GMV €125m和+25% YoY属于历史披露值，不可写成2026实时规模。
4. 页面零售价为2026-09-02抓取快照，不是长期RRP。
5. `Resellers` 是2026官方当前名称；官方说明指出该服务此前称为 `Associate`，旧资料需做名称治理。

## 6. Leon View

本文件没有新增、修改或推导任何 Leon View。

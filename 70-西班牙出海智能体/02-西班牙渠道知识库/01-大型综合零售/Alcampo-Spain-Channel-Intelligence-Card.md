# Alcampo Spain Channel Intelligence Card

> 状态：公开事实基线 / 001 AI吹风机相关渠道
> 更新日期：2026-08-26
> Leon View：空（本文件不自行生成Leon View）

## 1. 渠道定位

Alcampo 是 Auchan Retail 在西班牙的综合零售体系，采用大型Hypermarket、Supermarket、Franchise和Online并行的多业态/全渠道模式。

对消费级电子与001 AI吹风机，应将其归类为：

- 大型综合零售 / Hypermarket
- 自营电商
- PAE小家电与个人护理零售
- 自有品牌竞争渠道（Qilive）
- 全国供应商体系

现有公开销售条款显示，Alcampo在线购买由 ALCAMPO, S.A. 作为销售方，而不是像Carrefour Marketplace那样明确拆成第三方卖家交易；截至本次抓取，未发现Alcampo Spain公开的第三方Marketplace规则。因此在没有新证据前，不应把Alcampo.es商品自动建模为Marketplace第三方卖家路径。

## 2. 西班牙网络规模（公开事实）

Alcampo Corporate当前“Conócenos”页面披露，Alcampo在西班牙属于Auchan Retail，称拥有“500+ hipermercados y supermercados（其中100+为franchise）”。同一页面的2025关键数据又分别列出：

- 80个Hypermarkets
- 229个Supermarkets
- €4.540bn销售额
- 22,887名员工
- 向1,314家西班牙供应商采购约€3.5bn

这两组“500+”与“80+229=309”存在明显统计口径差异，可能涉及直营/加盟、不同门店格式或统计范围，但官方页面没有充分解释。

### 数据治理规则

不得将“500+门店”和“80 Hypermarkets + 229 Supermarkets”合并成单一精确总数。知识库应分别保存：

- Corporate stated total network
- Hypermarkets
- Supermarkets
- Franchised stores
- 抓取日期与来源页面

来源：
- https://alcampocorporativo.es/conocenos-2/
- https://alcampocorporativo.es/alcampo-acelera-su-crecimiento-en-franquicia-en-2025-con-11-nuevas-aperturas-en-cinco-comunidades-autonomas/

## 3. 001 AI吹风机：品类已验证

Alcampo当前在线目录存在独立路径：

Electrodomésticos → Belleza → Secadores de pelo

当前公开可见品牌/产品包括：

- Qilive
- Cecotec
- Remington
- Taurus
- Bellissima 等

说明Alcampo已经实际经营个人护理小家电和吹风机，而不是仅具备理论品类相关性。

当前页面可见示例：

- QILIVE Q.7760：ionic，多档温度/风速，约€19.90
- CECOTEC DryGlam Nano Plasma：约€39.90
- REMINGTON Thermacare Pro D5715：约€36.90
- TAURUS HD1600ID：ionic care，多档风速/温度

商品与价格为动态零售快照，不应被写成固定长期价格。

来源：
- https://www.compraonline.alcampo.es/categories/electrodom%C3%A9sticos/belleza/secadores-de-pelo/OC23001

## 4. Qilive：自有品牌竞争

Alcampo当前在家电、科技和Beauty/Health中持续运营Qilive品牌。官方Qilive页面将其描述为面向家电与技术产品的自有品牌体系，并强调耐用、可及价格、维修/维护和3年保障等价值。

吹风机类目当前已经存在多款Qilive产品，因此001进入Alcampo时需要同时面对：

- 外部品牌竞品
- Alcampo/Auchan体系自有品牌价格锚点
- 渠道自身Private Label / Own Brand战略

官方部分Qilive商品页面还公开显示供应商/进口商字段，例如SAS OIA / Auchan体系主体，说明其自有品牌供应链可能由Auchan跨国采购/产品组织参与；但不能据此推断所有Qilive吹风机均由同一主体采购或进口。

来源：
- https://www.compraonline.alcampo.es/content/qilive
- https://www.compraonline.alcampo.es/categories/Electrodom%C3%A9sticos/Electrodom%C3%A9sticos-Qilive/Belleza-y-salud-Qilive/OC302207

## 5. 供应商体系（公开事实）

Alcampo运营独立供应商门户。公开规则显示：

- 供应商以法人主体注册
- 使用NIF与Alcampo内部CIP（Código Interno de Proveedor）识别
- 已成为Alcampo供应商且存在系统记录/发票的主体可申请供应商门户权限

这证明Alcampo存在正式的Vendor/Supplier Master体系，但公开门户不是“陌生品牌自助申请成为新供应商”的完整准入入口。

### 待验证

001后续商务研究需要继续确认：

- PAE / Personal Care具体买手或采购部门
- 新供应商首次准入入口
- 是否由Alcampo Spain直接采购，还是Auchan/OIA体系参与部分品类采购
- Vendor CIF / Importer of Record
- 首单量、MOQ、返点、促销费、账期
- 中央仓/门店直送机制
- 退货、DOA和SAT责任
- RII-AEE / RAEE / EPR资料要求

来源：
- https://proveedores.alcampo.es/condiciones
- https://proveedores.alcampo.es/home

## 6. 电商交易结构（公开事实）

Alcampo当前在线销售条款明确：用户通过网站购买的商品交易与 ALCAMPO, S.A. 发生。

当前没有找到与Carrefour、MediaMarkt、Fnac类似的官方第三方Marketplace卖家规则或“Vendido por third-party seller”机制证据。

因此当前知识库应暂定：

**Alcampo.es visible SKU → Alcampo retail offer**

而不能擅自拆成Marketplace seller路径。

如果未来Alcampo上线或公开第三方Marketplace制度，本卡需要重新核验并版本更新。

来源：
- https://www.compraonline.alcampo.es/content/condiciones-generales-venta

## 7. 对001 AI吹风机的AI Analysis（非Leon View）

### 相关性

中高相关。

原因：

1. 已验证实际销售吹风机/Personal Care PAE。
2. Hypermarket + online具有消费者触达能力。
3. 全国供应商体系成熟。
4. Qilive自有品牌使其既是渠道，也是强价格竞争节点。

### 进入结构候选

目前公开证据更支持：

**品牌 / 西班牙或欧盟供应主体 → Alcampo供应商体系 → Alcampo中央/品类采购 → Online + Hypermarket/selected stores → 消费者**

但总部采购权、Auchan集团采购参与度、店级选品权仍未公开验证。

### 001需要证明的核心价值

如果产品定位为高速/AI/高端吹风机，单纯“高速BLDC + ionic + temperature control”不足以自动形成Alcampo准入理由。后续更应验证：

- 与€20–€40大众价格带的差异化
- 相比Qilive自有品牌的价值理由
- 高速/智能功能能否提升客单而不破坏Alcampo价格定位
- 售后、退换和备件成本
- 是否存在Web-first或selected hypermarket试销可能

以上均为AI结构分析，不是Leon View。

## 8. 待验证清单

- [ ] 2026最新准确门店总数及直营/加盟拆分
- [ ] PAE / Personal Care采购团队
- [ ] 新供应商准入联系人/流程
- [ ] Auchan Group / OIA对西班牙个护电器采购的实际参与程度
- [ ] Alcampo是否存在尚未公开的Marketplace或Drop-ship模式
- [ ] Hair Dryer线上SKU与实体Hypermarket实际陈列比例
- [ ] 是否支持新品牌Web-first试销
- [ ] 中央仓、门店配送与库存所有权
- [ ] CIF/开票主体/付款账期
- [ ] RII-AEE / RAEE / EPR / SAT要求

## 9. 核心来源

1. Alcampo Corporate — Conócenos / 2025 key figures
   https://alcampocorporativo.es/conocenos-2/
2. Alcampo Corporate — 2025 Franchise expansion, published 2026-01-19
   https://alcampocorporativo.es/alcampo-acelera-su-crecimiento-en-franquicia-en-2025-con-11-nuevas-aperturas-en-cinco-comunidades-autonomas/
3. Alcampo Online — Secadores de pelo
   https://www.compraonline.alcampo.es/categories/electrodom%C3%A9sticos/belleza/secadores-de-pelo/OC23001
4. Alcampo Online — Qilive
   https://www.compraonline.alcampo.es/content/qilive
5. Alcampo — Supplier portal conditions
   https://proveedores.alcampo.es/condiciones
6. Alcampo Online — General sales conditions
   https://www.compraonline.alcampo.es/content/condiciones-generales-venta

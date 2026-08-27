# PROSELCO / Sinersis Regional Platform — Channel Intelligence Card

> 核验日期：2026-08-27  
> 知识类型：公开事实 + AI结构分析  
> Leon View：**空，不自动生成**

## 1. 渠道定位

PROSELCO 是 Sinersis 区域成员/平台之一，核心角色不是普通终端零售商，而是面向关联家电门店提供采购、仓储物流、销售支持、营销、线上工具及门店经营支持的区域性家电分销/服务平台。

Sinersis 官方将 PROSELCO 列为成员；PROSELCO 自身当前主要运营/支持 Tien21 与 Milar 两个零售 enseña。

## 2. 当前公开规模与能力

### PROSELCO 自有/直接口径

PROSELCO 官网当前披露：

- 246 个 puntos de venta；
- 12,000㎡ 专业家电仓库；
- 采购部门覆盖约 146 个品牌、15,000 个高频/轮转参考号；
- 区域覆盖：Madrid、Castilla-La Mancha、Castilla y León、País Vasco、Navarra、Aragón、La Rioja、Cantabria、Asturias；
- 提供采购条件、销售支持、Marketing 360º、线上工具、门店经营管理、物流及逆向物流；
- 发展自有品牌产品，以提高关联门店利润和竞争力；
- 官网销售收益会回流/归属关联门店，强调线上与实体门店协同。

### 不应混写的 enseña 全国口径

PROSELCO 的“enseñas”页面同时介绍：

- Tien21：900+门店、13个 territorial societies（西班牙与葡萄牙）；
- Milar：400+门店、11个平台。

这些数字是 enseña/网络整体宣传口径，**不能直接写成 PROSELCO 自己拥有或服务的门店数量**。PROSELCO 自己当前明确披露的是 246 个 puntos de venta。

## 3. 采购与区域平台结构

PROSELCO 官网明确设有独立采购部门，管理约146个品牌和15,000个轮转参考号，其目的包括为关联门店获取更优条件、服务和促销行动。

这提供了公开证据，说明 PROSELCO 在 Sinersis 体系内不只是物流节点，而具备实际采购组织与品类管理能力。

但现有公开资料仍不足以证明：

- PROSELCO 对全部品牌/SKU拥有最终采购决定权；
- Sinersis 总部框架协议与 PROSELCO 区域采购权如何具体分配；
- 哪些品类由总部统一谈判、哪些由区域平台自主选择；
- 合同、开票、库存所有权和供应商付款主体是否统一由 PROSELCO 承担。

因此仍需把以下层级分开核验：

**Sinersis中央框架/供应商协议 → PROSELCO区域采购与库存/物流 → Tien21/Milar关联门店 → 消费者**

## 4. 物流与履约

PROSELCO 官网披露 12,000㎡仓库，并强调专业家电物流、逆向物流和关联门店快速配送。

### 数据口径冲突

同一官网当前存在物流时效口径差异：

- 首页摘要写“Entrega en 24 horas”；
- 物流详细说明写，其影响区域向关联门店提供 **48小时内**服务，并可在晚间下单。

因此知识库不得把“24h”直接写成整个覆盖区域的统一 SLA。后续应核验：

- 24h 是否仅限特定区域/库存/订单；
- 48h 是否为全国/广域标准；
- 不同门店、区域与库存状态的真实履约规则。

## 5. 001 AI吹风机相关证据

Milar 当前公开的 Ufesa X-TREME SHINE 吹风机商品页，在结构化商品数据中出现：

`proselco-m`

同时该 SKU 位于：

`Cuidado personal / Cabello / Secadores de pelo`

这构成一个有价值的公开信号：**至少部分 Milar Hair Care SKU 可以观察到与 PROSELCO 的区域平台关联标识。**

但必须严格区分：

- SKU 页面出现 `proselco-m`；
- PROSELCO 实际库存/履约该 SKU；
- PROSELCO 拥有该 SKU 的选品权；
- Sinersis 总部统一采购该 SKU。

目前公开证据只支持第一层，不得自动推导后三层。

## 6. 对001 AI吹风机的AI结构分析

### 相关性：高

原因：

- 明确属于 Sinersis 区域平台；
- 覆盖 Madrid 及西班牙北部/中部多个重要区域；
- 具备独立采购部门；
- 具备12,000㎡仓储与快速配送；
- 运营/支持 Tien21、Milar；
- Milar 已公开经营吹风机及 Personal Care；
- 已出现具体 Hair Dryer SKU 与 `proselco-m` 的平台关联信号。

### 进入研究重点

001 后续应重点核验：

1. Personal Care / Hair Dryer 的实际买手或品类负责人；
2. Sinersis总部协议与 PROSELCO区域选品权边界；
3. 是否允许新品先在 PROSELCO 区域网络试销，再扩展到其他 Sinersis 平台；
4. 新品牌供应商准入；
5. 首单/MOQ；
6. 账期、返点、促销费、物流费；
7. 库存所有权与开票主体；
8. SAT / 退货 / DOA / 备件责任；
9. 自有品牌与第三方品牌之间是否存在品类冲突；
10. 线上销售与关联实体店收益分配机制。

以上属于AI分析，不是 Leon View。

## 7. 数据治理规则

PROSELCO 后续数据必须至少分字段保存：

- PROSELCO Own Points of Sale
- Tien21 Total Network Points
- Milar Total Network Points
- Brands Managed / Referencias de Rotación
- Warehouse Area
- Geographic Coverage
- Logistics SLA
- Procurement Role
- Stock Owner
- Invoice Entity
- SKU / Regional Platform Association

不得把全国 enseña 网络规模直接当成 PROSELCO 自有/直接服务规模。

## 8. 公开来源

1. PROSELCO 官方首页 / 公司介绍  
   https://www.proselco.com/

2. PROSELCO 官方 — Nuestras enseñas  
   https://www.proselco.com/ense%C3%B1as

3. Sinersis 官方 — PROSELCO 成员页  
   https://www.sinersis.es/asociado/proselco/

4. Milar — Ufesa X-TREME SHINE 商品页（含 `proselco-m` 结构化字段）  
   https://www.milar.es/secador-ufesa-x-treme-shine.html

5. Electro-Imagen，2026-07-09，Madrid 行业圆桌（PROSELCO / Sinersis 参与）  
   https://www.electro-imagen.com/articulo/tertulia-comunidad-de-madrid

## 9. 待验证

- PROSELCO 当前法律主体/CIF及供应商合同主体；
- Personal Care买手；
- 采购权与 Sinersis 中央框架协议的边界；
- 自有品牌具体范围，是否覆盖Personal Care；
- 001同类高速吹风机是否已在PROSELCO区域网络出现；
- 区域试销→Sinersis全国扩张是否为现实可操作路径；
- 24h / 48h 物流时效的适用范围；
- RII-AEE / EPR / RAEE / SAT责任主体。

---

**Leon View：未生成。**

# Spain Electro Distribution Structure Change 2025–2026

> 类型：公开事实基线 / 渠道结构变化
> 抓取日期：2026-08-24
> 适用范围：消费电子、小家电、001 AI吹风机
> Leon View：无（本文件不生成 Leon View）

## 1. 公开事实

### 1.1 西班牙专业家电实体零售网络继续收缩，但采购集团体系仍占主导

Alimarket《Informe 2025 del Sector de Distribución Minorista y Mayorista de electrodomésticos por Sala de Venta en España》披露：
- 2025年5月：西班牙家电专业零售约 5,640 家门店；
- 总销售面积约 1.79 million m²；
- Online 渠道约占 32%。

Alimarket《Informe 2026 del Sector de Distribución Minorista y Mayorista de electrodomésticos por Sala de Venta en España》披露：
- 2026年5月：约 5,445 家门店；
- 总销售面积约 1.75 million m²；
- Online 渠道约占 33%；
- 采购集团/Buying Group 关联门店数量仍占主导，但也是关闭门店较多的群体。

据此，2025年5月至2026年5月：
- 门店数量减少约 195 家（约 -3.5%）；
- 总销售面积减少约 40,000 m²（约 -2.2%）；
- Online 渠道占比提升约 1 个百分点。

### 1.2 西班牙家电分销并不等于“8个Buying Group”

FECE当前公开框架强调全国性专业家电零售网络主要由若干核心分销集团组织，例如 ACTIVA、SEGESA/REDDER、CEMEVISA、SINERSIS、expert、HGM 等，并代表近5,000家专业门店。

但 Alimarket 2025 年按销售额口径的行业报告同时统计了：
- 231 家零售运营企业；
- 83 家批发/采购平台企业（2024经营数据口径）。

因此，在消费级电子产品进入西班牙时，不能把渠道理解成“只需要找8个全国集团”。全国集团之外仍存在大量区域平台、独立批发商、进口商和垂直分销商。

### 1.3 进口商/分销商是国际品牌进入西班牙的独立渠道角色

Alimarket《Informe 2026 sobre el sector de Distribuidores e Importadores Electro》将 distributors/importers 定义为连接制造商与市场的关键中间节点，并特别指出其对缺乏西班牙本地渠道知识的国际企业进入和定位某一具体渠道具有战略作用。

该报告单独统计：
- 白电与PAE分销商；
- 消费电子分销商；
- 科技批发商。

这说明“品牌 → 西班牙进口/分销主体 → 零售/Buying Group/专业渠道”应作为独立进入模型，而不是被归并为普通零售渠道。

## 2. AI Analysis（非 Leon View）

对001 AI吹风机及其他消费级电子产品：

1. **实体专业家电网络仍重要，但不能只靠铺店数量判断价值。** 门店持续收缩、线上占比持续上升，意味着进入方案应同时评估线下覆盖能力与线上履约/引流能力。
2. **Buying Group 应拆成“中央集团 → 区域平台 → 终端门店”三级。** 只识别集团总部会遗漏真正的采购、库存、履约和区域试销节点。
3. **进口商/分销商必须单独建模。** 对中国新品牌而言，这一层可能承担进口、库存、账期、售后、渠道关系和本地商业执行，是区别于“直接找零售商”的另一条进入路径。
4. **渠道地图需要同时维护：全国集团、区域平台、独立批发/进口商、垂直分销商、Marketplace、自营零售。** 这些角色不能混写成“渠道商”。

## 3. 数据边界与待验证项

- 5,640 与 5,445 为 Alimarket 在不同年度同类报告中的行业统计快照，不应解释为官方企业普查。
- 83 家批发/采购平台企业是 2024 经营数据口径，适合作为行业结构基线，不应直接当作2026实时企业数量。
- “Buying Group关联门店仍占主导”来自行业报告概述，具体集团份额需继续从完整报告或集团官方数据逐一核验。

## 4. 对知识库结构的建议

后续消费级电子类 Channel Card 建议统一增加以下字段：
- Channel Role：Retailer / Buying Group / Regional Platform / Importer / Distributor / Marketplace / Professional Vertical
- Procurement Level：Central / Regional / Store / Mixed / Unknown
- Stock Owner
- Invoice Entity
- Logistics Role
- After-sales Responsibility
- Online Route
- Regional Trial Possibility

## 5. 来源

1. Alimarket, *Informe 2026 del Sector de Distribución Minorista y Mayorista de electrodomésticos por Sala de Venta en España*, 13 May 2026.
   https://www.alimarket.es/electro/informe/424875/informe-2026-del-sector-de-distribucion-minorista-y-mayorista-de-electrodomesticos-por-sala-de-venta-en-espana

2. Alimarket, *Informe 2025 del Sector de Distribución Minorista y Mayorista de electrodomésticos por Sala de Venta en España*, 14 May 2025.
   https://www.alimarket.es/electro/informe_amp/407072/informe-2025-del-sector-de-distribucion-minorista-y-mayorista-de-electrodomesticos-por-sala-de-venta-en-espana

3. Alimarket, *Informe 2025 de Distribución de Electrodomésticos por ventas en España*, 9 Oct 2025.
   https://www.alimarket.es/electro/informe_amp/413502/informe-2025-de-distribucion-de-electrodomesticos-por-ventas-en-espana

4. Alimarket, *Informe 2026 sobre el sector de Distribuidores e Importadores Electro*, 9 Mar 2026.
   https://www.alimarket.es/electro/informe/421862/informe-2026-sobre-el-sector-de-distribuidores-e-importadores-electro

5. FECE, Asociados / sector representation.
   https://fece.org/asociados/

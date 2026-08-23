# Sinersis / Candelsa 结构变化核验（2025–2026）

> 类型：公开事实核验 + AI Analysis
> 抓取日期：2026-08-23
> Leon View：无新增

## 一、公开事实

### 1. Sinersis 当前官方口径为 16 个区域平台
Sinersis 当前“Associados”页面明确写明：
- 16 个区域关联平台；
- 19 个仓库；
- 为 1,500+ 销售点提供采购与物流支持。

当前页面列出的 16 个名称包括 Caslesa、Cedecasa、Celsa、CODECO、COMELSA、DIVELSA、GRUDESA、Idea Hogar、L. Roman、Medired、Proselco、Sacse、Sorefoz、TIANELSUR、UGESA、Vere、Vicosa（页面存在 Vicosa 重复链接显示，但主体列表已不见 Candelsa）。

来源：
- Sinersis 官方 Associados：https://www.sinersis.es/asociados/
- Sinersis 官方 Sobre nosotros：https://www.sinersis.es/sobre-nosotros/

### 2. Sinersis 首页仍保留“17个平台”的旧口径
Sinersis 首页当前仍写：
- 17 个区域平台；
- 17 个 asociados。

这与“Associados”和“Sobre nosotros”页面的 16 个口径不一致，应视为官网内部数据同步滞后，不能直接把 17 当作当前有效值。

来源：
- Sinersis 官方首页：https://www.sinersis.es/

### 3. 2025 年 Candelsa 与 Sinersis 发生关系破裂
2025 年 5 月，多家西班牙专业家电行业媒体报道 Sinersis 与 Candelsa 的关系发生重大变化。

Market Vision 报道：2025-05-15，Sinersis 向供应商发出通知，终止与 Candelsa 的商业关系，并称自 2025-05-19 起 Sinersis 官网已从 17 个 asociado 减为 16 个并删除 Candelsa。

随后 Candelsa 在 2025-05-29/06-02 公开发布自己的版本，表示其自愿退出 Sinersis 董事会席位，但仍主张自己是 Sinersis 股东，并希望维持 Euronics / Tien21 品牌授权。

2025-09，Electromarket 在渠道重组专题中继续把“Sinersis 与 Candelsa 的 rupture”列为西班牙家电专业渠道结构变化的重要事件。

来源：
- Market Vision, 2025-05-22：
  https://marketvision.es/cms/index.php/en-breve/negocios-btc/actualidad-abierta-negocios/negocios-panorama/cuando-y-por-que-decidio-sinersis-la-expulsion-de-candelsa
- Sonitron, 2025-06-02：
  https://sonitron.net/candelsa-situacion-comunicado/
- Electro Imagen, 2025-05-29：
  https://www.electro-imagen.com/articulo/candelsa-reafirma-su-compromiso-con-su-red-y-con-sus-clientes
- Electromarket, 2025-09-11：
  https://www.electromarket.com/noticia/32025/la-distribucion-se-reordena.html

### 4. FAEL 2025 行业研究将 Candelsa 标记为“正在退出 Sinersis”
FAEL 2025 年关于安达卢西亚家电分销的行业研究，将 Candelsa 描述为“en proceso de salida de Sinersis”，同时把 Sinersis、Segesa-Redder、Eldisser/HGM 等列为重要渠道集团。

来源：
- FAEL《Estudio de Diagnóstico del Sector de la Distribución》，2025：
  https://www.fael.es/wp-content/uploads/2025/12/00_Estudio-Distribucion-AAEL.pdf

## 二、AI Analysis

### 对“16 vs 17”口径冲突的更合理解释
此前可提出多种解释，例如是否因为葡萄牙 Sorefoz 被单独计数。但结合 2025 年 Candelsa 事件与 Sinersis 当前官方 16 个名单，一个更有证据支持的解释是：

> 17 是 Candelsa 退出前的历史口径；16 是 Candelsa 退出/被移除后更接近当前运营结构的口径。

因此，知识库中此前“16/17 可能源于是否计入葡萄牙 Sorefoz”的推断，应降级为低置信度备选解释，不能继续作为主要 reconciliation 假设。

### 对渠道建模的意义
Candelsa 事件说明：
1. Sinersis 的区域平台并非固定不变的静态名单；
2. 品牌进入西班牙 Buying Group 后，区域覆盖与平台关系可能因成员退出、整合或重组而变化；
3. Channel Card 中应把“当前平台名单 + 历史结构变化 + 抓取日期”分开记录；
4. 对 001 AI 吹风机，不应只判断“是否进入 Sinersis”，还要明确实际由哪个区域平台承接采购、库存、履约与门店支持。

## 三、数据治理规则

以后 Sinersis 相关数据遵循：
- 区域平台数量必须标抓取日期；
- 当前有效名单以 `Associados` 页面优先于首页营销文案；
- 历史渠道变动单独记录，不覆盖历史事实；
- 媒体报道与当事公司说法冲突时并列保存，不把单方表述写成最终法律事实；
- Leon View 只能由 Leon 明确提供，本文件不生成 Leon View。

## 四、待验证

- Candelsa 与 Sinersis 最终法律/股权关系是否已完全终止；
- Candelsa 原覆盖的 Cataluña、Baleares、Aragón 门店与品牌授权后续由哪些平台承接；
- 这次重组是否导致 Sinersis 区域平台采购权或物流区域重新划分；
- Sinersis 首页何时完成 17 → 16 的数据同步。

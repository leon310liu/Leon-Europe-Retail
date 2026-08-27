# Sinersis / Candelsa 结构变化核验（2025–2026）

> 类型：公开事实核验 + AI Analysis
> 最近核验：2026-08-27
> Leon View：无新增

## 一、公开事实

### 1. Sinersis 当前正文口径为 16 个区域关联平台
Sinersis 当前 `Asociados` 页面明确写明：
- 16 个 asociados / plataformas regionales；
- 19 个仓库；
- 管理/支持 1,500+ 销售点；
- 区域平台职责包括采购管理、门店发展、品牌形象、陈列优化、促销、物流和培训。

来源：
- Sinersis 官方 Asociados：https://www.sinersis.es/asociados/
- Sinersis 官方 Sobre nosotros：https://www.sinersis.es/sobre-nosotros/

### 2. 但 Sinersis 当前网页仍存在“16 vs 17”内部矛盾
截至 2026-08-27：
- `Asociados` 页面正文写 16 个平台，但页面实际列出 17 个不同主体名称：Caslesa、Cedecasa、Celsa、CODECO、COMELSA、DIVELSA、GRUDESA、Idea Hogar、L. Roman、Medired、Proselco、Sacse、Sorefoz、TIANELSUR、UGESA、Vere、Vicosa；
- 首页仍直接写 17 个区域平台 / 17 个 asociados；
- `Sobre nosotros` 页面写 16 socios。

因此当前不能把单一数字写成无争议事实，必须保存来源页和抓取日期。

来源：
- https://www.sinersis.es/asociados/
- https://www.sinersis.es/
- https://www.sinersis.es/sobre-nosotros/

### 3. Candelsa 2025 年与 Sinersis 发生重大关系变化
2025年5月，Sinersis 与 Candelsa 的商业关系发生重大变化。专业行业媒体报道 Sinersis 通知终止与 Candelsa 的商业关系；Candelsa 随后公开了自己的版本，主张其自愿退出 Sinersis 董事会，但当时仍主张股东/品牌授权相关权益。

来源：
- Market Vision, 2025-05-22：https://marketvision.es/cms/index.php/en-breve/negocios-btc/actualidad-abierta-negocios/negocios-panorama/cuando-y-por-que-decidio-sinersis-la-expulsion-de-candelsa
- Sonitron, 2025-06-02：https://sonitron.net/candelsa-situacion-comunicado/
- Electro Imagen, 2025-05-29：https://www.electro-imagen.com/articulo/candelsa-reafirma-su-compromiso-con-su-red-y-con-sus-clientes

### 4. 2026 最新行业资料已将 Candelsa 标记为清算/解散中的平台
Alimarket 2026 西班牙家电零售分销报告明确把过去一年结构变化概括为：Medired 加入 Sinersis，以及 Candelsa 平台进入 `liquidación`。Alimarket 当前多个 Selectro 门店条目同时出现“Se inicia la disolución de Candelsa”的最新结构变化记录。

这意味着 Candelsa 的当前状态不能继续只写成“与 Sinersis 存在关系争议的平台”，必须增加 **Liquidation / Dissolution status**。

来源：
- Alimarket《Informe 2026 del Sector de Distribución Minorista y Mayorista de electrodomésticos por Sala de Venta en España》，2026-05-13：
  https://www.alimarket.es/electro/informe/424875/informe-2026-del-sector-de-distribucion-minorista-y-mayorista-de-electrodomesticos-por-sala-de-venta-en-espana
- Alimarket Selectro establishment records（2026）：
  https://www.alimarket.es/electro/establecimiento/543166-2026-2587625/SELECTRO---IGUALADA

### 5. Medired 已进入 Sinersis 当前成员名单
Sinersis 当前官方 `Asociados` 页面已经列出 Medired，因此“Candelsa 退出导致 17→16”不能再作为当前 16/17 冲突的唯一解释：成员名单期间同时发生了退出、加入与网络重组。

来源：
- https://www.sinersis.es/asociados/

## 二、AI Analysis（非 Leon View）

### 1. 纠正旧 reconciliation 结论
旧版知识曾把“17是Candelsa退出前历史口径、16是退出后当前口径”作为主要解释。2026-08-27 复核后，这个解释需要降级：

- Candelsa 退出/清算是事实性结构变化；
- Medired 后续加入也是事实；
- 当前 `Asociados` 正文写16，但页面实际列17个不同名称；
- 其中 Sorefoz 位于葡萄牙，因此“16=西班牙境内平台、17=含葡萄牙Sorefoz”的解释仍是一个可能假设，但 Sinersis 没有公开文字确认。

结论：**16/17 必须继续保持 unresolved，不再用 Candelsa 单一事件强行解释。**

### 2. 对渠道建模的意义
Sinersis 应按动态网络建模，而不是静态Buying Group名单：

**Sinersis中央层 → 当前区域平台 → 品牌网络（Tien21/Milar/Euronics）→ 实际门店**

Channel Card 必须记录：
- Current Platform Count（带来源/日期）
- Current Platform Names
- Entry / Exit / Liquidation events
- Procurement role
- Inventory / Logistics role
- Invoice entity
- Store network impact

### 3. 对001 AI吹风机的意义
不能只问“是否进入Sinersis”。更关键的是：
- 哪个区域平台实际承接供应商关系；
- 哪个主体持有库存和开票；
- 品牌网络与区域平台如何对应；
- 某平台退出、加入或清算后，原门店网络由谁承接。

## 三、数据治理规则

以后 Sinersis / Candelsa 相关数据遵循：
- 平台数量必须标注来源页面与核验日期；
- `socios / asociados / plataformas / almacenes / puntos de venta` 分字段管理；
- 页面正文数字与实际名称列表冲突时，两者同时保存；
- 成员退出、加入、清算、品牌切换单独建事件记录；
- 媒体报道与当事公司说法冲突时并列保存；
- 不把推断写成公开事实；
- Leon View 只能由 Leon 明确提供。

## 四、待验证

- Candelsa 清算/解散程序的法律阶段与最终结果；
- Selectro / 原Candelsa终端网络后续归属及 Mi Electro 等品牌迁移情况；
- Sinersis 当前16/17数字差异的官方解释；
- Sorefoz是否被排除在“territorio nacional”的16个平台统计之外；
- Medired加入后具体区域采购、库存和门店网络如何重构；
- Candelsa原区域的供应商合同、库存和门店服务由哪些平台承接。

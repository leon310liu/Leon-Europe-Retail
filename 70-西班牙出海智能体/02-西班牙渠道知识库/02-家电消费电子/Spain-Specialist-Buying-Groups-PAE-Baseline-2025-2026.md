# Spain Specialist Buying Groups PAE Baseline 2025–2026

> Scope: 西班牙专业家电采购集团 / specialist buying groups，重点用于消费级电子与 PAE（Pequeño Aparato Electrodoméstico）渠道事实校验。
> Last verified: 2026-08-28
> Evidence type: 公开事实 + AI Analysis。**不包含 Leon View。**

## 1. 公开事实：2025 年采购集团 PAE 规模

Electromarket《Electroguía 2025-26》披露的 2025 年分品类营业额（不含 IVA）显示：

| Group | PAE sales 2025 | Notes |
|---|---:|---|
| Sinersis | €103.2m | 该表中 PAE 规模最大 |
| SEGESA | €28.09m | Cadena Redder 体系 |
| HGM | €3.20m | 规模较小 |
| Cadena Elecco | €0.23m | 规模较小 |

同一行业报告还披露 Sinersis 2025 年在 Línea Blanca、Línea Marrón、PAE、Aire Acondicionado、Tecnología 等多个分品类中保持较高营业规模，其中 PAE 为 €103.2m。

**数据边界：**
- 以上是采购集团层面的 PAE 营业额，不是吹风机销售额，也不是 Personal Care 销售额。
- 不可据此推算 001 AI 吹风机的可销售规模或市场份额。

## 2. 公开事实：2025 年专业渠道门店网络变化

Electromarket《Electroguía 2025-26》记录的 2024 → 2025 门店数变化：

### Sinersis
- Tien21：613 → **555**
- Milar：377 → **366**
- Euronics：367 → **343**

行业资料将这轮网络收缩与 2025 年 Sinersis 和 Candelsa 的合同终止及后续网络重组联系起来。

### SEGESA
- Cadena Redder：1,213 → **1,244**

### Eldisser
- 2025：**868 个销售点**

### HGM
- Master Cadena：**166 个销售点**
- Master Kitchen：**11 个销售点**

## 3. 当前数据冲突 / 数据治理

Sinersis 当前官网（2026 抓取）仍使用：
- **1,500+ stores / puntos de venta**
- 首页写 **17 regional platforms / asociados**
- `Asociados` 页面正文写 **16 asociados**、19 个仓库

而 Electromarket 的 2025 年终数据分别记录：
- Tien21 555
- Milar 366
- Euronics 343
- Sinersis 16 socios

同时，Grupo Medired 已自 2026-01-01 加入 Sinersis。

因此，知识库禁止把以下口径直接混合：
1. 年末品牌门店数；
2. 当前官网宣传网络规模；
3. asociados / socios；
4. regional platforms；
5. warehouses；
6. 加入/退出平台后的实时网络规模。

所有门店规模必须保存 `source_date` 与 `definition`。

## 4. 001 AI吹风机相关意义（AI Analysis，不是 Leon View）

### A. 专业家电采购集团仍是重要 PAE 渠道
Sinersis 2025 年 PAE 营业额达到 €103.2m，说明传统专业家电网络并非只做大家电；PAE 在其商业体系中具有实质规模。

### B. “进入 Sinersis”不能简化成单一总部采购
现有区域平台研究已显示 PROSELCO、CODECO、DIVELSA、GRUDESA、COMELSA、MEDIRED、UGESA 等平台存在不同程度的采购、物流、区域营销、门店支持和供应商互动职能。

因此对 001 应继续验证：
- Sinersis 总部框架协议权；
- 区域平台 SKU 选品权；
- 区域试销权限；
- 合同 / 开票 / 库存主体；
- 门店是否可自主补货或引入区域商品；
- PAE 与 Personal Care 的实际采购负责人。

### C. 门店数 ≠ 可铺货门店数
即使集团层面拥有大规模网络，也不能把全部门店视为吹风机适销门店。应单独验证：
- 哪些门店经营 PAE / Personal Care；
- 哪些门店有 Hair Dryer 陈列；
- 哪些门店参与统一促销；
- 哪些区域平台可对新品做区域测试。

## 5. 待验证事项

- Sinersis 2026 当前按 Tien21 / Milar / Euronics 的精确门店数量。
- Medired 加入后各 enseña 的门店重新分配。
- 2026 年 PAE 分品类销售数据（当前公开来源尚未形成完整全年口径）。
- Sinersis / SEGESA 的 Personal Care / Hair Dryer 子品类数据。
- 区域平台与总部之间对 PAE 新品牌的最终采购权限边界。

## 6. Sources

1. Electromarket, `Electromarket_378 INFORME DEL SECTOR 2025-2026`, p.45. 2025 buying-group store counts and category sales summary. https://www.electromarket.com/revista/378/45/
2. Electromarket, `Electromarket_378 INFORME DEL SECTOR 2025-2026`, p.46. 2025 turnover by subsector. https://www.electromarket.com/revista/378/46/
3. Sinersis official homepage. Current network / platform claims. https://www.sinersis.es/
4. Sinersis official `Asociados` page. Current associated-platform and warehouse wording. https://www.sinersis.es/asociados/
5. Electromarket, 19/12/2025, Grupo Medired incorporation into Sinersis effective 2026-01-01. https://www.electromarket.com/noticia/32682/grupo-medired-pasara-a-formar-parte-de-sinersis-a-partir-del-proximo.html
6. Electromarket, 09/06/2025, Sinersis termination of contracts with Candelsa. https://www.electromarket.com/noticia/31572/sinersis-rescinde-sus-contratos-con-candelsa-.html

## Leon View

**Empty — no Leon View was generated or inferred in this research run.**

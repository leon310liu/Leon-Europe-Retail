# Taurus Digital Force AI｜跨渠道商品数据冲突核验｜2026-08-28

> 类型：公开事实核验 + 数据治理 + AI Analysis  
> 适用：001 AI吹风机 / Sinersis / Taurus竞争参照  
> Leon View：本文件不新增、不修改任何 Leon View。

## 1. 核验对象

产品：Taurus DIGITAL FORCE AI  
制造商型号：`900123000`  
公开零售页面共同出现的 EAN：`8414234001238`

本次核验发现：同一个型号/EAN在 Taurus 官方页面、Milar、Tien21、Carrefour及其他零售页面上的核心规格存在明显冲突，因此不能把任一零售商商品页参数直接当作制造商标准规格。

---

## 2. 公开事实｜Taurus 西班牙官方当前规格

Taurus 西班牙官方产品页当前列出：

- 型号：900123000
- 功率：1100W
- 数字电机：120,000 rpm（西班牙语页面当前口径）
- AI Scalp Protection Mode：双智能传感器，检测温度与距头皮距离并自动调节热量
- Ultra Ionic Care：600M negative ions/cm³
- 风量：38 l/s
- 风速：165 km/h
- 10种速度/温度组合
- Smart Temp Tech
- 温度记忆
- Oscillating Temp Protect
- 可拆卸磁吸滤网
- 线长：1.8m
- 尺寸：7.6 × 6.1 × 22.2 cm
- 重量：430g

来源：
- Taurus 官方西班牙页面：https://taurus-home.com/products/digital-force-ai

### 官方自身也存在跨语言页面差异

同一型号 `900123000` 的 Taurus 英文、法文、德文、葡萄牙文页面当前均显示：

- 1100W
- 100,000 rpm

而西班牙语页面当前显示 120,000 rpm。

因此：

> `1100W` 在 Taurus 当前官方多语言页面中高度一致；`100,000 vs 120,000 rpm` 则属于 Taurus 官方自身仍存在的跨地区/页面版本冲突，必须保留待核验，不能擅自统一。

来源：
- https://taurus-home.com/en/products/digital-force-ai
- https://taurus-home.com/fr-fr/products/digital-force-ai
- https://taurus-home.com/de-de/products/digital-force-ai
- https://taurus-home.com/pt-pt/products/digital-force-ai

---

## 3. 公开事实｜Sinersis 两个品牌站出现同一SKU

### 3.1 Milar

Milar 当前商品页显示：

- 商品：Taurus DIGITAL FORCE AI
- 商品内部ID：`337167`
- EAN：页面图片路径/商品信息对应 `8414234001238`
- 当前页面标价：42.90€（价格为动态数据，只记录巡检时点）
- 页面状态：inStock
- 商品路径：Cuidado personal → Cabello → Secadores de pelo
- 页面结构化字段出现区域/平台标识：`sacse`
- 页面规格却写：2400W、2档速度，并保留 AI Scalp Protection、Ultra Ionic Care、磁吸滤网等功能描述

来源：
- https://www.milar.es/secador-taurus-digital-force-ai.html

### 3.2 Tien21

Tien21 当前商品页显示：

- 商品：Taurus DIGITAL FORCE AI
- 商品内部ID：`337167`
- EAN：对应 `8414234001238`
- 当前页面标价：44.90€（动态数据，只记录巡检时点）
- 页面状态：inStock
- 商品路径：Cuidado personal → Cabello → Secadores de pelo
- 页面结构化字段出现：`grudesa`、`Sacse-21`
- 页面规格同样写：2400W、2档速度，同时保留 AI Scalp Protection、Ultra Ionic Care、磁吸滤网等功能描述

来源：
- https://www.tien21.es/taurus-digital-force-ai.html

### 3.3 可以确认与不能确认的边界

可以确认的公开事实：

1. 同一商品内部ID `337167` 同时出现在 Milar 与 Tien21；
2. 两站展示同一 Taurus DIGITAL FORCE AI 产品；
3. 两站商品页存在不同价格；
4. 页面结构化信息出现 `sacse`、`grudesa`、`Sacse-21` 等区域平台/站点关联标识；
5. 两站均支持到店提货/本地门店履约场景。

不能直接推断：

- SACSE 或 GRUDESA 必然拥有该SKU最终选品权；
- Milar 与 Tien21 使用完全相同的中央库存；
- 所有 Sinersis 区域平台都已上架该SKU；
- 页面中平台标识等同于合同主体、库存所有权或采购主体。

---

## 4. 公开事实｜零售端核心规格冲突

| 来源 | 型号/EAN关联 | 功率 | 电机/转速口径 | 备注 |
|---|---|---:|---|---|
| Taurus Spain 官方 | 900123000 | 1100W | 120,000 rpm | 当前西班牙官方页 |
| Taurus EN/FR/DE/PT 官方 | 900123000 | 1100W | 100,000 rpm | 官方自身跨语言冲突 |
| Milar | 337167 / 同一产品EAN | 2400W | 页面未在主规格明确官方转速 | 与官方1100W冲突 |
| Tien21 | 337167 / 同一产品EAN | 2400W | 页面未在主规格明确官方转速 | 与官方1100W冲突 |
| Carrefour | EAN 8414234001238 | 2200W | 描述为AC motor | 与Taurus官方数字电机/1100W冲突 |
| OutletElectrodomesticos | 900123000 / EAN 8414234001238 | 1100W | 120,000 rpm | 与Taurus Spain较接近 |

Carrefour 来源：
- https://www.carrefour.es/secador-con-ionizacion-y-tecnologia-ai-taurus-digital-force-ai/8414234001238/p

OutletElectrodomesticos 来源：
- https://www.outletelectrodomesticos.com/pequeno-electrodomestico/aseo-y-estetica/secadores-de-pelo/secador-de-pelo-taurus-digital-force-ai-120.000-rpm-ultra-ionic-1100w-rojo

---

## 5. 数据治理结论

### 5.1 Public Fact

同一 Taurus DIGITAL FORCE AI 型号/EAN 在西班牙公开渠道中存在严重参数不一致，至少包括：

- 1100W vs 2200W vs 2400W；
- 数字高速电机 vs Carrefour页面的AC motor描述；
- Taurus官方自身100,000 rpm vs 120,000 rpm。

### 5.2 数据优先级规则

后续知识库对竞争产品规格的优先级应为：

1. 制造商当前官方产品页 / 官方技术手册；
2. 制造商官方说明书或安全文件；
3. 零售商结构化商品页；
4. 第三方Marketplace/经销商商品页。

若官方自身存在冲突，则必须保留多口径并标记`待验证`，不能由AI自行选择一个数字写成确定事实。

### 5.3 对001产品资料管理的反向启示｜AI Analysis，不是Leon View

001未来进入西班牙多个渠道时，应建立单一的欧洲商品主数据源（single source of truth），至少统一：

- EAN/GTIN
- manufacturer model
- rated power
- motor type
- motor rpm
- airflow / air speed
- temperature modes
- sensor logic
- accessories
- dimensions / net weight
- warranty / responsible entity

并在对接Buying Group、Marketplace和零售商时做渠道商品页回查，否则渠道端参数错误会直接影响消费者理解、价格比较、售后判断和AI智能体自身的数据准确性。

---

## 6. 对Sinersis渠道研究的新增意义｜AI Analysis，不是Leon View

Milar与Tien21同时出现同一内部商品ID `337167`，同时保留不同价格及不同区域平台标识，这为后续研究Sinersis提供了一个重要公开线索：

> Sinersis旗下不同零售品牌可能共享某种商品主数据/目录基础设施，同时在品牌前台、区域平台、价格或履约层保留差异。

目前这只能作为**AI推断/研究假设**，不能写成确定的采购结构事实。

后续应继续验证：

- 相同内部商品ID是否跨更多Milar/Tien21/Euronics SKU复现；
- `sacse / grudesa / Sacse-21`字段具体代表目录归属、库存来源、价格源还是履约节点；
- 同一SKU是否可由多个区域平台供货；
- 总部商品主数据与区域平台采购/库存之间的系统边界。

---

## 7. Leon View

本文件不新增、不修改任何 Leon View。

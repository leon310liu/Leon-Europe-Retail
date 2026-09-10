# Ufesa Ion‑Plasma SmartSense — 120k 距离感应智能温控吹风机 Channel Card（2026）

- 更新日期：2026-09-10
- 状态：PUBLIC FACTS + INFERENCE
- Leon View：本文件不新增、不修改、不自行编写任何 Leon View

## 1. 为什么新增

知识库已有 Ufesa Pro Ionic-Tech 等“高速电机 + 温度传感/温控”产品记录。本卡新增的 Ion‑Plasma SmartSense 进一步引入“距离/接近感知 → 自动调节温度”的控制逻辑，对 001 AI 吹风机的传感器与控制架构竞品研究具有直接价值。

## 2. 公开事实（官方）

Ufesa 西班牙官方当前销售 **Secador Ion‑Plasma SmartSense**，官方页面披露：

- 数字高速电机：**120,000 rpm**；
- 官方售价页面当前显示：**129.99 欧元**；
- **SmartSense**：根据吹风机与头发之间的距离，自动调整温度，以避免高温峰值并保护发丝；
- Ion‑Plasma Care 护理技术；
- LCD 屏幕；
- 6 种模式：冷风、儿童、短发、长发、宠物、恒温/等温模式；
- 2 档风速；
- 温度范围：**25°C–95°C**；
- 磁吸风嘴与磁吸扩散器；
- 可拆卸磁吸进风网；
- 官方将其描述为“secado inteligente SmartSense”，但该官方页面并未将产品表述为 AI 吹风机。

来源：Ufesa España 官方产品页（检索/核查日期 2026-09-10）  
https://www.ufesa.es/products/secador-ion-plasma-smartsense

## 3. 西班牙线上渠道事实

PcComponentes 当前可检索到该产品：

- 商品名包含 **Ufesa Ion‑Plasma SmartSense**；
- 标示数字电机 **120,000 rpm**、6 模式、2 档风速、LCD；
- 当前页面显示由 **Ufesa 销售并发货（Vendido y enviado por Ufesa）**。

因此，应将该证据理解为：**Ufesa 已通过 PcComponentes 的第三方/Marketplace 型线上销售界面触达消费者**；它不能被扩大解释为“PcComponentes 自营采购了该 SKU”。

来源：PcComponentes 当前商品/关联商品页面（核查日期 2026-09-10）  
https://www.pccomponentes.com/

另外，西班牙价格比较页面 Idealo 当前显示该产品由 Amazon.es 销售且有库存；该证据可作为线上可获得性旁证，但在取得 Amazon 原始 SKU 页面之前，不用于推断 Amazon 的采购主体或 Vendor / Seller 模式。

来源：Idealo España（核查日期 2026-09-10）  
https://www.idealo.es/

## 4. 与 001 的直接相关性（推断，不是 Leon View）

基于上述公开产品机制，可以把 SmartSense 作为比“单纯恒温/温度监测型高速吹风机”更接近 001 的功能竞品之一：

**距离信息 → 控制逻辑 → 温度自动变化 → 热保护**

这里属于基于公开功能描述形成的竞品架构归纳，不代表 Ufesa 公开了完整传感器硬件、算法或控制回路，也不是 Leon View。

尤其需要保持标签边界：

- **公开事实**：Ufesa 使用 SmartSense、智能干发、根据距离自动调温等表述；
- **不能写成公开事实**：AI 算法、AI 芯片、机器学习、自适应 AI 模型；
- 在没有官方 AI 表述或技术证据前，本知识库不把 Ion‑Plasma SmartSense 分类为“AI 吹风机”。

## 5. 与既有知识库的关系 / 数据治理

- 不替代已有 **Ufesa Pro Ionic-Tech** 卡；两者应并列保留。
- Pro Ionic-Tech 的既有研究重点是温度感知/智能温控；SmartSense 新增的关键变量是**距离相关温度控制**。
- 本轮未发现需要推翻既有 Ufesa Pro Ionic-Tech 事实的公开证据。
- 渠道层必须区分“平台出现 SKU”与“平台自营采购”：本轮 PcComponentes 页面明确显示卖家/发货方为 Ufesa，因此不能把它记为 PcComponentes 自营 listing 成功案例。

## 6. 001 可新增的竞品字段

建议在吹风机竞品数据结构增加以下字段：

- 高速电机转速（rpm）
- 传感变量：温度 / 距离 / 其他
- 自动控制对象：温度 / 风速 / 两者
- 控制触发逻辑公开程度
- 温区范围
- 特殊人群/场景模式（儿童、宠物等）
- 品牌官方是否明确使用 AI 标签
- 渠道销售主体：Retailer first-party / Marketplace brand-direct / Third-party seller / DTC

## 7. TO VERIFY

以下内容当前没有足够可靠的公开证据，保持待验证：

- SmartSense 的准确传感器类型、采样频率及检测距离范围；
- 传感器是否只控制温度，还是在某些模式同时控制风速；
- 产品准确 GTIN/EAN 与内部型号代码；
- 正式上市日期；
- 西班牙线下家电渠道实际铺货情况；
- PcComponentes 是否未来转为自营采购；
- Expert / Milar / Tien21 / Euronics / MediaMarkt / El Corte Inglés 等是否已正式 listing；
- Ufesa/B&B Trends 的该品类 Buyer、MOQ、PO 主体、账期和新品准入规则。

## 8. 来源优先级

1. Ufesa España 官方产品页 — 核心产品事实；
2. PcComponentes 当前页面 — 线上渠道出现与 seller-of-record 证据；
3. Idealo España — Amazon.es 在线可获得性的二级旁证，暂不作为采购结构证据。

## 9. Leon View

**本文件没有新增、修改或自行编写任何 Leon View。**

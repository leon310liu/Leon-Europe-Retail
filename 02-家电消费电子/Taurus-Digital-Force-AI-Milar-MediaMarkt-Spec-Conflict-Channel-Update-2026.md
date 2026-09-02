# Taurus DIGITAL FORCE AI — Milar / MediaMarkt 渠道与参数冲突更新（2026）

> 类型：001 AI吹风机公开事实更新卡 / 渠道与数据治理
> 更新时间：2026-09-03
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增Leon View。

## 1. 为什么值得单独记录

Taurus DIGITAL FORCE AI 是目前西班牙公开渠道中少数直接以“AI”命名、并明确公开双传感器自动温控逻辑的高速吹风机样本。它同时出现在品牌D2C、Milar家电连锁网络以及MediaMarkt Marketplace，因此对001 AI吹风机具有直接竞争与渠道验证价值。

## 2. 已确认公开事实

### A. Taurus官方D2C

Taurus西班牙官方产品页当前公开：
- 产品：DIGITAL FORCE AI
- 型号/参考：900123000
- 功率：1100W
- 电机：页面西班牙语版本写120,000 rpm
- AI Scalp Protection Mode：双智能传感器检测温度与距头皮距离，并自动调节热量
- Ultra Ionic Care：600M负离子/cm³
- 风量/风速：38 l/s；165 km/h
- 10种速度×温度组合
- Smart Temp Tech、温度记忆、Oscillating Temp Protect
- 页面价格快照：RRP 119.99€，促销约74.99€；观察时西班牙语页面显示售罄

来源：
- Taurus Spain官方页：https://taurus-home.com/products/digital-force-ai

### B. Milar零售网络

Milar当前公开销售Taurus DIGITAL FORCE AI，并支持线上购买、送货以及“数百个地区24小时配送/400+ Milar门店免费自提”的页面服务描述。

Milar页面公开：
- 页面价格快照：42.90€ IVA incl.
- 描述保留AI Scalp Protection Mode、双传感器、Ultra Ionic Care、温度记忆、Oscillating Temp Protect等智能护理卖点
- 但页面标题/描述将功率写为 **2400W**

来源：
- Milar：https://www.milar.es/secador-taurus-digital-force-ai.html

数据边界：Milar页面证明该SKU进入Milar公开零售网络，但页面本身不能证明采购合同由Sinersis总部、区域平台或具体门店哪一级签署，也不能据此推断Buyer、MOQ、账期、采购价或销量。

### C. MediaMarkt Spain Marketplace

MediaMarkt Spain当前公开同款DIGITAL FORCE AI：
- 页面价格快照：59.99€ IVA incl.
- 明确标注 **“Vendido y enviado por SDA EUROPE SLU”**
- 功率：1100W
- 电机参数：页面写 **100,000 rpm**
- 同样描述AI Scalp Protection Mode为双传感器检测温度和距头皮距离并自动调热

来源：
- MediaMarkt Spain：https://www.mediamarkt.es/es/product/_secador-taurus-digital-force-ai-1100-w-5-niveles-temperatura-2-velocidades-rosa-metalico-175530252.html

渠道治理：该MediaMarkt样本属于Marketplace第三方offer证据，不应写成MediaMarkt 1P中央采购。

## 3. 关键参数冲突

当前同一产品存在至少两类公开字段冲突：

### 电机转速
- Taurus Spain官方产品页：120,000 rpm
- MediaMarkt Spain：100,000 rpm
- Taurus其他语言市场页面还出现100,000 rpm口径

因此知识库不得自行选择一个值作为“真实工程参数”。统一记录：

`High-speed digital motor; published wording conflict 100,000 vs 120,000 rpm — TO VERIFY exact engineering spec / market version`

### 功率
- Taurus Spain官方产品页：1100W
- MediaMarkt Spain：1100W
- Milar：2400W

当前证据优先级支持把1100W作为“官方当前公开值”，同时必须保留Milar 2400W为渠道页冲突字段，不应静默纠正或删除。

建议治理记录：

`Power: official current 1100W; Milar listing says 2400W — channel listing conflict, captured 2026-09-03`

## 4. 对001直接有价值的公开事实

DIGITAL FORCE AI证明，西班牙公开市场中已经存在把“AI”明确包装为吹风机核心卖点的产品，而且AI并非只用于营销词：官方页面给出了可描述的传感器逻辑——同时检测温度与距头皮距离，并自动调节热量。

因此001竞品字段应至少能区分：
- 普通恒温/NTC
- 智能温控
- 距离传感
- 温度+距离双传感
- 自动热量调节
- 是否明确使用AI命名/AI模式

以上为公开事实分类框架，不是Leon View。

## 5. 渠道结构推断（非公开事实）

基于公开页面，可观察到同一SKU至少存在：

`Taurus品牌D2C → 消费者`

`Taurus产品 → Milar公开零售网络 → 消费者`

`SDA EUROPE SLU第三方seller → MediaMarkt Marketplace → 消费者`

但公开页面不足以确认Milar侧的实际采购主体、上游供应商以及SDA EUROPE SLU与Taurus品牌集团的具体合同关系。以上未确认部分均保留TO VERIFY。

## 6. 数据治理规则新增

对于001竞品，除Seller/1P/Marketplace外，增加：

`Spec Source Priority = Brand official current page > retailer current page > marketplace seller copy`

但“优先级”只用于知识库展示主值，不用于抹掉冲突。任何相同型号的关键参数冲突都必须同时保留：

`field / value / source / capture date / conflict status`

尤其对rpm、功率、传感器、离子数量、重量、噪音等核心卖点，不得人工补齐或自行纠错。

## 7. Leon View

本文件不新增、不修改任何Leon View。

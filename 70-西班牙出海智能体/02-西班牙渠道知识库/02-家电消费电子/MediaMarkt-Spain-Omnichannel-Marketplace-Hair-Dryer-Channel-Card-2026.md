# MediaMarkt Spain — Omnichannel / Marketplace / 高速吹风机 Channel Card（2026）

> 状态：公开事实卡（Public Facts）  
> 最近核验：2026-08-31  
> 适用：西班牙出海智能体－消费级电子 / 小家电 / 个护电器 / 001 AI吹风机  
> 规则：本卡严格区分【公开事实】【推断】【Leon View】；本轮不新增任何 Leon View。

---

## 1. 渠道定位

MediaMarkt España（MediaMarktSaturn, S.A.U.）是西班牙消费电子与相关服务的全国型全渠道零售平台，经营实体店、官网、APP，并叠加第三方 Marketplace。

### 公开事实

- MediaMarkt 官方2026新闻资料称：西班牙拥有 **112家门店**，覆盖全部自治区，约 **7,000名员工**。
- 2025财年西班牙销售额 **超过27.5亿欧元**，同比增长超过7%，官方称市场份额接近22%。
- 数字渠道销售占比已达到 **16%**，较2024年提升1.4个百分点。
- miMediaMarkt会员超过 **300万**。
- Pinto（Madrid）的 Hub Service Pro 是其西班牙主要物流与技术服务中心，面积 **70,000㎡以上**。
- 官方称其2025年回收 **11,000吨RAEE**，并将维修量同比提升11%。
- 2026规划中新增长点包括 Ponferrada 新店及 Barcelona Plaça de Catalunya 约 **6,500㎡** Lighthouse旗舰店。

来源：
- MediaMarkt España 2026新闻稿（PDF）：https://assets.ctfassets.net/osyynfyvlyjc/4zuipiIlWqw2HG9DXAorYI/da0048ab8a6c18311411f2fb79375931/160226_NP_MediaMarkt_arroja_tres_a%C3%83_os_consecutivos_de_crecimiento_siendo_l%C3%83_der_en_su_mercado__1_.pdf
- MediaMarkt España Sala de Prensa：https://www.mediamarkt.es/es/specials/sala-de-prensa

---

## 2. 2026数据治理提醒：官方PDF日期存在内部冲突

### 公开事实

上述PDF位于 MediaMarkt 官方2026新闻区，正文同时讨论“2025财年已结束”“2026新财年”“2026年9月Ponferrada开店”等内容，但PDF正文页首却写有 `Madrid, 16 de febrero de 2025`。

### 知识库处理

- 将该PDF视为当前官方经营数据来源；
- 但**不把其正文日期单独作为可靠发布日期**；
- 在引用经营规模和2026规划时，需同时保留“官方文档日期字段疑似错误/冲突”的备注；
- 若后续找到CECONOMY年报、BORME或更新后的官方新闻稿，以更高等级来源校正。

---

## 3. MediaMarkt并非单一采购模式：必须区分1P零售与Marketplace

### 公开事实

MediaMarkt 官方帮助中心明确：

- Marketplace商品由第三方卖家通过 MediaMarkt 网站销售；
- 商品页会显示 `Vendido y enviado por ...`；
- 订单由第三方卖家直接发货；
- Marketplace商品与MediaMarkt自营商品在部分支付、到店支付、促销及履约规则上存在差异。

来源：
- Marketplace定义：https://te-ayudamos.mediamarkt.es/app/answers/detail/a_id/18417/
- Marketplace卖家规则：https://te-ayudamos.mediamarkt.es/app/answers/detail/a_id/18423/
- 支付方式及Marketplace差异：https://www.mediamarkt.es/es/service/opciones-de-pago

### 知识库进入路径拆分

**路径A：MediaMarkt 1P / 自营零售**  
品牌/供应商 → MediaMarkt采购体系 → MediaMarkt库存/线上线下零售 → 消费者

**路径B：MediaMarkt Marketplace**  
品牌/卖家 → MediaMarkt Marketplace上架 → 第三方卖家履约 → 消费者

> 两条路径的“进入MediaMarkt”含义完全不同，禁止将“官网有售”自动解释为“MediaMarkt Buyer 已完成采购”。

---

## 4. 001直接相关：110k RPM高速无刷吹风机已同时出现在1P与Marketplace路径

### 4.1 Cecotec DryNova 3in1 — 更接近MediaMarkt自营零售证据

截至2026-08-31，MediaMarkt España页面在售：

- 品牌：Cecotec
- 型号：DryNova 3in1 Mint
- 功率：1600W
- 电机：BLDC / brushless
- 转速：110,000 rpm
- 3个附件
- 离子
- 4档温度 / 2档速度
- 大屏显示
- 页面显示可在线购买并支持门店自提
- 本轮抓取页面**未显示第三方 `Vendido y enviado por ...` 字段**
- 本轮页面价：约 **€35.99**（价格为动态数据，仅作当日快照）

来源：
https://www.mediamarkt.es/es/product/_secador-cecotec-drynova-3in1-1600-w-4-niveles-de-temperatura-regulacion-continua-difusor-incluido-110000-rpm-mint-1605454.html

### 数据治理

“未显示第三方卖家字段”是强烈的自营信号，但公开网页并未展示采购合同或PO主体，因此：

- `MediaMarkt 1P retail evidence`：高可信
- `MediaMarkt直接向Cecotec采购/谁开PO/谁持货权`：**TO VERIFY**

---

### 4.2 AIGOSTAR AirJet — 明确Marketplace路径

截至2026-08-31，MediaMarkt España页面在售：

- 品牌：AIGOSTAR
- 型号：AirJet
- 功率：1600W
- BLDC：110,000 rpm
- 风速：21 m/s
- 57 dB
- 390g
- NTC 55°C恒温
- 400 million negative ions（卖家/商品页宣称）
- 2个磁吸附件
- 本轮页面价：约 **€35.92**（动态价格快照）
- 页面明确显示：**`Vendido y enviado por Aigotech`**

来源：
https://www.mediamarkt.es/es/product/_secador-aigostar-airjet-1600-w-4-niveles-temperatura-negro-176150323.html

### 关键结论（公开事实层）

AIGOSTAR AirJet 证明：

**进入 mediamarkt.es 并不等于进入 MediaMarkt 自营采购体系。**

该SKU目前公开可确认的路径是：

Aigotech → MediaMarkt Marketplace → 消费者

而不是：

Aigostar/Aigotech → MediaMarkt Buyer → MediaMarkt自营库存

后者目前没有公开证据。

---

## 5. 价格与产品基准（001相关）

2026-08-31公开页面快照显示，MediaMarkt体系内已经同时存在：

| 品牌 / SKU | 110k高速无刷 | 智能/温控 | 页面路径 | 当日价格快照 |
|---|---:|---|---|---:|
| Cecotec DryNova 3in1 | 是 | 多档控制/显示 | 更接近1P自营 | €35.99 |
| AIGOSTAR AirJet | 是 | NTC 55°C | Marketplace，Aigotech卖家 | €35.92 |
| AENO HD5 AI | 是 | AI调温/风量、NTC、触屏、语音 | Marketplace，MORELE.NET卖家 | 约€253.07 |

AENO来源：
https://www.mediamarkt.es/es/product/_secador-de-pelo-aeno-hd5-ai-ionico-1500w-lcd-110000-rpm-5-boquillas-1500-w-3-niveles-temperatura-3-velocidades-gris-174869065.html

### 公开事实可得出的市场观察

同一个MediaMarkt线上入口中，110k RPM高速无刷吹风机已经覆盖：

- 约€36的低价区；
- 中高价与AI功能区；
- 自营/近似自营与第三方Marketplace两种不同商业路径。

这进一步证明：**110k RPM已成为跨价格带的产品配置，不能仅凭电机转速判断高端定位。**

> 以上属于基于公开事实的分析，不是 Leon View。

---

## 6. 对001进入研究的意义（推断层，不是准入事实）

### 推断A：MediaMarkt存在“双入口”

对于001一类新品牌，理论上应分别研究：

1. **Marketplace entry**：第三方卖家账户、平台费率、履约、退货、VAT/EPR/GPSR责任；
2. **1P retail listing**：Buyer、品类采购、价格体系、年度谈判、促销、库存、门店铺货、退货及售后责任。

二者不可混用。

### 推断B：Marketplace可作为线上需求验证，不等于全国零售背书

AIGOSTAR案例公开证明，新/非核心品牌可以通过Marketplace在MediaMarkt域名内销售；但这种存在本身不能证明MediaMarkt采购团队已选品。

### 推断C：若001目标为真正进入MediaMarkt线下网络，必须取得1P采购证据

需要验证：

- 西班牙PAE / personal care Buyer组织；
- 新品牌listing周期；
- 年度合同/返点；
- 首单MOQ；
- 中央仓 / 门店仓 / dropship模式；
- 全国上架还是区域/线上试销；
- price protection / markdown / returns；
- RAEE / EPR / GPSR责任主体；
- SAT与备件要求；
- Retail Media费用；
- 是否允许先Online 1P再扩实体店。

全部标记：**TO VERIFY**。

---

## 7. Channel Card字段

| 字段 | 2026公开事实 / 状态 |
|---|---|
| 渠道 | MediaMarkt España |
| 类型 | 全国消费电子 / 家电全渠道零售 + Marketplace |
| 西班牙门店 | 112家（官方2026资料口径） |
| 覆盖 | 全部自治区 |
| 2025销售额 | >€2.75bn |
| 数字销售占比 | 16% |
| 会员 | >3m miMediaMarkt |
| 主物流/SAT Hub | Pinto, Madrid，>70,000㎡ |
| 001产品相关性 | 极高 |
| 110k吹风机存在 | 是 |
| Marketplace允许第三方卖家 | 是 |
| 1P与Marketplace需区分 | 必须 |
| 新品牌Buyer | TO VERIFY |
| MOQ/账期/返点 | TO VERIFY |
| Listing fee | TO VERIFY |
| RAEE/EPR/GPSR责任 | TO VERIFY by model |
| SAT/备件要求 | TO VERIFY |

---

## 8. 后续巡检任务

1. 寻找 MediaMarkt España 官方/招聘/LinkedIn/供应商资料中的 PAE / Beauty Buyer 组织结构；
2. 核验 Cecotec DryNova 是否由 MediaMarktSaturn S.A.U. 直接销售并确认发票主体；
3. 研究 MediaMarkt Marketplace 西班牙卖家准入规则与佣金结构；
4. 追踪001类产品是否从Marketplace转入1P自营的公开案例；
5. 核验2026年 Barcelona Plaça Catalunya、Ponferrada开店后的门店总数变化；
6. 对官方2026新闻PDF中的“16 de febrero de 2025”日期冲突继续寻找更高等级来源校正。

---

## 9. Leon View

**本卡没有新增、修改或自行生成任何 Leon View。**

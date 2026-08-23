# Dreame × MediaMarkt Spain 渠道路径快照（2026-08-23）

> 适用项目：001 AI吹风机
> 事实等级：公开事实 + AI分析
> Leon View：无（不得据此自动生成）

## 一、公开事实

### 1. MediaMarkt 对 Marketplace 商品有明确标识规则
MediaMarkt España 官方帮助中心说明：Marketplace 商品是由第三方卖家销售的商品；商品页面会显示“Vendido y enviado por …”以及卖家名称。MediaMarkt 隐私政策也明确，第三方 Marketplace 报价会以“Vendido y enviado por + 卖家名称”进行标识。

来源：
- MediaMarkt España Help Center, “¿Qué es el Marketplace de MediaMarkt?”, 2026 抓取：
  https://te-ayudamos.mediamarkt.es/app/answers/detail/a_id/18417/
- MediaMarkt España Privacy Policy, 2026：
  https://www.mediamarkt.es/es/legal/politica-de-privacidad/politica-de-privacidad

### 2. Dreame 在 MediaMarkt Spain 同时存在第三方 Marketplace SKU 与未标第三方卖家的 SKU
2026-08-23 抽查结果：

- Dreame Pocket High-Speed Hair Dryer Titanium：页面明确显示“Vendido y enviado por infopavon”。
- Dreame Gusto Golden：页面明确显示“Vendido y enviado por MBOTech - ES”。
- Dreame Hair Gleam Pink：页面明确显示“Vendido y enviado por Digital Bay ES”。
- Dreame Hair Glory White：页面明确显示“Vendido y enviado por M24”。

这些均属于可直接识别的 Marketplace 第三方卖家商品。

与此同时：
- Dreame Pocket Neo（金色，MediaMarkt article no. 1620671）当前商品页未显示“Vendido y enviado por …”第三方卖家标识，并提供“Recogida en tienda（门店取货）”入口。

来源：
- Pocket Neo：
  https://www.mediamarkt.es/es/product/_secador-dreame-pocket-neo-1300-w-5-niveles-temperatura-2-velocidades-difusor-incluido-plegable-300000000-iones-negativos-oro-1620671.html
- Dreame brand / hair dryer page：
  https://www.mediamarkt.es/es/brand/dreame/secador-de-pelo

### 3. Pocket Neo 的公开产品特征
MediaMarkt 页面当前公开：
- 110,000 rpm 高速电机
- 70 m/s 气流
- 300g
- <60 dB
- 300,000,000 负离子/cm³
- NTC + 微处理器每秒300次温度检测
- 热风模式温度控制在57°C以下
- 可折叠设计
- 当前抓取价格约 €109（原价约 €129）

这表明“高速数字电机 + 离子 + 智能温控 + 轻量化”已在西班牙主流消费电子渠道形成成熟商品表达。

## 二、AI分析（不是公开事实）

### 1. Dreame 在 MediaMarkt Spain 可能已经形成“双轨进入”
公开页面至少显示：
- 路径A：第三方 Marketplace 卖家 → MediaMarkt 平台 → 消费者
- 路径B：Pocket Neo 页面表现出较强的 MediaMarkt 自营/自有库存信号（无第三方卖家标识 + 支持门店取货）

但仅凭页面展示仍不应直接写成“Dreame 已拿下 MediaMarkt 中央采购”。若要把路径B升级为公开事实，需要继续核验：
- 该 SKU 的 seller 字段是否确认为 MediaMarkt；
- 是否进入实体门店常规库存，而非中央电商库存；
- 供货主体是 Dreame 西班牙/欧洲主体、进口商还是本地分销商；
- 是否存在总部采购合同。

### 2. 对001 AI吹风机的直接意义
不能再把“上 MediaMarkt”视为单一路径。至少应拆成：
1. Marketplace 测试上架；
2. MediaMarkt 自营电商；
3. MediaMarkt 实体门店采购/库存；
4. 由第三方本地卖家或分销商供货。

产品竞争层面，110,000 rpm、负离子、NTC智能温控、300g级轻量化等参数已出现于渠道内，因此这些功能本身不足以构成唯一渠道准入理由。

## 三、待验证项

- Pocket Neo 是否由 MediaMarkt 自营销售。
- Pocket Neo 是否有实体店实际库存及铺货范围。
- Dreame 在西班牙的正式进口/分销主体。
- Dreame 是否与 MediaMarkt Spain 存在中央采购协议。
- Marketplace 卖家 MBOTech、infopavon、Digital Bay、M24 与 Dreame 的正式关系。

## 四、知识库数据治理规则

- “在 MediaMarkt 网站出现” ≠ “进入 MediaMarkt 自营采购”。
- 只有页面明确无第三方 seller 标识，也不能单独作为中央采购事实；至少要结合 seller / invoice / store stock / supplier information 继续核验。
- 所有 SKU 快照必须附抓取日期，价格与卖家可能动态变化。

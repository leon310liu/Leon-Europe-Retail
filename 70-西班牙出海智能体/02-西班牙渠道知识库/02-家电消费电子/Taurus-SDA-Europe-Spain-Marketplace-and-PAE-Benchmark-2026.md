# Taurus / SDA Europe Spain Marketplace & PAE Benchmark 2026

> 更新时间：2026-08-27
> 类型：公开事实知识卡 / 001 AI吹风机竞争与渠道参照
> Leon View：留空（禁止AI自行生成）

## 1. 角色定位

本卡用于区分：
- Taurus 品牌/制造与责任主体；
- SDA EUROPE S.L./S.L.U. 作为西班牙本地经营主体及Marketplace Seller；
- MediaMarkt / PcComponentes / Leroy Merlin 等平台中的第三方Seller路径；
- 001 AI吹风机可参考的“西班牙本地品牌集团主体 → 自营/关联Seller → 多Marketplace销售”模式。

## 2. 已验证公开事实

### 2.1 SDA EUROPE S.L. 的法律与经营范围

2019年12月13日西班牙BORME记载：SDA EUROPE S.L. 于2019年设立，经营范围包括家居、厨房、个人护理等家电产品的制造与商业化，并明确覆盖互联网渠道；当时登记的唯一管理员为 TAURUS APPLIANCES GROUP S.L.

2026年公开企业登记聚合信息仍显示：
- SDA EUROPE S.L. 状态为 active；
- VAT: ESB67524504；
- 地址：Santa Perpètua de Mogoda, Barcelona；
- 经营活动包含家居、厨房、个人护理设备的制造和商业化；
- 管理层仍显示 TAURUS APPLIANCES GROUP S.L. 作为 administrador único。

来源：
- BOE/BORME 2019-12-13: https://www.boe.es/borme/dias/2019/12/13/pdfs/BORME-A-2019-238-08.pdf
- Pappers company profile (2026-08): https://www.pappers.es/company/sda-europe-sl-1000378342575

### 2.2 MediaMarkt：Taurus 高速吹风机由 SDA EUROPE SLU 销售

MediaMarkt España 当前 Taurus Digital Force 吹风机页面显示：
- 110,000 RPM 数字电机；
- 23 m/s 风速；
- Ionic Care；
- 智能温控；
- 温度记忆；
- 卖家：`SDA EUROPE SLU`。

这意味着至少对该SKU，公开可验证的是：

**Taurus / SDA Europe → MediaMarkt Marketplace → 消费者**

而不是“MediaMarkt自营采购”。

来源：
- MediaMarkt Taurus Digital Force: https://www.mediamarkt.es/es/product/_secador-de-pelo-taurus-digital-force-1600-w-5-niveles-temperatura-2-velocidades-difusor-incluido-gris-metalico-176499946.html

### 2.3 SDA EUROPE 不是单一SKU卖家，而是跨品类Marketplace经营主体

MediaMarkt 当前 Taurus 多个厨房与家居电器页面也显示 `Vendido y enviado por SDA EUROPE SLU`，例如多款Taurus烤面包机和采暖产品。

PcComponentes 当前 Taurus Optima Easy 1500 搅拌机页面也显示 `Vendido y enviado por SDA EUROPE`。

Leroy Merlin 当前部分 Taurus 商品页面显示 `Vendido y enviado por SDA EUROPE SLU`。

这表明 SDA EUROPE 的公开角色不应只理解为某个Hair Care SKU的偶发Seller，而更接近 Taurus 体系在西班牙多平台电商/Marketplace中的本地运营主体之一。

来源：
- MediaMarkt Taurus toaster brand page: https://www.mediamarkt.es/es/brand/taurus/taurus-cocina/tostadoras
- PcComponentes Taurus Optima Easy 1500: https://www.pccomponentes.com/batidora-de-vaso-taurus-optima-easy-1500-1500w-jarra-15l
- Leroy Merlin Taurus fryer: https://www.leroymerlin.es/productos/freidora-taurus-973953-3-l-2100w-87955421.html

### 2.4 制造商/品牌主体与Seller主体应分开记录

MediaMarkt 当前 Taurus 商品页可同时出现：
- Manufacturer / contact: Electrodomésticos Taurus, S.L. / Taurus Appliances, S.L.；
- Seller: SDA EUROPE SLU。

因此知识库必须区分：
- Brand / Manufacturer；
- EU Responsible Person / Product Responsible Entity；
- Marketplace Seller；
- Importer of Record；
- Retailer Self-operated Procurement。

这些角色不能因为属于同一集团而自动合并。

来源：
- MediaMarkt Taurus product pages（见上述来源）
- Leroy Merlin product compliance disclosures（见上述来源）

## 3. 对001 AI吹风机的AI Analysis（非Leon View）

1. Taurus 提供了一个本地品牌集团的直接参照：西班牙本地经营主体可以直接作为Marketplace Seller，在MediaMarkt、PcComponentes、Leroy Merlin等平台运营多个SKU，而不必把“进入平台”全部理解为零售商自营采购。
2. 对001而言，如果未来建立西班牙本地法人或授权运营主体，也可研究类似的“本地主体 + 品牌运营 + 多Marketplace Seller”路径。
3. 但Marketplace自营Seller路径与MediaMarkt中央采购、实体门店陈列、Buying Group供货完全不同，必须分开评估。
4. Taurus Digital Force 已覆盖 110,000 RPM + Ionic + 智能温控 + 记忆，因此这些功能已属于成熟竞争特征，不能单独构成001的高溢价理由。

## 4. 待验证项

- SDA EUROPE 与 Taurus Appliances Group 当前完整股权结构；
- SDA EUROPE 是否承担特定产品的 Importer of Record；
- RII-AEE / EPR / RAEE 责任主体具体落在哪个集团实体；
- SDA EUROPE 是否统一管理 Taurus 在西班牙各Marketplace的Seller运营；
- Taurus 在 MediaMarkt 是否同时存在自营采购SKU；
- Taurus 高速吹风机是否进入 MediaMarkt 实体店即时库存；
- Taurus / SDA Europe 与 Sinersis、SEGESA、Expert、CEMEVISA 等本土分销集团的直接供货关系。

## 5. 数据治理规则

以后涉及品牌集团在Marketplace中的商品时，必须分别记录：

- `brand`
- `manufacturer`
- `eu_responsible_person`
- `marketplace_seller`
- `retailer_self_operated`
- `importer_of_record`
- `rii_aee_epr_entity`
- `physical_store_stock`

不得用“品牌已进入某平台”替代上述角色判断。

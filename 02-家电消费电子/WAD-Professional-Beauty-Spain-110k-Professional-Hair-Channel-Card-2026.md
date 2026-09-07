# WAD Professional Beauty Spain — 110k Professional Hair Channel Card (2026)

> 类型：公开事实知识卡 / 垂直专业美发渠道
> 更新日期：2026-09-06
> Leon View：**本文件不新增、不推导 Leon View**。

## 1. Channel identity

### 公开事实
- WAD Professional Beauty 官方将自身定位为面向 **Peluquería y Estética（美发与美容）专业人士**的设备及配件品牌/业务体系，公开产品类别包括吹风机、直发器、理发器/剃须器及配件。
- WAD 官方联系页公开的运营/联系主体为 **WORLDSELL S.L.**，地址为 **De la Mora 22, 08918 Badalona, España**，联系电话 +34 610 111 566，邮箱 info@wadprofessional.com。
- 官网提供以“Nombre / Empresa / Email / Teléfono / País / Página Web”为字段的商务联系入口，表明其公开触点不仅面向终端个人消费者，也接受企业/商业联系。

### 来源
- WAD 官方首页：https://www.wadprofessional.com/
- WAD 官方 Nosotros：https://www.wadprofessional.com/wad-professional-beauty/
- WAD 官方 Contacto：https://www.wadprofessional.com/contacto-wad-professional-beauty/
- WAD 官方 legal notice（WORLDSELL S.L.）：https://www.wadprofessional.com/fr/notes-legales/

## 2. 与001 AI吹风机直接相关的产品事实

### WAD COMBO
- 官方定义为 6合1专业美发工具，可执行 Secador / Plancha / Rizador / Cepillo（吹风、直发、卷发、刷理）。
- 官方规格：**BLDC/BDLC motor, 110,000 rpm**；PTC快速加热；6个附件；3档温度；3档风速；风速20/25/30 m/s；Cool Shot；整机重量665 g。
- BeautyMarket 于 2025-07-29 报道 WAD COMBO，亦明确写出 110,000 rpm 电机及专业美发定位。

来源：
- WAD 官方 COMBO：https://www.wadprofessional.com/portfolio/combo-wad-secador-profesional/
- BeautyMarket（2025-07-29）：https://www.beautymarket.es/peluqueria/wad-professional-beauty-lanza-combo-un-secador-profesional-en--peluqueria-35847.php

### WAD G-FORCE
- 官方规格页面写明：1600–1800W、340g（不含线）、离子功能、磁吸风嘴/扩散器、2档速度、4档温度、噪音 <78dB（30cm）、电机寿命1,000小时。
- 页面宣传区写 **110,000 rpm Brushless Motor**。
- 但同一官方技术规格区域同时写 **“Brushless Motor 110,000 RPM / 87,000 RPM”**。

来源：
- WAD 官方 G-FORCE（英文）：https://www.wadprofessional.com/en/portfolio/g-force-wad-professional-dryer/
- WAD 官方 G-FORCE（意大利文）：https://www.wadprofessional.com/it/portfolio/g-force-wad-asciugacapelli-professionale/

## 3. 数据治理：官方规格冲突

### 已确认冲突
同一 WAD G-FORCE 官方页面同时存在：
- Marketing field: **110,000 rpm**
- Technical specification field: **110,000 rpm / 87,000 rpm**

因此知识库不得直接把 G-FORCE 所有版本统一写为固定110k。

建议结构化字段：
- `motor_type`: Brushless
- `rpm_marketing_claim`: 110000
- `rpm_technical_field`: 110000 / 87000
- `exact_rpm_status`: TO_VERIFY_BY_SKU_OR_REVISION

可能原因（**推断，不是公开事实**）：不同SKU/电机版本、产品迭代或官网内容未同步。当前没有足够公开证据决定哪一种解释正确。

## 4. 渠道模型

### 公开事实支持
WAD 是面向专业美发/美容行业的设备产品体系，公开产品和联系体系由西班牙 Badalona 的 WORLDSELL S.L. 对外承接。

可确认的公开链路最低限度为：

**WAD Professional Beauty / WORLDSELL S.L. → 专业美发美容产品市场 → peluquería / barbería / professional beauty customers**

### 不能写成事实的部分
以下暂未获得足够官方公开证据：
- WORLDSELL S.L. 是否为 WAD 商标法律所有人；
- WAD 是否自有制造，还是OEM/ODM生产；
- 西班牙全国分销商层级及数量；
- 是否接受第三方新品牌代理；
- 是否承担外部品牌进口总代理；
- 具体 Buyer / Category Manager；
- 首单MOQ、账期、返点、listing fee；
- Salon / Barber shop 覆盖数量；
- 经销商区域保护规则。

以上统一标记：`TO_VERIFY`。

## 5. 对西班牙8大渠道体系的知识库归类

建议归类：
- 一级：**垂直专业渠道**
- 二级：**Professional Hair / Beauty Equipment**
- 角色：**Spain-based professional beauty brand/operator**
- 与001相关性：**HIGH**

原因仅基于公开事实：WAD自身已经拥有110k BLDC/Brushless高速吹风/多功能造型产品，并明确服务专业美发美容场景。

## 6. 事实 / 推断 / Leon View 边界

### Public Facts
见上文带官方/行业媒体来源的内容。

### Inference
- WAD 是001值得持续观察的专业渠道节点：这是基于其专业客户定位和110k产品组合做出的渠道相关性判断，不等于其会采购001。
- G-FORCE参数冲突可能来自SKU/版本差异：仅为推断。

### Leon View
**无。不得由本卡自行生成 Leon View。**

## 7. 下一轮待验证
1. WORLDSELL S.L. 与 WAD 品牌的法律/商标关系。
2. WAD/Worldsell 的B2B经销商网络及西班牙区域分销结构。
3. 是否存在公开 distributor/dealer list。
4. COMBO / G-FORCE 的实际西班牙专业渠道零售商覆盖。
5. G-FORCE 110k / 87k 参数冲突对应的具体SKU或产品revision。
6. 新品牌进入、OEM/ODM、Buyer、MOQ、账期及返点规则。

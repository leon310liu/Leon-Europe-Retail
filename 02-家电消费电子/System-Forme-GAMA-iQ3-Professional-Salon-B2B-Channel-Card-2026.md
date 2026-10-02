# System Forme × GA.MA iQ3 × Professional Salon B2B Channel Card — Spain 2026

> Scope: 西班牙消费级电子/美发电器渠道事实库；001 AI吹风机相关垂直专业渠道。
> Updated: 2026-09-12
> Rule: PUBLIC FACT / INFERENCE / TO VERIFY 严格分层；本卡不新增、不修改 Leon View。

## 1. Channel identity

### PUBLIC FACT

- System Forme 是位于 Madrid 大区 Rivas-Vaciamadrid 的美发、美容、barbería 专业供应商，官网地址为 Calle de la Polea, 21, 28522 Rivas-Vaciamadrid, Madrid。
- System Forme 官网称其由 Pedro Barahona 于 1990 年创建，目标客户明确为专业美发/美容经营者，经营范围包括美发家具、utillaje、aparatos eléctricos、美发产品和barbería产品。
- 官网商品页普遍存在“¿Eres profesional? Si quieres una tarifa especial”入口，说明其存在面向专业客户的差异化价格/商业体系。
- System Forme不仅销售单品，还提供沙龙整体设计、安装和融资类服务；官网展示多个已完成的salón项目。

Sources:
- System Forme, “Comprar en tienda / Venta de mobiliario de peluquería”: https://www.systemforme.com/content/comprar-en-tienda-venta-de-mobiliario-de-peluqueria.html
- System Forme, Contact: https://www.systemforme.com/contactenos
- System Forme, Inicio / categories: https://www.systemforme.com/inicio/
- Beauty Market, 2017 company profile: https://www.beautymarket.es/peluqueria/system-forme-tres-decadas-renovando-el-sector-del-mobiliario-para-peluqueria-y-estetica-peluqueria-11566-amppage.php

## 2. Direct 001-relevant assortment evidence

### PUBLIC FACT

System Forme currently lists the GA.MA Professional iQ3 Perfetto hair dryer.

Observed product attributes on System Forme:
- Professional: Sí
- Brushless motor
- Motor speed field: 110,000 rpm
- 1600 W
- LED display
- 4 temperatures / 3 speeds
- Smart Pad / stand-by technology
- professional accessories including nozzles and diffuser
- professional-price call-to-action on the product page

The page title contains “120.000 rpm”, while the structured specification field states “Velocidad motora 110.000 rpm”. This is an internal page-level specification conflict and should not be normalized without manufacturer verification.

Source:
- System Forme, GA.MA iQ3 Perfetto: https://www.systemforme.com/secador-de-pelo-iq3-perfetto-120000-rpm-gama/

GA.MA Italy Professional itself positions the brand as a professional hair-technology company serving salons and consumers, and lists the iQ line as professional hair-dryer technology.

Source:
- GA.MA Italy Professional corporate site: https://gamaitalyprofessional.com/

## 3. Channel-role classification

### PUBLIC FACT

System Forme is not only a consumer ecommerce storefront. Public evidence supports a professional salon-equipment / salon-supply role:
- professional pricing CTA;
- product and equipment catalogue for peluquería/barbería;
- salon project/design/installation services;
- financing options;
- direct commercial contact for projects/products.

### INFERENCE — NOT LEON VIEW

For 001, System Forme is best modeled as a **vertical professional B2B salon-equipment / hair-tool distributor-retailer node**, rather than as a mass consumer-electronics chain.

Candidate route:

`Brand / importer / Spanish-EU distributor → professional salon supplier (System Forme) → peluquerías / barberías / academies / professional users`

This route is structurally different from MediaMarkt / PcComponentes / Sinersis / beauty-perfumery retail because the buyer/use case is salon operation and professional equipment procurement.

## 4. Entry-rule evidence

### PUBLIC FACT

Publicly visible entry/customer mechanics include:
- special tariff for professional customers;
- direct commercial contact (`comercial@systemforme.com`);
- quote/contact workflow for some professional projects/products;
- financing communication up to €3,000 on current product/project pages, with conditions shown by System Forme;
- ecommerce purchase on stocked catalogue products.

### TO VERIFY

No reliable public source was found for:
- supplier onboarding process;
- actual buyer/category manager name;
- whether hair electrical appliances are purchased directly from GA.MA, through a Spanish importer, or via another wholesaler;
- MOQ;
- payment terms;
- rebate / listing fee / promotional contribution;
- central warehouse size;
- annual revenue;
- number of active professional salon customers;
- national geographic sales split;
- exclusivity by brand/territory;
- EDI/PIM requirements.

Do not infer these values.

## 5. Data-quality / contradiction check

### PUBLIC FACT CONFLICT

The current System Forme iQ3 page contains a motor-speed inconsistency:
- page/title wording: `120.000 rpm`;
- specification table: `110.000 rpm`.

Status: **TO VERIFY — product-master conflict**.

This should remain visible as a data-governance example for 001. Do not silently choose one value.

## 6. Knowledge-base impact

### PUBLIC FACT

Before this card, the repository had no file matching “System Forme”. This adds a distinct Madrid-based professional salon-equipment / hair-tool channel node.

### INFERENCE — NOT LEON VIEW

The existence of GA.MA iQ3 in System Forme confirms that high-speed brushless hair dryers are not limited to mass retail, beauty chains or marketplaces in Spain; they also appear in professional salon-supply commerce.

This does **not** prove that System Forme would accept 001, nor that its procurement requirements match GA.MA’s route.

## 7. Next verification targets

1. Identify legal sales entity / VAT identity used by System Forme.
2. Identify GA.MA Spain/Europe distribution chain into System Forme.
3. Find category buyer / commercial decision-maker for electrical hair tools.
4. Verify professional tariff registration conditions.
5. Check whether System Forme distributes nationally or mainly Madrid/central Spain for electrical tools.
6. Map other Spanish salon-equipment wholesalers carrying 100k–150k rpm sensor/AI dryers, to estimate this vertical’s depth.

## Source hierarchy

1. System Forme official website — primary source.
2. GA.MA Italy Professional official website — primary brand source.
3. Beauty Market — professional-industry background source.

No Leon View added or modified.

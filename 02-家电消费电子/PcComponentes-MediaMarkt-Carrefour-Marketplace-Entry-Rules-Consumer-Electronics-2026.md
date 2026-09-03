# PcComponentes / MediaMarkt / Carrefour Marketplace Entry Rules — Consumer Electronics — 2026

> Scope: Spain public-fact knowledge base for consumer-electronics market entry, with direct relevance to 001 AI hair dryer.
> Capture date: 2026-09-03
> Rule: Public facts and inference are separated. No Leon View is created or modified in this file.

## 1. Why this card exists

Spain's major retail websites do not all represent the same route to market. For consumer-electronics products such as a high-speed hair dryer, a listing can be either retailer 1P procurement or third-party marketplace selling. This card records current public marketplace entry rules so the knowledge base can distinguish those routes.

---

## 2. PcComponentes Marketplace

### Public facts

PcComponentes' official seller-help center states that, as of its 17 July 2026 update, a Marketplace seller account carries a monthly fee of **€39.99 + VAT**, but this fee is charged only in months in which at least one customer order is placed. The first month after account activation is free. The monthly fee is separate from category commissions.

Source: https://marketplacehelp.pccomponentes.com/hc/es-es/articles/37682332963613-Cuota-mensual-de-la-cuenta-de-vendedor

PcComponentes' seller configuration documentation, updated 28 May 2026, states that sellers operate through **Mirakl** and must configure store identity, shipment country, returns policy, legal registration data and banking information. The seller's returns policy must be at least as favorable as PcComponentes' minimum policy.

Source: https://marketplacehelp.pccomponentes.com/hc/es-es/articles/27709014464413-C%C3%B3mo-configurar-tu-cuenta-de-vendedor

PcComponentes' official returns template states a minimum **30-calendar-day** withdrawal/return period for Marketplace sellers.

Source: https://marketplacehelp.pccomponentes.com/hc/es-es/articles/36423679388829-Plantilla-de-pol%C3%ADtica-de-devoluciones-para-vendedores

For product compliance, PcComponentes states that sellers of products subject to packaging, WEEE/RAEE, batteries or similar extended-producer-responsibility rules must hold the corresponding producer identifiers and register them in Mirakl where applicable.

Source: https://marketplacehelp.pccomponentes.com/hc/es-es/articles/29371249251229-Econom%C3%ADa-circular-e-identificadores-de-productor

PcComponentes' GPSR guidance states that sellers are responsible for ensuring product safety information is complete, including manufacturer, EU responsible person and applicable safety warnings.

Source: https://marketplacehelp.pccomponentes.com/hc/es-es/articles/23630786324765-GPSR

PcComponentes' current "Vendedor Experto" operational benchmark, updated 4 August 2026, requires all of the following simultaneously: acceptance rate >=99%, late shipments <5%, incident rate <3%, validated tracking >=99%, average response time <2 hours, and NPS >=68% maintained for at least 30 consecutive days. PcComponentes explicitly states that this badge does not directly determine BuyBox position.

Source: https://marketplacehelp.pccomponentes.com/hc/es-es/articles/31916758958749-Vendedor-Experto

PcComponentes also states that the Marketplace seller is responsible for issuing the invoice to the end customer and attaching it to the order, manually or through API integration.

Source: https://marketplacehelp.pccomponentes.com/hc/es-es/articles/20609380526365--Qui%C3%A9n-factura-al-cliente-final

### Inference — not a public entry guarantee

For 001, PcComponentes Marketplace is technically a possible route only if the seller can satisfy Spanish/EU product-safety, EPR/RAEE, returns, invoicing and operational-service obligations. This does **not** prove that PcComponentes will approve the seller or the product, and it does not prove 1P retail procurement eligibility.

### TO VERIFY

- Hair-care / small-domestic-appliance category commission rate.
- Seller-approval criteria before Mirakl activation.
- Whether a non-EU manufacturer can apply directly or must use an EU legal entity/distributor.
- Specific category restrictions for hair dryers.
- BuyBox weighting factors beyond publicly stated seller-quality benchmarks.

---

## 3. MediaMarkt Spain Marketplace

### Public facts

MediaMarkt Spain's official Marketplace registration page currently lists the following participation requirements:

- Registered office and bank account in the EU.
- EU VAT registration.
- Spanish-language telephone customer-service line.
- Direct shipping from within the EU.
- EU returns address.
- EAN / GTIN number.
- Compliance with MediaMarkt content guidelines.

Applicants must provide company/store information, online assortment URL, main catalogue categories and assortment size. MediaMarkt states that it validates the application before contacting the prospective seller.

Source: https://www.mediamarkt.es/es/about-us/marketplace-contact

### Inference — not a public entry guarantee

For a China-origin 001 product, the official requirements indicate that a pure China-direct shipping model would not satisfy the currently published MediaMarkt Spain Marketplace requirements. An EU operational structure is required at minimum for seller domicile/bank/VAT, shipping and returns. This is an inference from the listed requirements, not a statement that any specific EU entity would be accepted.

### TO VERIFY

- Marketplace monthly fee and category commission.
- Category acceptance for hair dryers / personal-care electrical appliances.
- Whether EPR/RAEE producer identifiers are checked during onboarding or catalogue approval.
- Whether seller approval requires prior EU sales history or minimum assortment size.
- Current Marketplace active-seller count specifically for Spain beyond DSA disclosures.

---

## 4. Carrefour Spain Marketplace

### Public facts

Carrefour Spain's official Marketplace seller page states that the platform has **more than 170 million visits per year**, **8 million loyalty households**, and **2 million products**. Carrefour describes the onboarding flow as account creation with its Marketplace team, catalogue upload, seller fulfilment, and seller payment **three times per month**. It also states **no fixed membership fee**.

Source: https://www.carrefour.es/servicios/marketplace-carrefour.e

Carrefour's Marketplace consumer conditions state that Marketplace products are sold by third-party external sellers selected by Carrefour, rather than bought directly from Carrefour. Marketplace sellers set their own shipping carrier, shipping cost and delivery time.

Source: https://www.carrefour.es/condiciones/marketplace.e

Carrefour's DSA disclosure states that, calculated on 1 February 2026 using the preceding six months, Carrefour Marketplace had an average of **4,398,536 monthly active recipients** and **1,160 active sellers**.

Source: https://www.carrefour.es/aviso-legal/mas-info/

Carrefour's current Marketplace returns page states a **60-day** return window from delivery for Marketplace products, subject to the stated conditions.

Source: https://www.carrefour.es/servicios/devoluciones/marketplace.e

### Inference — not a public entry guarantee

Carrefour Marketplace is structurally distinct from Carrefour 1P retail procurement. A product appearing on Carrefour.es does not by itself prove central Carrefour purchasing, store listing or physical-store distribution. This distinction must be preserved when classifying 001-related SKUs found on Carrefour.es.

### TO VERIFY

- Current commission rate for small domestic appliances / personal care.
- Seller legal-entity and EU-stock requirements.
- Catalogue approval requirements for electrical personal-care devices.
- Whether EPR/RAEE identifiers are mandatory fields during seller/product onboarding.
- Conditions, if any, for conversion from Marketplace traction to Carrefour 1P procurement.

---

## 5. Data-governance rule for 001 AI hair dryer research

When a 001-related hair dryer is found on PcComponentes, MediaMarkt or Carrefour, the knowledge base must record the fulfilment/procurement model separately:

- `1P / sold and shipped by retailer`
- `Marketplace / third-party seller`
- `Unknown / TO VERIFY`

Do not infer central procurement, physical-store distribution, buyer approval or retailer inventory from a Marketplace product page alone.

For marketplace-entry claims, official seller/onboarding documentation takes precedence over reseller blogs or marketplace-agency marketing pages.

---

## 6. Leon View

**No Leon View added or modified.**

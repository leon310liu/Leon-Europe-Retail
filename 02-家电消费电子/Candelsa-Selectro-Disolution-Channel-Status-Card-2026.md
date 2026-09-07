# Candelsa / Selectro — Channel Status Card (2026)

> Scope: Spain household-appliance / consumer-electronics channel governance. Public-fact card only. No Leon View added.

## 1. Current status — PUBLIC FACTS

- Electrodomèstics Candelsa, S.A. historically operated as a household-appliance, consumer-electronics and new-technology buying group / central de compras serving retailers. Its own corporate page describes service across 7 autonomous communities and more than 15 provinces, with a logistics model capable of supplying both stores and final consumers. Source: Candelsa corporate page, https://www.candelsa.com/la-empresa/
- Candelsa ceased to belong to Sinersis in May 2025. Alimarket reported that the separation implied loss of the Euronics and Tien21 banners previously used by Candelsa. Source: Alimarket, 22 May 2025, https://www.alimarket.es/electro/noticia/408640/candelsa-sale-de-sinersis-y-entra-en-serias-dificultades
- Sinersis publicly announced on 9 June 2025 the definitive and irrevocable termination of all collaboration contracts with Candelsa, including brand licences, commercial assignments and corporate agreements, alleging serious contractual breaches and financial-information issues. Source: Electromarket, https://www.electromarket.com/noticia/31572/sinersis-rescinde-sus-contratos-con-candelsa-.html
- In January 2026, Candelsa created the Selectro Electrodomèstics identity for its own stores that had previously carried Tien21 and Euronics branding. Source: Alimarket, 9 Jan 2026, https://www.alimarket.es/electro/noticia/419403/selectro-electrodomestics-es-la-nueva-marca-de-candelsa
- By 20 February 2026, Alimarket reported that Candelsa had begun dissolution and noted that the company had already been in liquidation since November. Source: Alimarket, https://www.alimarket.es/electro/noticia/421245/se-inicia-la-disolucion-de-candelsa
- Corporate-status databases based on Spanish Mercantile Registry data also show Electrodomèstics Candelsa, S.A. as dissolved in 2026. Example: Infoempresa reports the status as “Disuelta” and cites its latest BORME filing dated 4 Feb 2026. Source: https://www.infoempresa.com/es-es/es/empresa/electrodomestics-candelsa-sa
- A July 2026 mercantile-data profile likewise shows Candelsa with status “Disolución” and RCD Concursal SLP as insolvency administrator. Source: SpainCompanyAPI profile, updated 8 Jul 2026, https://spaincompanyapi.com/A63813489-electrodomestics-candelsa-sa

## 2. Historical operating footprint — PUBLIC FACTS, NOT CURRENT NETWORK SIZE

- Candelsa’s own corporate page states historical sales volume above EUR 70m and describes a strong logistics platform. These figures should be treated as historical corporate self-description, not current 2026 operating metrics. Source: https://www.candelsa.com/la-empresa/
- In October 2024, industry coverage cited more than 50 owned stores operating under Tien21, Euronics and Miró and expected 2024 retail sales (PVP) of about EUR 105m. Source: Marrón y Blanco, https://www.marronyblanco.com/candelsa-exhibe-todo-su-potencial-en-next-2024/
- Candelsa acquired 100% of Investing Partnership, owner of Miró Electrodomèstics, in January 2025. At announcement time, Miró had 22 physical stores plus ecommerce. Source: Alimarket, 14 Mar 2025, https://www.alimarket.es/electro/noticia_amp/404913/candelsa-adquiere-el-100--de-miro-electrodomestics
- By October 2025, reporting on Miró’s insolvency stated that only 14 stores remained. Source: Crónica Global, https://cronicaglobal.elespanol.com/business/confidente-vip/20250930/electrodomesticos-miro-quiebra-cuarta-barcelona-desplome-candelsa/1003742693221_0.html

## 3. Selectro → Mi Electro evidence — PUBLIC EVIDENCE, PARTIALLY VERIFIED

- Alimarket’s 2026 establishment records for several former Selectro locations (for example Inca, Manacor, Berga and Vía Júlia) show a linked news item titled “Selectro es Mi Electro” and, in some cases, state that a newer version of the establishment record exists. Examples:
  - Inca: https://www.alimarket.es/electro/establecimiento/543172-2026-2587648/SELECTRO---INCA
  - Manacor: https://www.alimarket.es/electro/establecimiento/350772-2026-2587650/SELECTRO---MANACOR
  - Berga: https://www.alimarket.es/electro/establecimiento/508605-2026-2593906/selectro---berga
  - Vía Júlia: https://www.alimarket.es/electro/establecimiento/1028442-2026-2587658/SELECTRO---JULIA
- Alimarket also has current Mi Electro establishment records linked to the same “Selectro es Mi Electro” news item, including Santa Eulalia. Example: https://www.alimarket.es/electro/establecimiento/1028446-2026-2597702/mi-electro---santa-eulalia

### Governance note

The public evidence strongly indicates that part of the former Selectro store estate transitioned to Mi Electro during 2026. However, the full Alimarket article text was not available in the public search result used for this card. Therefore the following fields remain `TO VERIFY`:

- exact number of former Selectro stores transferred to Mi Electro;
- whether the transaction was an asset purchase, store-by-store affiliation, lease transfer, franchise conversion or another mechanism;
- whether Eldisser acquired any Candelsa legal entity, logistics assets or merely absorbed/re-affiliated retail outlets;
- effective date and territory coverage of the conversion;
- whether every Selectro store converted to Mi Electro.

Do **not** write “Mi Electro acquired Candelsa” unless a primary or fully accessible professional source confirms that exact legal transaction.

## 4. Knowledge-base correction / expiry flags

The following statements should be considered stale if they appear elsewhere in the knowledge base without a historical qualifier:

- `Candelsa is a current Sinersis platform` → **OUTDATED**. Candelsa left / was terminated from Sinersis in 2025.
- `Candelsa currently operates Tien21 and Euronics stores` → **OUTDATED** as a Candelsa relationship after the 2025 separation.
- `Selectro is a stable current Candelsa growth banner` → **OUTDATED / TRANSITIONAL**. Selectro was launched in January 2026, but Candelsa entered dissolution in February 2026 and multiple Selectro records later show Mi Electro succession signals.
- Historical Candelsa store counts, sales and warehouse metrics must not be used as 2026 current network metrics.

## 5. Channel-model implication — FACT MODEL, NOT LEON VIEW

For data modelling, Candelsa should no longer be represented as an active peer node alongside Sinersis, Eldisser, Segesa, etc. without a status qualifier. Suggested lifecycle fields:

- `channel_status = dissolved / liquidation process (2026 public evidence)`
- `sinersis_membership = terminated in 2025`
- `legacy_banners = Tien21 / Euronics / Miró`
- `transition_banner = Selectro (Jan 2026)`
- `successor_store_signals = Mi Electro for multiple former Selectro locations; exact scope TO VERIFY`

## 6. Relevance to 001 AI hair dryer

This card is primarily a **channel-governance correction**, not a confirmed 001 listing route. Because Candelsa is no longer a normal active buying-group prospect, any 001 outreach logic that still treats Candelsa as an active national/regional buying platform should be deprecated until a successor structure is confirmed.

Potential successor relevance:

- former Candelsa / Selectro stores that converted to Mi Electro should be evaluated through the current Eldisser / Mi Electro channel structure rather than through Candelsa;
- exact buyer migration, purchasing authority, SKU transfer and store-level assortment rights remain `TO VERIFY`.

## 7. Source quality

Priority sources used:

1. Candelsa corporate website — historical corporate facts and operating model.
2. Alimarket — specialist electro-distribution reporting and store database.
3. Electromarket — specialist industry media, including Sinersis termination notice.
4. Mercantile-data aggregators citing BORME / registry status — used only to corroborate dissolution status.

## 8. Leon View

**No Leon View added.**
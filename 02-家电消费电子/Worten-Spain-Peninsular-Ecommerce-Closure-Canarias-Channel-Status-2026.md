# Worten Spain — 半岛电商关闭 / Canarias保留运营 Channel Status Card（2026）

> 类型：家电消费电子渠道状态 / 数据治理 / 001 AI吹风机相关
> 更新时间：2026-09-04
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增Leon View。

## 1. 核心公开事实

### 1.1 西班牙半岛电商已停止运营

OCU于2026-07-03披露，Worten已确认其**西班牙半岛电商网站于2026-07-31停止运营**。OCU称Worten将资源集中于其认为的战略区域，包括Canarias和Portugal。

来源：
- https://www.ocu.org/consumo-familia/compras-online/noticias/cierre-web-worten

Alimarket于2026-07-02报道相同变化，并明确写明Worten结束其西班牙半岛电商阶段，同时继续在**Islas Canarias**开展零售业务和线上业务。

来源：
- https://www.alimarket.es/electro/noticia_amp/428645/worten-culmina-su-etapa-en-la-espana-peninsular-con-el-cierre-de-su-ecommerce

### 1.2 Canarias仍是当前有效Worten实体/线上区域

Alimarket在上述2026年报道中给出的口径为：Worten在其保留的零售业务中拥有**24家门店**，并继续在Canarias开展线上业务。

Alimarket 2026门店资料仍能验证Canarias地区的Worten实体网点，例如：
- Mogán / Arguineguín（Gran Canaria）
- San Cristóbal de La Laguna（Tenerife）
- Telde / Jinámar（Gran Canaria）

来源：
- https://www.alimarket.es/electro/establecimiento/1107368-2026-2503661/WORTEN
- https://www.alimarket.es/electro/establecimiento/1054492-2026-2502726/worten
- https://www.alimarket.es/electro/establecimiento/1057073-2026-2502750/WORTEN

注意：24家为Alimarket在2026-07报道中的网络口径，本文件不自行把它解释为“全部为同一类型门店”或“全部位于同一岛屿”。

## 2. 搜索引擎残留页 ≠ 当前半岛可销售

截至2026-09，公开搜索仍可以抓取多个worten.es历史商品页，包括：
- Aigostar家电由Aigotech销售的Marketplace页面；
- 多个110,000 rpm吹风机或高速风机类商品页；
- 页面仍可能显示价格、Seller、评价和“Comprar ya”等历史界面元素。

但由于Worten已明确于2026-07-31停止西班牙半岛电商运营，这些被搜索引擎缓存/抓取的页面**不能被当作当前西班牙半岛有效渠道证据**。

历史页面示例：
- https://www.worten.es/productos/freidora-de-aire-aigostar-cube-7l-1900w-mrkean-8719138812295
- https://www.worten.es/productos/secador-de-pelo-jet-dry-110000-rpm-ajuste-infinito-turbo-usb-c-mrkean-8777939233091

## 3. 001 AI吹风机相关意义

### 公开事实

Worten历史Marketplace中确实出现过110k rpm相关吹风机/高速风机商品，且存在多个第三方Seller；但2026-09对001进行西班牙渠道映射时，**Worten Spain必须拆成至少两个地理状态**：

- `Spain Peninsular ecommerce = CLOSED from 2026-07-31`
- `Canarias retail + online = ACTIVE according to 2026 industry reporting`

因此不能再使用单一字段 `Worten Spain = active`。

### 分析推断（非公开事实）

对001这样的消费级电子产品，Worten的当前意义已经从“全国西班牙电商/Marketplace入口”转变为“Canarias区域性家电消费电子渠道节点”。

这意味着任何后续进入判断都必须先回答：
- 目标地理是Península还是Canarias？
- 对接的是Worten Canarias实体/线上体系，还是搜索引擎残留的原半岛商品页？

该段为渠道结构分析，不是Leon View。

## 4. 数据治理规则

新增以下统一字段：

`Retailer → Geography → Business Model → Channel Status → Effective Date → Evidence Date`

建议Worten记录为：

| Retailer | Geography | Model | Status | Effective date |
|---|---|---|---|---|
| Worten | Spain Peninsular | Ecommerce / Marketplace | CLOSED | 2026-07-31 |
| Worten | Canarias | Physical retail | ACTIVE (2026 public evidence) | current evidence 2026 |
| Worten | Canarias | Online | ACTIVE (2026 public evidence) | current evidence 2026 |
| Worten | Portugal | Outside Spain scope | not evaluated here | — |

禁止：
- 因搜索结果仍可打开旧worten.es商品页，就写成当前半岛可销售；
- 将历史Seller页面当作当前Seller onboarding证据；
- 将Canarias业务状态自动外推到西班牙半岛；
- 将Worten历史Marketplace中的SKU存在写成Worten 1P采购。

## 5. 待验证（TO VERIFY）

仍需进一步公开验证：
- 2026-09 Worten Canarias实际门店数是否仍为24家；
- Canarias线上体系当前具体域名、Marketplace是否继续接受第三方Seller；
- 原半岛Marketplace Seller是否可迁移至Canarias；
- Canarias个人护理/高速吹风机当前实际在售品牌与SKU；
- 采购主体、Buyer、MOQ、账期、listing fee及区域仓储结构。

## 6. Leon View

本文件没有新增、修改或推断任何Leon View。

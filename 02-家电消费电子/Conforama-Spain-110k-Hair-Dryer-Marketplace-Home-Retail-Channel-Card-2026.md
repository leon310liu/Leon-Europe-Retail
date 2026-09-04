# Conforama Spain × 110k高速吹风机 × Marketplace / 家居家电零售 Channel Card（2026）

> 类型：公开事实渠道卡 / 001 AI吹风机
> 更新时间：2026-09-04
> 规则：公开事实、分析推断、Leon View严格分离；本文件不新增Leon View。

## 1. 渠道定位

Conforama España 的公开官方资料将自身定位为家居设备零售商，核心品类包括家具、家电、厨房和装饰；其西班牙官网同时运营 Marketplace，用第三方专业卖家扩充数字目录。

官方 Marketplace 页面明确说明：
- Marketplace 商品以 `Vendido y expedido por X` 标识第三方卖家；
- 第三方专业卖家负责提供扩展品类；
- 顾客可以把 Conforama 自营与不同 Marketplace 卖家的商品放在同一购物流程中支付；
- 因此，“Conforama.es 有售”不能直接等同于“Conforama 中央采购”。

来源：
- https://www.conforama.es/marketplace
- https://www.conforama.es/vendedor/5564

## 2. 001直接相关：110k高速吹风机已经进入Conforama.es

### A. Cecotec DryNova 3in1 Mint

Conforama 当前公开页面：
- 产品：Cecotec DryNova 3in1 Mint
- 1600W
- 110,000 rpm
- Brushless无刷电机
- 3个可更换头
- 页面明确标注：`Vendido y expedido por: EUROSTOCK HUB ES`
- 商品代码：MKP1641296

因此这是明确的 **3P Marketplace** 证据，不是 Conforama 1P 中央采购证据。

来源：
- https://www.conforama.es/cecotec-secador-de-pelo-compacto-y-ligero-drynova-3in1

### B. Cecotec IoniCare RockStar Nano IonTech / DryGlam系列

Conforama 当前还公开列出多款110k级高速产品，包括：
- IoniCare RockStar Nano IonTech：110,000 rpm / 1600W / Brushless / 智能温控；
- DryGlam Nano Plasma：110,000 rpm / 1600W / Brushless / plasma正负离子；
- DryGlam Waves：110,000 rpm / 1600W / Brushless / 智能温控 / 多功能附件。

部分页面同时出现多个报价（如“3 Ofertas”“4 Ofertas”），进一步说明同一SKU可能对应多个销售主体，不能仅依据产品页存在判断1P采购关系。

来源：
- https://www.conforama.es/cecotec-secadores-de-pelo-bldc-ionicare-rockstar-nano-iontech-alu
- https://www.conforama.es/cecotec-secador-de-pelo-brushless-de-ultima-generacion-dryglam-na
- https://www.conforama.es/secador-de-pelo-dry-glam-waves-champ-103715

### C. Dreame Hair Glory Mix

Conforama 当前公开列出 Dreame Glory Mix：
- 1600W
- 110,000 rpm
- ionic
- 过热保护

该页面用于确认：中国科技型个护品牌的110k产品也已进入Conforama数字商品池。

来源：
- https://www.conforama.es/secador-de-pelo-glory-mix-negro

## 3. 实体网络与规模治理

Conforama当前官方店铺页列出西班牙多个实体节点，覆盖 Madrid、Barcelona、Valencia、Andalucía、Galicia、Navarra、País Vasco 等区域。

Conforama 2026 招聘页面给出的企业口径为：**Iberian Peninsula and islands 共57家门店、2500+员工**。该数字是伊比利亚半岛及岛屿综合口径，不能直接写成“西班牙57家”。

官网店铺列表可用于核验西班牙实际门店节点，但在未完成逐店计数前，不在本卡自行生成“西班牙门店总数”。

来源：
- https://www.conforama.es/tiendas
- https://jobs.conforama.es/jobs/vendedor-a-20h-e9a0827a-77f9-4b40-a690-819c66578bdd

## 4. 进入结构：已确认 vs 待验证

### VERIFIED PUBLIC FACTS

可以确认：
1. Conforama Spain 运营第三方 Marketplace；
2. Marketplace 商品通过 `Vendido y expedido por X` 标识实际卖家；
3. 110k高速吹风机已经进入其线上数字商品池；
4. 当前存在 Cecotec、Dreame 等110k产品；
5. 至少 Cecotec DryNova 3in1 可明确确认由第三方卖家 EUROSTOCK HUB ES 销售发货；
6. Conforama同时拥有西班牙实体零售网络和家电品类基础。

### TO VERIFY

当前公开资料不足以确认：
- 001能否直接申请成为Conforama Spain Marketplace Seller；
- Seller入驻审核主体、佣金率、月费、保证金、SLA；
- 110k吹风机品类的1P Buyer；
- MOQ、listing fee、账期、返利、年度采购窗口；
- Marketplace热销SKU是否存在向Conforama 1P或实体店转化机制；
- 上述具体110k SKU是否进入Conforama实体门店库存；
- 中国主体能否不经过欧盟本地主体直接供货；
- EUROSTOCK HUB ES与Cecotec之间的授权/采购关系。

不得自行补全。

## 5. 数据治理规则

Conforama后续产品记录必须至少增加以下字段：

```text
retailer = Conforama Spain
channel = 1P / Marketplace 3P
seller_name = actual seller shown on page
fulfilled_by = actual fulfiller shown on page
online_only = yes/no/to verify
physical_store_evidence = verified/to verify
verification_date = YYYY-MM-DD
```

核心规则：

`Conforama.es product listing ≠ Conforama central purchasing evidence`

只有明确显示由Conforama自身销售，或有官方采购/实体铺货证据时，才可以升级为1P/实体渠道事实。

## 6. 分析推断（非公开事实）

Conforama提供了一个与Carrefour、Fnac、PcComponentes不同但互补的进入场景：以“家居+家电”零售心智承接个人护理小家电，同时用Marketplace扩展SKU。对于001而言，这意味着高速吹风机可以被测试在不以美妆为核心、但有成熟家电消费场景的综合家居零售流量中。

该段属于分析推断，不是公开准入规则，也不是Leon View。

## 7. Leon View

本轮不新增、不修改任何 Leon View。

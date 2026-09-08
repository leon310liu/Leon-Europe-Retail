# Klerr Cosmetics × GA.MA iQ Lite Max × 专业美容美发零售/批发 × 参数冲突治理 Channel Card（2026）

> 状态：公开事实卡（Public Facts）+ 数据治理卡
> 更新时间：2026-09-08
> 适用项目：西班牙出海智能体－消费级电子类产品 / 001 AI吹风机
> 规则：公开事实、分析推断、Leon View严格分开；本文件不新增或自行编写Leon View。

## 1. 渠道实体

- **Klerr Cosmetics S.L.**，注册地址/门店位于 Aguilar de la Frontera（Córdoba），Polígono Industrial de la Soledad, Parcela 24。
- Klerr官网当前经营专业美容、美发相关产品，并公开销售专业电器品类。
- 工商公开资料显示，Klerr Cosmetics S.L. 的经营范围包含美容、美发、香水/化妆品相关产品的**批发与零售**。
- Cinco Días / Iberinform公开企业目录当前将其活动分类为 **CNAE 4645：Comercio al por mayor de productos de perfumería y cosmética**；但其他商业数据库仍出现CNAE 4775零售口径，因此企业活动分类存在公开口径差异，不应把单一数据库CNAE当作唯一现状。

来源：
- Klerr官方联系方式：https://www.klerrcosmetics.es/contactenos
- Klerr官方产品页：https://www.klerrcosmetics.es/electricos/39977-secador-gama-iq-lite-max-negro.html
- Cinco Días企业目录：https://cincodias.elpais.com/directorio-empresas/empresa/7374810/klerr-cosmetics
- Empresite / El Economista：https://empresite.eleconomista.es/KLERR-COSMETICS.html

## 2. 与001直接相关SKU：GA.MA iQ Lite Max

Klerr Cosmetics当前公开销售 **GA.MA iQ Lite Max Negro**，页面显示：

- 1500W
- Brushless无刷电机
- Klerr页面标称：**110,000 rpm**
- 316g
- Oxy-Active
- Turbo Venturi
- 2档速度 / 3档温度
- 冷风
- 双过滤系统
- 2个专业风嘴 + 扩散器
- 页面价格快照：€199.65（2026-09-08抓取快照，仅作当日公开页面事实）

来源：
- https://www.klerrcosmetics.es/electricos/39977-secador-gama-iq-lite-max-negro.html

## 3. 关键参数冲突：Klerr 110k vs GA.MA官方 85k

本轮发现一个对001知识库非常重要的**公开参数冲突**：

### Klerr Cosmetics页面
- 产品名：GA.MA iQ Lite Max
- 标称转速：**110,000 rpm**

### GA.MA官方页面
GA.MA Italy官方当前多个 iQ Lite Max 页面均写明：
- Brushless电机
- 32mm
- **85,000 rpm**
- 1500–1700W（不同市场/电压页面存在功率表述差异）

官方来源：
- https://www.gamaitaly.com.br/secador-iq-lite-max-black-bechd0000003040_pai/p
- https://www.gamaitaly.com.br/secador-iq-lite-max-pro-blue-bechd0000003113_pai/p
- https://www.gamaitaly.com.br/secador-iq-lite-max-pro-red-bechd0000003051_pai/p

因此知识库不得把Klerr页面的“110,000 rpm”直接升级为该型号的已验证工程参数。

统一数据治理标签建议：

`GA.MA iQ Lite Max — retailer-published 110k rpm; manufacturer official pages publish 85k rpm; exact Spain SKU engineering spec TO VERIFY`

在没有GA.MA西班牙/欧盟该确切SKU的官方技术资料进一步确认前，该产品**不应计入001“已确认110k产品”核心竞品集合**。

## 4. 渠道意义（公开事实）

Klerr案例可以确认：

- 西班牙专业美容/美发产品渠道中存在经营专业电器的本地化零售/批发节点；
- GA.MA等专业美发电器品牌通过这类专业美容渠道面向市场销售；
- Klerr自身经营范围公开包含批发与零售，区别于只做终端D2C的单一零售网站。

但目前公开资料不能确认：

- Klerr是否为GA.MA官方授权分销商；
- Klerr是否直接向GA.MA或其西班牙总代采购；
- 其批发客户规模、Salon/Barber覆盖数量；
- 是否向其他零售商进行二级分销；
- 具体Buyer、MOQ、首单、账期、返利、区域保护或新品牌listing规则。

以上全部 **TO VERIFY**。

## 5. 对001的意义（分析推断，不是Leon View）

Klerr样本本身更大的价值不是“又增加一个110k竞品”，而是提醒001知识库：

**专业渠道零售商页面的技术参数不能自动等同于制造商工程参数。**

尤其110k RPM已经成为高速吹风机常见营销标签后，渠道页面可能存在复制错误、跨型号误植或旧版规格残留。因此后续竞品事实库应优先采用以下证据层级：

1. 制造商官方技术页 / manual / datasheet；
2. 官方分销商技术资料；
3. 一级零售商商品页；
4. Marketplace第三方卖家页面。

若不同层级冲突，应保留冲突并标记 `TO VERIFY`，不得自行选择更“符合市场趋势”的数字。

这是基于本轮公开资料形成的**数据治理推断**，不是Leon View。

## 6. 数据治理 / 待验证

### 已确认公开事实
- Klerr Cosmetics S.L. 位于Córdoba省 Aguilar de la Frontera。
- Klerr当前公开销售GA.MA iQ Lite Max专业吹风机。
- Klerr商品页写110,000 rpm。
- GA.MA官方多个iQ Lite Max页面写85,000 rpm。
- Klerr企业经营范围公开包含美容/美发相关商品的批发与零售。

### SOURCE CONFLICT
- iQ Lite Max转速：Klerr = 110k rpm；GA.MA官方 = 85k rpm。
- 企业活动CNAE：部分公开企业目录显示4645批发，另有数据库显示4775零售；以企业实际经营范围“批发+零售”记录，不从单一CNAE推导商业模式。

### TO VERIFY
- 西班牙市场对应iQ Lite Max具体SKU/GTIN及官方技术参数。
- Klerr页面110k是否误植、旧版规格或地区版本差异。
- Klerr与GA.MA之间的授权/采购关系。
- Klerr真实B2B客户规模与渠道覆盖。
- Buyer / Category Manager。
- 新品牌listing流程、MOQ、样机要求、账期、返利。
- Importer of Record、GPSR、WEEE/EPR责任主体。

## 7. 来源等级

### 一级/官方来源
- Klerr Cosmetics联系方式：https://www.klerrcosmetics.es/contactenos
- Klerr GA.MA iQ Lite Max商品页：https://www.klerrcosmetics.es/electricos/39977-secador-gama-iq-lite-max-negro.html
- GA.MA Italy官方 iQ Lite Max Black：https://www.gamaitaly.com.br/secador-iq-lite-max-black-bechd0000003040_pai/p
- GA.MA Italy官方 iQ Lite Max Pro Blue：https://www.gamaitaly.com.br/secador-iq-lite-max-pro-blue-bechd0000003113_pai/p
- GA.MA Italy官方 iQ Lite Max Pro Red：https://www.gamaitaly.com.br/secador-iq-lite-max-pro-red-bechd0000003051_pai/p

### 二级/企业信息来源
- Cinco Días企业目录：https://cincodias.elpais.com/directorio-empresas/empresa/7374810/klerr-cosmetics
- Empresite / El Economista：https://empresite.eleconomista.es/KLERR-COSMETICS.html

## 8. Leon View

**无新增。**

本卡仅新增公开事实、来源冲突及明确标记的分析推断，不自行生成、补写或修改Leon View。

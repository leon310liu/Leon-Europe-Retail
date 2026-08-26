# Spain Beauty Retail Ecosystem Baseline 2026

> 类型：公开事实基线 + AI结构分析
> Leon View：空（本文件不生成 Leon View）
> 更新时间：2026-08-26

## 一、公开事实

### 1. 西班牙美容/香水零售网络规模
Alimarket 于 2026-06-16 发布的《Distribución de Perfumería y Cosmética 2026》显示：
- 2025 年末，其西班牙香水、美妆与相关零售样本库共计 4,858 家门店；
- 相比前一年仅净增加 6 家，说明总门店数已进入相对成熟阶段；
- 2026 年行业继续强调大店化、体验化与线上线下一体化。

来源：Alimarket, 2026-06-16
https://www.alimarket.es/nonfood/informe/427137/distribucion-de-perfumeria-y-cosmetica-2026--el-sector-se-reinventa

### 2. Multimarca 美容零售的头部格局发生变化
Alimarket 2026 Multimarca 报告明确指出：
- Druni（包含 Druni / Arenal 联合零售体系）已成为按商业面积计算的市场新领导者；
- Clarel 仍按门店数量居前；
- Primor 仍保持较高单位商业面积产出表现；
- 该渠道继续通过更大面积、体验化门店与线上渠道竞争。

来源：Alimarket, 2026-06-16
https://www.alimarket.es/nonfood/informe/427125/informe-2026-sobre-distribucion-multimarca

### 3. 专业美发是独立增长渠道，而非普通美容零售附属
STANPA 行业资料持续把以下渠道分开统计：
- Selectivo / 专业美妆零售
- Gran Consumo / 大众零售
- Peluquería Profesional / 专业美发
- Estética Profesional / 专业美容
- Online

STANPA 2024 行业结构资料显示，专业美发渠道增长 8.54%，说明其商业体系和消费逻辑应与大众美容零售分开建模。

来源：STANPA《Radiografía de la Industria Cosmética y del Perfume en España 2024》
https://radiografia.stanpa.com/wp-content/uploads/2025/10/Radiografia-del-sector-2024.pdf

### 4. Perfect Beauty 继续体现“专业渠道 + Private Label”复合模式
STANPA 2026 出口商目录对 Perfect Beauty S.L. 的公开描述显示：
- 30+ 年专业美容行业经验；
- 覆盖 20+ 国家专业 salon；
- 2026 年公开口径为 900+ 新品、4,500 个参考号；
- Commercial Channels 同时包含 Professional Hairdresser、Beauty Salon & Spa、Private Label。

来源：STANPA《Catálogo de Exportadores 2026》
https://www.stanpa.com/assets/catalogo-exportadores-2026.pdf

## 二、数据边界

- 4,858 家是 Alimarket 对“Perfumería y Cosmética”零售样本库的行业口径，不等于所有可销售吹风机的门店总数。
- Druni、Clarel、Primor 的“领导地位”分别可能基于商业面积、门店数量或面积产出，不得混为一个统一排名。
- STANPA 的专业美发增长数据是美容行业渠道数据，不可直接推导为吹风机销售增长。
- Perfect Beauty 的 900+ 新品和 4,500 references 属于企业/行业目录公开口径，不等同审计库存数。

## 三、AI 结构分析（非 Leon View）

对 001 AI吹风机而言，美容/专业渠道至少应拆成 4 个不同角色：

1. **Multimarca Beauty Retail**
   - Druni / Arenal
   - Primor
   - 其他专业美容零售

2. **Professional Hair Distributor**
   - Dismay
   - Fama Fabré
   - Perfect Beauty
   - Belexpress / Bastos Medical
   - Sunmarket 等

3. **Professional Salon / Barber End Channel**
   - peluquería
   - barbería
   - beauty salon / spa

4. **Private Label / OEM / Brand-Operating Partner**
   - Perfect Beauty
   - Novabel / Irene Ríos
   - Postquam 等

因此，知识库不能把“美容渠道”简化为 Primor / Druni 两家零售商；应继续维护“零售 → 专业分销 → salon终端 → Private Label/OEM”的多层结构。

## 四、001 AI吹风机后续待验证

- Druni / Arenal 合并后 Hair Tools 采购是否统一；
- Primor 的 Hair Tools 买手归属与新品准入机制；
- 大型 beauty retail 是否接受区域/线上先测试再线下铺货；
- 专业分销商与美容零售商之间的真实供货关系；
- 新品牌的 MOQ、账期、售后/SAT、培训、独家要求；
- Private Label / OEM 合作是否与品牌代理存在冲突。

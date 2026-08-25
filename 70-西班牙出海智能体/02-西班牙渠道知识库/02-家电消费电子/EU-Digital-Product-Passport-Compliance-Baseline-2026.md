# EU Digital Product Passport Compliance Baseline 2026

> 范围：欧盟 / 西班牙消费级电子产品未来合规与渠道准备层
> 更新时间：2026-08-25
> 类型：公开事实基线 + AI Analysis
> Leon View：无（未生成）

## 1. 公开事实

### 1.1 DPP Registry 已经正式上线

欧盟委员会于 2026-07-20 正式上线 Digital Product Passport（DPP）Registry，并同时提供测试环境。

DPP Registry 是欧盟 DPP 系统的中央索引层。经济运营商需要在适用的产品法规要求下，将产品的唯一标识符及相关注册元数据登记到 Registry。完整产品数据本身仍以分布式方式存储，而不是全部上传到欧盟中央数据库。

2026-07-16，欧盟委员会通过 Implementing Regulation (EU) 2026/1778，正式规定 DPP Registry 的实施安排，包括访问管理、用户核验、注册、数据存储和技术架构等要求。

### 1.2 DPP 并非目前对所有消费电子产品普遍强制

欧盟委员会明确说明，DPP 采用按产品类别逐步实施的方式。只有当具体产品受到相关 delegated act 或其他欧盟专项法规约束时，DPP 才成为法律义务。

因此：

- “DPP Registry 已上线” ≠ “所有消费电子立即必须提供 DPP”；
- “某个产品属于 ESPR 工作计划” ≠ “该产品已经强制 DPP”；
- 必须按具体产品类别及后续正式法规核验最终义务和生效日期。

当前最早明确的强制应用之一，是从 2027-02-18 起对部分电池（包括电动车、电动轻型交通工具和工业电池）实施 DPP。

### 1.3 ESPR 2025–2030 工作计划与消费电子

欧盟 ESPR / Energy Labelling Working Plan 2025–2030 已将若干能源相关产品列入后续规则制定计划，例如 displays、mobile phones and tablets 等。

但欧盟委员会 FAQ 同时明确：进入工作计划只是进入研究和法规评估流程，并不自动代表产品已经强制使用 DPP。

目前没有找到可证明普通家用吹风机已经被欧盟单独纳入 DPP 强制实施时间表的官方文件。

## 2. 对 001 AI吹风机的当前状态

### 已确认

- DPP 基础设施在欧盟已经进入实际运行阶段；
- 未来更多产品类别会按专项法规逐步纳入；
- 进口到欧盟的产品与欧盟本地生产产品，在进入适用 DPP 法规范围后均需要遵守相关义务；
- 对线上远程销售，适用 DPP 义务时，Marketplace 也需要向消费者提供 DPP 的可访问方式。

### 尚未确认 / 不得写成事实

截至 2026-08-25：

- 不能说“AI吹风机已经强制需要 DPP”；
- 不能说“2027年起所有吹风机都需要 DPP”；
- 不能把 DPP 与 CE、RoHS、REACH、RII-AEE、RAEE/EPR 等现行独立合规义务混为一项。

## 3. AI Analysis（非 Leon View）

对消费级电子进入西班牙，DPP 目前更适合作为 **Future Compliance Readiness Layer** 管理，而不是 001 AI吹风机当前的硬性 Channel Readiness Gate。

建议在智能体未来的合规检查中新增字段：

- Product category 是否已有适用 DPP 法规；
- DPP delegated act / sector legislation 是否已发布；
- 生效日期及过渡期；
- 负责创建 DPP 的 economic operator；
- product identifier / operator identifier；
- data carrier 形式；
- 数据托管与备份责任；
- Marketplace / retailer 展示义务；
- 与进口商、授权代表、RII-AEE、EPR/RAEE责任主体之间的职责边界。

这样可以避免两种错误：

1. 把未来法规误写成当前硬门槛；
2. 等到产品类别正式纳入 DPP 后才临时补数据体系，导致供应链、技术文档和渠道上架返工。

## 4. 与西班牙渠道知识库的关系

当未来某消费电子品类正式进入 DPP 强制范围后，下列 Channel Card 应增加 DPP readiness 字段：

- 大型综合零售；
- 家电消费电子零售；
- Buying Group；
- Importer / Distributor；
- Marketplace；
- DTC。

尤其需要区分：

- 谁是负责 DPP 的 economic operator；
- 谁负责产品注册与数据维护；
- 渠道是否仅验证 DPP，还是承担展示 / 提供访问责任；
- Marketplace 是否只提供入口，还是因具体法规承担额外核验义务。

## 5. 数据治理规则

DPP 相关信息必须按“产品类别 + 法规名称 + 发布时间 + 强制日期”保存。

禁止使用以下模糊表达：

- “欧盟产品以后都要有DPP”；
- “DPP已经全面强制”；
- “消费电子2027年全部需要DPP”。

除非已有对应产品类别的正式法规和生效日期。

## 6. 来源

1. European Commission — The Digital Product Passport Registry is now live, 20 July 2026
   https://single-market-economy.ec.europa.eu/news/digital-product-passport-registry-now-live-2026-07-20_en

2. European Commission — Digital Product Passport / DPP Registry
   https://single-market-economy.ec.europa.eu/single-market/digital-product-passport_en
   https://single-market-economy.ec.europa.eu/single-market/digital-product-passport/dpp-registry_en

3. Commission Implementing Regulation (EU) 2026/1778 of 16 July 2026
   https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32026R1778

4. European Commission — DPP FAQ
   https://single-market-economy.ec.europa.eu/single-market/digital-product-passport/explore-our-faqs_en

5. COM(2025) 187 final — Ecodesign for Sustainable Products and Energy Labelling Working Plan 2025–2030
   https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52025DC0187

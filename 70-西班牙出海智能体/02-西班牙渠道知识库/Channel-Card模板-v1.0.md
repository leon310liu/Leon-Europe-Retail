# ECR Channel Intelligence Card Template v1.0

> 历史冻结版。当前正式模板见 [Channel Card Template v2.0](./Channel-Card模板-v2.0.md)。保留本文件用于旧卡兼容与版本追溯。

## 定位
Channel Card 是西班牙出海智能体的标准渠道分析单元。

设计原则：
- 渠道分类使用外贸人员熟悉的品类逻辑。
- AI内部增加Vertical和Business Model标签进行匹配。
- Leon View作为核心商业洞察字段保留。

---

# 01 渠道身份（Channel Identity）

## 渠道名称
Company / Group Name

## 所属渠道分类（Channel Taxonomy）
固定来自8大渠道分类：

01 大型综合零售
02 家电消费电子
03 家居建材DIY
04 华人百货渠道
05 本土批发采购集团
06 折扣非食品百货
07 电商Marketplace
08 垂直专业渠道

## 二级渠道定位
例如：
- 家电联盟
- Central de Compras采购集团
- 华人批发供应链
- 专业美容渠道

---

# 02 Vertical标签

最多3个，用于产品匹配。

示例：
家电 / 智能硬件 / 消费电子

---

# 03 Business Model商业模型标签

用于AI判断渠道进入方式。

## BM01 总部集中采购型
总部拥有主要采购权。

## BM02 联盟自治型
总部制定规则，区域成员自治。
代表：Sinersis。

## BM03 Central de Compras采购中心型
采购集团连接独立零售商。
代表：Coferdroza、BigMat。

## BM04 批发供应链型
仓储、库存、分销网络驱动。
代表：KMT。

## BM05 独立老板驱动零售型
门店老板决定采购。
代表：百元店。

## BM06 加盟连锁型
总部与加盟商共同运营。

## BM07 平台流量型
Marketplace模式。

## BM08 专业项目型
工程、工业、医疗等专业场景。

## BM09 买手选品型
折扣、新品、高频选品模式。

## BM10 内容/社群驱动型
内容、电商、社群销售模式。

---

# 04 渠道生态定位（Channel Ecosystem）

描述渠道在供应链中的角色。

格式：
品牌厂家 → 渠道角色 → 终端客户

---

# 05 商业模式分析（Business Model Detail）

回答：
- 如何赚钱？
- 收入来源？
- 供应链角色？

---

# 06 决策机制（Decision Making）

回答：
真正决定采购的是谁？

可能：
- 总部采购
- 区域成员
- 老板本人
- 买手
- 项目负责人

---

# 07 中国企业最大的误区（China Company Misunderstanding）

回答：中国企业进入该渠道最容易犯什么错误。

---

# 08 正确进入路径（Entry Strategy）

包括：
- 第一步找谁
- 如何建立合作
- 如何扩大规模

---

# 09 合作门槛（Entry Barrier）

包括：
- 产品要求
- 企业要求
- 认证
- 资金
- 本地服务能力

---

# 10 渠道价值判断（Channel Value）

评价：
- 进入价值
- 难度
- 适合企业类型

---

# 11 Leon View（核心资产）

包含：
- Leon观察
- 隐藏规则
- 战略建议

原则：
Leon View不可由AI自动生成，只能由Leon输入，AI负责整理。

---

# 12 AI调用标签（AI Retrieval Tags）

包含：
- 渠道分类
- Vertical
- Business Model
- 关键词
- 适合产品

---

# 13 Member Database

适用于：
- 区域成员
- 会员企业
- 门店网络

字段：
公司 / 区域 / 负责人 / 联系方式 / 备注

---

# 14 Private Layer（Leon内部）

用于：
- 客户资源
- 关系网络
- 历史合作
- 销售数据

禁止进入公开智能体调用层。

# Leon 内容生产 Skill 体系 V1.1

状态：正式启用

本文件记录 Leon 内容生产从仓库旧规则文件升级为 Codex Skill 的最终结构。

## 01 最终 6 个 Skill

```text
01 leon-identity-v1-0
02 leon-topic-strategy-v1
03 leon-video-script-v1
04 leon-cover-design-v1
05 leon-wechat-article-v1
06 leon-content-review-v1
```

## 02 职责边界

### leon-identity-v1-0

Leon 根身份规则。定义公开定位、身份边界、品牌表达、长期使命和输出质量门槛。

公开主定位：

`Leon｜后Action时代实战家`

公开使命：

`研究欧洲华人零售如何活下来，研究中国消费品牌如何走进来。`

### leon-topic-strategy-v1

选题与策划 Skill。

负责把原始想法、新闻、案例、聊天灵感、行业观察、个人经历、商业现象和用户问题转化成值得 Leon 讲的 Content Brief。

不直接写最终口播稿。

### leon-video-script-v1

口播文案 Skill。

负责视频标题、视频逻辑、正式口播稿、一句一行提词器、视频描述、标签、评论钩子和完整发布包。

### leon-cover-design-v1

封面视觉 Skill。

负责封面 A/B/C、动态封面、片尾图、封面标题层级、Leon视觉一致性、色彩、字体、排版和 AI 图片提示词。

### leon-wechat-article-v1

公众号长文 Skill。

负责公众号深度文章、视频配套文章、朋友圈长文、观点卡、图片插入建议、CTA和知识库沉淀。

### leon-content-review-v1

内容审查与复盘 Skill。

负责发布前审查和发布后复盘，吸收旧 `leon-video-review-v1`。

## 03 规则优先级

当规则冲突时，优先级从高到低：

1. 用户本次明确指令
2. 当前系列 SERIES.md
3. 当前专项 Skill
4. leon-identity-v1-0
5. 当前有效系统规范
6. 历史内容样本
7. 历史规则

用户本次明确要求拥有最高优先级。

## 04 仓库内仍保留的结构性规则

内容生产规则已经进入 Skill。

仓库内只保留必要的结构性规则：

- `20-内容工厂/00-内容规则/CONTENT-ID规则.md`
- `20-内容工厂/00-内容规则/内容单元归档规则.md`

它们负责文件编号、内容单元归档和仓库结构，不负责具体文案、封面、公众号写作和审查。

## 05 已被 Skill 吸收并清理的旧规则类型

- Leon IP 旧定位规则
- 视频引擎旧规则
- 视频 SOP 旧规则
- 口播与提词旧规范
- 真实性旧规则
- 旧 Review 规则
- 旧封面规范
- 旧色彩规范
- 旧字体规范
- 旧排版规范
- 旧 AI 提示词规范
- 旧公众号 SOP
- 旧公众号视觉规范

Git 历史保留旧版本，不再在当前工作树保留重复副本。

## 06 使用方式

- 做选题：调用 `leon-topic-strategy-v1`。
- 写口播：调用 `leon-video-script-v1`。
- 做封面：调用 `leon-cover-design-v1`。
- 写公众号：调用 `leon-wechat-article-v1`。
- 审稿/复盘：调用 `leon-content-review-v1`。
- 任何 Leon 内容：默认继承 `leon-identity-v1-0`。

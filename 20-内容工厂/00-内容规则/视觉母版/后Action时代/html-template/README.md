# 后Action时代 HTML/CSS 固定封面模板

这是后Action时代系列的固定模板系统，不是每期重新生成图片。

## LOCKED 文件

以下文件和元素视为锁定：

- `template.html`：固定 DOM 结构和固定图层顺序
- `styles.css`：固定画布、坐标、字号、颜色、行距、人物位置、背景位置、底部信息区
- `assets/leon-person-original.png`：Leon 人物原始 PNG，直接引用，禁止 AI 重绘、修脸、改变比例
- `assets/background-action-store.jpg`：固定背景图
- `assets/logo-post-action.png`：固定透明 PNG Logo，禁止重新生成文字
- `assets/brick-right.png`：固定右侧砖墙图层
- `export-cover.mjs`：导出脚本，仅读取变量 JSON 渲染 PNG

## VARIABLE 字段

每一期只允许修改 JSON 中 3 个字段：

```json
{
  "issue_number": "012",
  "main_title": "百元店\n正失去\n最大优势",
  "subtitle": "好逛的感觉\n正在被Action重新定义"
}
```

禁止为单期封面修改 `template.html` 或 `styles.css`。

## 导出方式

```bash
node export-cover.mjs --data cover-data.json --out exports/HA-012.png
node export-cover.mjs --data examples/cover-data-013-proof.json --out exports/HA-013-proof.png
```

## 012 → 013 证明

`examples/cover-data-012.json` 和 `examples/cover-data-013-proof.json` 只有以下变量不同：

- `issue_number`
- `main_title`
- `subtitle`

模板 HTML、CSS、人物图片、Logo、背景图片、砖墙图片均不变。

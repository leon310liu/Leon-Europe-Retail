# 后Action时代母版变量化证明

## 结论

012 改成 013 时，只修改以下三个变量字段：

- issue_number
- main_title
- subtitle

未修改：

- template.html
- styles.css
- assets/leon-person-original.png
- assets/background-action-store.jpg
- assets/brick-right.png
- assets/logo-post-action.png
- 所有固定坐标、字号、颜色、人物位置、背景位置、Logo位置

## 对比文件

- 012 数据：examples/cover-data-012.json
- 013 证明数据：examples/cover-data-013-proof.json

## 导出结果

- exports/HA-012-template.png
- exports/HA-013-proof-only-data-changed.png

## 固定文件哈希

见 locked-manifest.json。

## 校验结果

通过。两个导出文件使用同一个 HTML/CSS 母版和同一组 assets，只切换 JSON 数据。

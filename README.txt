A66 — 最终统一版本

上传 GitHub Pages：
1. 解压 ZIP。
2. 将 index.html、其他 HTML、sitemap.xml、assets 文件夹及 .nojekyll 放到网站发布目录。index.html 要直接位于发布目录，不要再套一层 A66-final 文件夹。
3. 保留仓库已有的自定义域名设置及 CNAME（如果已有）。本包不修改域名绑定。
4. 等 GitHub Pages 部署成功后刷新网页；如果仍显示旧版，请按 Ctrl + F5。

本包包含：
- 全部 16 个 HTML 页面及 sitemap.xml。
- A66 黑灰、橙色、金色统一品牌配色。
- Slots、Live、Sports 的简洁分类卡片、10 个 Read More 弹窗及 Knowledge Library。
- 最新 Blogger 页面，含三位示例人物、各不相同的头像背景、简介和编辑点评。头像直接嵌入 HTML。
- 注册／Join 跳转 https://a66.social/register；其他进入平台按钮跳转 https://a66.social/。站内信息导航保留。

部署域名：sitemap.xml 目前使用 https://a66.social/。如果此 landing page 最终使用其他域名，应将 sitemap 域名及 index-v2.html 的 canonical 改为实际部署域名；按钮目标仍保持 a66.social。

检查结果：
- 39 项分类弹窗交互逻辑检查、43 项原有交互检查通过。
- 站内文件、锚点及 HTML ID 检查通过；无重复 ID。
- 三张 Blogger 头像已嵌入并核对。
- 未完成浏览器视觉验收或线上注册接口验证。

网站只需静态托管，不需要安装依赖或构建。

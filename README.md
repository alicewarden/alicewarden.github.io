# Alice 的博客

个人博客：**https://alice901.xyz**  
源码仓库：https://github.com/alicewarden/alicewarden.github.io

基于 [Astro](https://astro.build/) 和 [Firefly](https://github.com/CuteLeaf/Firefly)；通过 GitHub Actions 构建并发布到 GitHub Pages。保留上游 MIT 许可证及主题署名。

## 本地预览（Windows PowerShell）

项目目录：D:\BlogProjects\alice-blog

使用 Node.js 24 和 package.json 中指定的 pnpm 版本。

~~~powershell
Set-Location "D:\BlogProjects\alice-blog"
pnpm.cmd install --store-dir "D:\NodeCache\pnpm-store"
pnpm.cmd dev
~~~

## 写文章

~~~powershell
pnpm.cmd new-post my-new-post
~~~

编辑 src/content/posts/ 中的 Markdown；公开文章使用 draft: false。图片可以放在 public/images/，引用为 /images/文件名。

本次初始化包含自动整理的开站文章，后续可按自己的表达修改。

## 验证与发布

~~~powershell
pnpm.cmd check
pnpm.cmd type-check
pnpm.cmd build
git add .
git commit -m "feat: publish a new post"
git push origin main
~~~

main 更新后，.github/workflows/deploy.yml 自动构建并部署。Pages Source 应设为 GitHub Actions，Custom domain 保持 alice901.xyz。

## 常用配置

| 内容 | 文件 |
| --- | --- |
| 站点与配色 | src/config/siteConfig.ts |
| 头像与个人资料 | src/config/profileConfig.ts |
| 背景与横幅 | src/config/backgroundWallpaper.ts |
| 导航菜单 | src/config/navBarConfig.ts |
| 侧边栏 | src/config/sidebarConfig.ts |
| 关于页面 | src/content/spec/about.md |

旧版 Jekyll 保存在 backup-jekyll-20261027 分支。原始照片保留在 public/images/，网页背景使用同目录的 WebP 副本。

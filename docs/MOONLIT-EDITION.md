# 月夜书房：界面说明与恢复方法

日期：2026-10-27。主题：久远寺有珠 · 月夜书房。

## 美化前的恢复点

- GitHub 备份分支：[`backup-firefly-v1-20261027`](https://github.com/alicewarden/alicewarden.github.io/tree/backup-firefly-v1-20261027)
- 备份提交：`00462b3e121e200e98bca8ed6b6e66b349d0490b`。
- 本地源码压缩包：`D:\BlogProjects\alice-blog\.local-backups\firefly-before-moonlit-20261027.tar.gz`，约 27.7 MB。
- 压缩包包含源码、文章、配置和原始图片，不包含依赖、生成站点、Git 数据及备份目录自身。
- 旧版 Jekyll 仍另存于 `backup-jekyll-20261027`；不要把它与本次 Firefly 备份混淆。

## 新版改动

首页采用月夜书房插画、宋体标题、香槟金按钮、圆形头像，以及更克制的卡片边框和悬浮效果。文章、头像原图、旧壁纸、域名和自动发布流程均保留。

开场是 CSS/JavaScript 动画：插画镜头缓慢推进，文字与微光浮现，约 4.1 秒后关闭。同一标签页会话只自动播放一次；首页“重播开场”可以随时重播。支持“跳过开场”和 Esc；系统启用“减少动态效果”时跳过自动播放，手动重播只显示短暂静态画面。未启用 JavaScript 时直接显示博客。

界面配置位于：

| 内容 | 路径 |
|---|---|
| 开场结构及播放控制 | `src/components/features/MoonlitOpening.astro` |
| 首页横幅文字与按钮 | `src/components/layout/BannerHomeTextOverlay.astro` |
| 新版样式与动画 | `src/styles/moonlit.css` |
| 插画 WebP | `public/images/moonlit-library.webp` |
| 手机插画 WebP | `public/images/moonlit-library-mobile.webp` |
| 壁纸路径 | `src/config/backgroundWallpaper.ts` |

## 恢复美化前的模样，保留以后新增的文章

下面仅恢复这次涉及的五个界面文件；新增动画、插画和样式文件可继续留在仓库中，恢复后不再引用它们。不会覆盖文章目录。先提交或另存你以后新增的未提交修改，再逐行执行：

```powershell
Set-Location "D:\BlogProjects\alice-blog"
git switch main
git pull --ff-only
git fetch origin
git restore --source origin/backup-firefly-v1-20261027 -- src/layouts/Layout.astro src/components/layout/BannerHomeTextOverlay.astro src/config/backgroundWallpaper.ts src/config/siteConfig.ts ':(literal)src/pages/[...page].astro'
pnpm.cmd build
git add -A
git -c user.name="alicewarden" -c user.email="1801952664@qq.com" commit -m "revert: restore original Firefly appearance"
git push origin main
```

等待 GitHub Actions 发布成功，网站便恢复到本次美化前的外观。不要把 Pages Source 改为 Deploy from a branch：Firefly 源码仍需要 Actions 构建。

如果要找回完全原样的全部文件，可在 GitHub 备份分支页面 Code → Download ZIP，解压到另一个文件夹查看。依赖目录可重新安装，不要直接覆盖你后续写作的项目。

## 插画来源和生成提示词

本次插画使用内置 imagegen 生成，是久远寺有珠主题的 AI 同人插画，并非官方素材。生成原始 PNG 保存在 Codex 的 generated_images 目录；网站使用已复制到项目的 WebP，不依赖该目录。以下为实际生成提示词：

> Use case: illustration-story. Asset type: cinematic illustrated hero and opening animation background for Alice's personal anime blog. Primary request: a refined original fan-art illustration of Alice Kuonji (久远寺有珠) from Witch on the Holy Night / Mahoutsukai no Yoru, recognizable short straight black bob hair with bangs, calm blue eyes, black high-collared modest long-sleeved Victorian dress. Scene: she stands on the RIGHT HALF of a moonlit old European mansion library, one hand holding a closed dark blue book, soft three-quarter view, luminous pale blue moon through tall window, fine floating silver dust, a delicate tea cup on distant table. Wide 16:9 cinematic composition, character clear from head to waist, LEFT HALF relatively dark navy with generous quiet negative space for website heading, no other people. High quality anime background illustration with graceful crisp face and delicate painterly architecture, midnight navy, dusty indigo, moonlit ivory and subtle warm gold. Elegant, quiet literary mood. No lettering, no logo, no watermark, no UI. Age appropriate nonsexual clothing. Output landscape at least 1536px wide.

# 星夜手记：原壁纸、GIF 开场与文章区

本版按 2026-10-28 的补充要求制作，文章区使用原壁纸的模糊延展，开场 GIF 铺满浏览器视口。

## 保留与调整

- 桌面恢复为你的原壁纸 `/images/banner-desktop.webp`，位置恢复为 `0% 20%`；原始 PNG 继续保留。
- 手机恢复为你的原壁纸 `/images/banner-mobile.webp`，原始 JPG 继续保留。
- 开场使用你提供的 `魔夜3.gif`，复制为 `/images/mayo-opening.gif`。文件内容完全一致，没有裁切或重新生成。
- GIF 共 133 帧，完整一轮约 11.08 秒。加载后播放一轮并进入博客；支持跳过、Esc、进入博客按钮及首页重播。
- 同一标签页会话仅自动播放一次。系统启用减少动态效果时不自动播放；手动重播显示短暂静态画面。
- 开场使用等比铺满（object-fit: cover），保持图像比例；当屏幕与 GIF 比例不同，会裁去部分边缘，手机优先保留右侧有珠。GIF 源文件未改变。关闭后切回静态首帧，避免隐藏状态继续播放 GIF。
- 文章区和侧栏周围使用原壁纸的固定模糊背景，卡片改为半透明磨砂玻璃，深色模式保留更深的阅读底色。
- 文章区加入星图欢迎面板和真实文章/分类/标签计数；置顶文章在桌面网格中突出显示为横向专题卡。
- 原来的四张纯色示例封面改为已有壁纸、头像及 GIF 首帧；文章正文没有修改。封面排版包含细框、分类徽章和阅读入口。
- 侧栏加入壁纸页眉、头像层次、装饰标记、分类目录细节与标签边框。新增装饰采用 CSS，没有新生成角色插画。

GIF 的 SHA-256：`939205ecb8ac5385867e795be3c776b69fe57aea0e92c10618ee0d85a333ae89`。

静态首帧 `/images/mayo-opening-poster.webp` 用于关闭状态及文章封面。它不影响原 GIF。

## 恢复点

| 版本 | GitHub 分支 | 提交 |
|---|---|---|
| 本次修改前的星夜手记版 | `backup-anime-before-glass-20261028` | `116f5e83a5af16fd0e37b204e0493b7f452f92d7` |
| 上一版月夜书房版 | `backup-moonlit-before-gif-20261027` | `e22fbe55e59f3cf7ac4d1d93a4978721764d1992` |
| 最初完成迁移的 Firefly 版 | `backup-firefly-v1-20261027` | `00462b3e121e200e98bca8ed6b6e66b349d0490b` |
| 最早的 Jekyll 版 | `backup-jekyll-20261027` | 见对应分支 |

本次修改前还保存了完整源码压缩包：

`D:\BlogProjects\alice-blog\.local-backups\firefly-anime-v3-before-glass-20261028.tar.gz`

约 28.1 MB，包含文章、配置、源码与图片；排除依赖、生成站点、Git 数据与备份目录自身。前一版的本地压缩包也继续保留。

需要查看备份，可以打开 [月夜书房备份分支](https://github.com/alicewarden/alicewarden.github.io/tree/backup-moonlit-before-gif-20261027)，通过 Code → Download ZIP 下载到其他文件夹。不要直接覆盖以后新增的文章。

Firefly 仍由 GitHub Actions 构建。恢复版本时也保持 Pages Source 为 GitHub Actions，不要改成直接发布源码分支。

## 日后修改的位置

| 内容 | 文件 |
|---|---|
| 桌面、手机壁纸 | `src/config/backgroundWallpaper.ts` |
| GIF 和开场控制 | `src/components/features/MoonlitOpening.astro` |
| 欢迎面板与真实统计 | `src/components/layout/JournalShowcase.astro` |
| 文章卡片结构 | `src/components/layout/PostCard.astro` |
| 颜色、侧栏、边框与响应式样式 | `src/styles/moonlit.css` |
| 每篇文章的封面 | 对应 Markdown 顶部的 `image` 字段 |

网站资源已保存到项目内，不依赖 Pictures 目录。以后移动原始 GIF 不会影响网站。

## 下一次本地写文章前

本次由 GitHub 网页提交并发布；本地 D 盘目录仍保存同样的新版文件，但当前执行环境不能写入原仓库 `.git`，因此本地仍在 `firefly` 分支。这不影响线上网站。

在自己的 PowerShell 逐条执行下面的命令，同步到线上最新 `main`：

```powershell
Set-Location "D:\BlogProjects\alice-blog"
git stash push --include-untracked -m "backup: local anime journal files before sync"
git switch main
git pull --ff-only
```

本地修改已另存在 stash，且界面已发布到 GitHub，同步后不需要执行 `git stash pop`。之后照常使用 `pnpm.cmd new-post` 写文章。

# 居中开场、动态波浪与鼠标柔光

2026-10-28 界面微调。

- GIF 改为居中宽幅画面，桌面最大宽度 1600px，通常占窗口宽度约 86%，并依据可用高度缩放。手机约占宽度 92%。始终完整显示原 GIF，不裁切、不拉伸。
- 清晰壁纸的底边采用缓缓平移的波浪轮廓，直接露出下方原有的模糊壁纸，避免用纯色波浪遮住背景。桌面一轮约 16 秒；手机波幅较小。设置中的波浪开关仍可控制它。
- 主页文章、欢迎卡、分类栏和左侧栏加入柔光。鼠标进入时光晕淡入，位置平滑跟随指针，亮度轻微呼吸；离开、滚动和切换到后台时停止。光层不会截获点击。
- 触屏设备不启用鼠标柔光；系统启用“减少动态效果”时波浪静止，柔光关闭，开场也沿用原有的减少动态效果逻辑。
- 原壁纸、GIF、头像与文章正文均保留。

## 恢复点

修改前的固定提交：`71f23188ef5d1954a59a1fff4f6432f555f699ff`。

GitHub 分支：[backup-glass-before-motion-20261028](https://github.com/alicewarden/alicewarden.github.io/tree/backup-glass-before-motion-20261028)。

本地源码备份：`D:\BlogProjects\alice-blog\.local-backups\firefly-glass-v4-before-waves-glow-20261028.tar.gz`。

SHA-256：`68cb2d9150bd1e8c86cdc11144731cf7dd1c9f0ed5258cd8852b809789d296d2`。

以前保存的版本和备份继续保留。源码压缩包排除了依赖、生成站点、Git 元数据及备份目录本身。

## 调整入口

| 内容 | 文件 |
|---|---|
| 开场尺寸、柔光颜色、波浪速度 | `src/styles/moonlit.css` |
| 鼠标柔光跟随与停止逻辑 | `src/components/features/JournalMotion.astro` |
| 波浪轮廓 | `public/images/journal-wave-mask.svg` |
| 默认波浪开关 | `src/config/backgroundWallpaper.ts` |
| GIF 播放与重播 | `src/components/features/MoonlitOpening.astro` |

CSS 使用波浪 alpha mask 裁出清晰横幅的底边，原来的不透明 Canvas 波浪隐藏，防止覆盖模糊壁纸。浏览器不支持 CSS mask 时保留直线边界作为降级。

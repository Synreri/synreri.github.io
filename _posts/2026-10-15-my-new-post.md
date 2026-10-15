---
title: 利用Obsidian管理博客内容
date: 2026-10-15 16:59:00 +0800
category: 博客管理
description: 如题
sample: false
---

### 写完后发布

**Obsidian 保存的是电脑上的文件，推送到 GitHub 后网站才会更新。**

在 PowerShell 中进入博客文件夹：

```
cd "D:\StAndrewsFallBlog"
```

每次开始写作前，先同步你在 GitHub 上做过的修改：

```
git pull --ff-only
```

写完后发布：

```
git add _posts assets/images
git commit -m "更新博客文章"
git push
```

GitHub Pages 构建完成后，文章就会出现在博客上。



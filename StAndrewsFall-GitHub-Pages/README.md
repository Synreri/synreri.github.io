# StAndrewsFall 的博客

使用 Jekyll + GitHub Pages，文章使用 Markdown 编写。保留原博客的中文排版、蓝色点缀、手机适配和三篇示例文章。

目标仓库：`synreri/synreri.github.io`。最终域名：`blog.standrewsfall.cc`。

## 日常写文章：只用浏览器

1. 打开 GitHub 仓库的 `_posts` 文件夹。
2. 点击 **Add file → Create new file**。
3. 文件名使用 `YYYY-MM-DD-英文短标题.md`，例如 `2026-10-01-my-first-post.md`。
4. 复制以下模板，填写标题、日期、分类、摘要和正文。日期填写实际发布时间，未来日期的文章不会提前显示。
5. 点击 **Commit changes**，提交到 `main` 分支。GitHub Pages 会自动构建并发布；在 **Actions** 中查看结果。

```markdown
---
title: "我的第一篇文章"
date: 2026-10-01 12:00:00 +0800
category: "生活随笔"
description: "这篇文章的一句话介绍。"
published: true
---

这里是正文。

## 一个小标题

可以写 **加粗文字**、*斜体*、列表和链接。
```

不要在自己的文章里添加 `sample: true`；该标记仅用于当前三篇示例。

网页底部的“写作入口”会打开 GitHub 的文章目录。实际写入需要你登录具有仓库权限的 GitHub 账号。

## 修改和删除文章

- 修改：打开 `_posts` 中的文章，点击铅笔图标编辑，然后提交。
- 删除：在 GitHub 中删除对应 Markdown 文件并提交。
- 暂不在网站显示：在文章顶部设置 `published: false`。
- 公开仓库中的源文件仍可被他人查看，即使设置了 `published: false`。私人草稿请放在本地 `.private-drafts/`（已被 Git 忽略），完成后再移入 `_posts`。
- 不要随意修改文章文件名里的英文短标题，它决定文章网址；旧网址需要保留时可在 front matter 中设置固定的 `permalink`。

## 上传图片

1. 打开仓库的 `assets/images` 文件夹。
2. 点击 **Add file → Upload files**，拖入图片后提交。
3. 在文章中插入以下内容，并替换文件名和图片说明：

```liquid
![图片说明]({{ '/assets/images/my-photo.jpg' | relative_url }})
```

图片自动适应手机和桌面宽度。尽量使用简短英文文件名和压缩后的图片。

## 本地 Markdown 写作

也可以使用自己喜欢的 Markdown 编辑器。首次拉取已创建的仓库：

```sh
git clone https://github.com/synreri/synreri.github.io.git
cd synreri.github.io
```

把文章放入 `_posts`，图片放入 `assets/images`，然后：

```sh
git add _posts assets/images
git commit -m "Publish a new post"
git push
```

通常不需要在本地安装 Ruby 或 Jekyll；GitHub 会负责构建。若需要完整的本地预览，安装 Ruby 和 Bundler 后使用 `bundle install` 与 `bundle exec jekyll serve`。

## 第一次配置 GitHub Pages

1. 使用 `synreri` 账号创建公开仓库 `synreri.github.io`。如果同名仓库已经存在，先检查原有内容，不要直接覆盖。
2. 将本目录下的源文件放在仓库根目录，提交到 `main`。
3. 在 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**，分支选 `main`，目录选 `/(root)`，保存。
4. 等待构建成功，打开 `https://synreri.github.io/` 检查文章列表、文章页、手机显示和图片。

无需添加 `.nojekyll` 文件，本网站需要 Jekyll 编译模板与 Markdown。

## 从当前托管平台切换自定义域名

目前 `blog.standrewsfall.cc` 仍指向原来的 Sites 博客。先确认 GitHub Pages 发布成功，再按顺序切换：

1. 在 GitHub **Settings → Pages** 中将 **Custom domain** 设为 `blog.standrewsfall.cc` 并保存。
2. 将 `_config.yml` 的 `url` 改为 `https://blog.standrewsfall.cc` 并提交。
3. 在 Spaceship 中，把现有 `blog` 的 CNAME 值从 `custom-domains.chatgpt.site` 改为 `synreri.github.io`。该值不含 `https://`，也不含仓库路径。
4. 等待 GitHub DNS 检查和证书签发完成，再启用 **Enforce HTTPS**。
5. 确认 `https://blog.standrewsfall.cc/` 返回新版博客后，再按需整理旧平台的域名绑定及验证记录。

切换过程中保留旧站用于回退。只有修改 `blog` 的 CNAME 才会改变当前博客域名的访问去向。

## 文件位置

- `_posts/`：文章。
- `assets/images/`：文章图片。
- `_config.yml`：站名、作者、摘要和站点地址。
- `index.html`：首页与关于介绍。
- `_layouts/`：通用页面与文章模板。
- `assets/css/style.css`：外观。
- `templates/post.md`：完整文章模板（不发布为网页）。

## 费用

公开仓库可使用 GitHub Free 的 GitHub Pages。已购买的 `standrewsfall.cc` 仍需按域名注册商的价格续费。

## 官方文档

- [配置 GitHub Pages 发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Jekyll 文章格式](https://jekyllrb.com/docs/posts/)
- [配置自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

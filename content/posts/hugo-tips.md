---
title: 'Hugo 進階技巧：用模板打造高效工作流'
date: 2026-02-19T10:00:00+08:00
draft: false
categories: ['技術', '筆記']
description: '分享幾個實用的 Hugo 技巧，讓你的寫作流程更順暢。'
---

Hugo 是目前最快的靜態網站產生器之一，本篇整理幾個我在使用過程中學到的實用技巧。

## Archetypes 自動化

每次新增文章時，Hugo 會從 `archetypes/` 目錄讀取模板，自動填入 front matter：

```bash
hugo new posts/my-new-post.md
```

這會根據 `archetypes/posts.md` 的內容建立新文件，省去重複輸入的時間。

## Front Matter 小技巧

善用 `draft: true` 可以讓你安心撰寫草稿，不用擔心意外發布：

```yaml
---
title: '我的草稿'
date: 2026-02-19
draft: true
categories: ['筆記']
---
```

在本地預覽時加上 `-D` 參數就能看到草稿：

```bash
hugo server -D
```

## 分類系統

Hugo 的 Taxonomy 系統非常靈活。在 `hugo.toml` 中定義分類法後，只需在文章的 front matter 中加入對應欄位即可：

```yaml
categories: ['技術', '筆記']
```

> 一篇文章可以屬於多個分類，方便交叉索引。

## 小結

掌握這些基本技巧後，你會發現 Hugo 的寫作體驗非常流暢。更多進階用法可以參考 [Hugo 官方文件](https://gohugo.io/documentation/)。

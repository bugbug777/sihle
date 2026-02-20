# SIHLE 部落格 — 使用手冊

本手冊說明如何使用這個 Hugo 部落格撰寫文章、管理分類、預覽、建置與部署。

---

## 快速開始

### 環境需求

- [Hugo](https://gohugo.io/installation/)（Extended 版本）
- [Git](https://git-scm.com/)

安裝完成後，確認版本：

```bash
hugo version
```

### 本地預覽

```bash
hugo server -D
```

- `-D` 會顯示標記為草稿（`draft: true`）的文章
- 預設網址：`http://localhost:1313`
- 修改檔案後會自動重新載入

---

## 撰寫文章

### 新增文章

```bash
hugo new posts/文章名稱.md
```

這會在 `content/posts/` 建立新的 Markdown 檔案，並自動帶入模板欄位。

### Front Matter 欄位說明

每篇文章開頭的 YAML 區塊稱為 **front matter**：

```yaml
---
title: '文章標題'
date: 2026-02-20T08:00:00+08:00
draft: true
categories: ['分類名稱']
description: '文章簡短描述，會顯示在列表頁'
---
```

| 欄位 | 說明 |
|------|------|
| `title` | 文章標題 |
| `date` | 發布日期（ISO 8601 格式） |
| `draft` | `true` = 草稿（不會被建置）；`false` = 正式發布 |
| `categories` | 分類，可設定多個，例如 `['技術', '筆記']` |
| `description` | 文章描述，同時用於列表頁摘要、Open Graph 社群分享預覽、Twitter Card 和 SEO meta 標籤。**強烈建議每篇文章都填寫** |

### 撰寫內容

使用標準 Markdown 語法撰寫文章內容。支援：

- 標題（`## H2`、`### H3`）
- 粗體、斜體、刪除線
- 有序 / 無序列表
- 程式碼區塊（支援語法高亮）
- 引用、表格、連結、圖片

---

## 文章管理

### 發布文章

將 front matter 中的 `draft` 改為 `false`：

```yaml
draft: false
```

### 設定分類

在 front matter 的 `categories` 欄位加入分類名稱：

```yaml
categories: ['技術', '生活']
```

- 一篇文章可以屬於多個分類
- 分類總覽頁：`/categories/`
- 個別分類頁會自動產生，例如：`/categories/技術/`

### 檔案結構

```
content/
└── posts/
    ├── my-first-post.md
    ├── another-article.md
    └── ...
```

---

## 建置靜態網站

```bash
hugo --gc --minify
```

- `--gc`：清理未使用的快取檔案
- `--minify`：壓縮 HTML/CSS/JS 產出
- 產出的靜態檔案位於 `public/` 目錄
- 這個目錄的內容就是可以直接部署的網站
- Hugo 會自動產生 `sitemap.xml` 和 `robots.txt`

---

## 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推薦）

1. 在 GitHub 建立一個新的 repository

2. 將專案推送到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的帳號/你的倉庫名.git
git push -u origin main
```

3. 建立 GitHub Actions 工作流檔案 `.github/workflows/hugo.yml`：

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --gc --minify

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. 到 GitHub repo 的 **Settings → Pages** 頁面，將 Source 設為 **GitHub Actions**

5. 推送後，GitHub Actions 會自動建置並部署

6. 記得更新 `hugo.toml` 中的 `baseURL` 為你的實際網域：

```toml
baseURL = 'https://blog.sihle.cc/'
```

### 方法二：手動部署

```bash
hugo
cd public
git init
git add .
git commit -m "Deploy"
git remote add origin https://github.com/你的帳號/你的帳號.github.io.git
git push -f origin main
```

---

## 亮色 / 暗色主題

- 網站預設會偵測你的系統設定（亮色或暗色模式）
- 點擊導覽列右側的 ☀️/🌙 按鈕可以手動切換
- 你的選擇會被記住，下次造訪時自動套用

---

## SEO 與網站設定

`hugo.toml` 中的 `[params]` 區段包含網站層級的 SEO 設定：

```toml
[params]
  description = 'SIHLE 的個人部落格 — 筆記、技術、想法'
  author = 'SIHLE'
```

- `description`：當文章沒有設定 `description` 時，會作為 meta description、Open Graph 和 Twitter Card 的預設描述
- `author`：用於 JSON-LD 結構化資料和 meta author 標籤
- 網站會自動產生 `robots.txt`（由 `enableRobotsTXT = true` 控制）
- `sitemap.xml` 會在每次建置時自動更新

---

## 常用指令一覽

| 指令 | 說明 |
|------|------|
| `hugo new posts/文章名稱.md` | 新增文章 |
| `hugo server -D` | 本地預覽（含草稿） |
| `hugo server` | 本地預覽（不含草稿） |
| `hugo --gc --minify` | 建置、清理快取並壓縮產出 |

---

## 參考資源

- [Hugo 官方文件](https://gohugo.io/documentation/)
- [Hugo Markdown 指南](https://gohugo.io/content-management/formats/)
- [GitHub Pages 文件](https://docs.github.com/en/pages)

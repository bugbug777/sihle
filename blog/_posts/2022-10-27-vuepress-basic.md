---
title: 使用 VuePress 快速建置個人部落格
date: 2022-10-27
author: sihle
location: New Taipei City
tags:
  - VuePress
  - Tutorials
summary: 使用 VuePress 快速建立一個極簡的個人部落格。
---

![VuePress](../assets/images/vuepress/vuepress.png)

## VuePress 簡介

VuePress 主要被用來快速建置靜態網站，網頁會透過預渲染 HTMl 的方式生成，因此會有良好的 SEO 表現，但是網頁加載完成後，網頁內容會透過 Vue 進行接管，因此同時又帶有 SPA 效能優異的特性。

VuePress 本身也透過插件來擴充其功能，由於其誕生的初衷是為了支援 Vue 的相關文檔輸出，因此大量的官方維護插件在這個面向提供大量的支援，例如：文檔智搜功能、back-to-top、last-updated ... 等等。

事實上，在使用 VuePress 開發時，由於 VuePress 是基於 Vue、Vue Router、Webpack 打造的靜態網站生成器，並且可以提供一定程度的客製化功能，對於熟悉 Vue 框架開發的開發者來說，對 VuePress 網站進行一定程度的客製化是相當容易且實際的。

## 快速開始

這裡可以依照官方的文件從零開始構建自己的 VuePress Blog，當然前提是你需要對 VuePress 有一定程度的熟悉，當然主要還是透過 Plugins 的方式，所以喜歡自己動手研究的朋友，也可以全部從頭自己來，這點是肯定沒有問題的。

不過這裡我打算採用一個比較取巧的方式，也就是利用 VuePress 提供的建置工具來快速完成網站的構建。

請參考下面的指令完成網站的建立：

```shell
# 建立 VP 專案並進入互動模式
yarn create vuepress [blogName]

# 切換目錄並安裝所需檔案
cd [blogName] && yarn

# 開啟開發預覽模式
yarn dev
```

過程預覽：
![VuePress CLI](../assets/images/vuepress/vuepress-cli.png)

> 以下如果遇到相關的套件安裝，都會使用 `yarn` 進行，這是基於 VuePress 官方的建議

輸入指令後，首先會提示你要使用 vuepress 建立專案，要採用一個文件模板還是部落格模板，由於我們要建立的是一個部落格，所以這裡務必要選取 blog 的選項。但是萬一選錯了，且你也無法自行安裝 `plugins` 並進行相關設定的情況下，那就只好把專案刪除重來囉~

另外，還有一點需要注意的是，透過這個方式建立的專案，預設的套件版本是相對比較舊的，建議可以執行下面的指令，將套件版本進行更新，這是為了避免有些功能無法使用。

```shell
yarn add vuepress @vuepress/theme-blog -D
```

如果一切都相當順利的話，你會在終端看到 `http://localhost:8080/` 類似這樣的網址，表示目前本地端開發用的網站伺服器已經被開啟，我們透過此連結預覽我們的部落格。

![Blog Preview](../assets/images/vuepress/blog-preview.png)

## 專案目錄結構

下面我簡單的解說專案的相關檔案目錄結構，由於是基於 `VuePress`，所以如果你已經了解的話，這部分可以徑直跳過。

由於我們的 `VuePress` 是基於 [Convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration) 所以了解相關的結構，會有助於我們對部落格進行客製化的調校。

檔案目錄結構：
![Directory Structure](../assets/images/vuepress/dir-structure.png)

- `docs` - 對應我們專案中的 `blog`。
- `_posts` - 是必須同名且存在的目錄，其中存放相關的部落格文章。
- `.vuepress` - VuePress 的相關設定目錄。
- `.vuepress/config.js` - VuePress 的主要設定檔。

## `.vuepress/config.js`

在 VuePress 中，不論是要使用套件或者引用相關主題，都需要在 `.vuepress/config.js` 中進行設定，這一小節，我們就來簡單的看看這個檔案。

```js
module.exports = {
  title: 'VuePress Blog Example',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
```

- `title` - 部落格的頁籤標題
- `description` - 相當於 HTML 中 `meta` 的 `description` 屬性
- `theme` - 使用的 VuePress 主題
- `themeConfig` - 主題相關設定

這裡唯一比較需要注意的是，在 VuePress 中，不同的主題可能會有不同的設定，這部分需要針對各個主題的文件去進行閱讀、設定，舉例來說，在我們的 theme-blog 這個主題中，有 `footer` 這個屬性可以去設定聯絡資訊 `contact` 以及部落格的所有權註記 `copyright`，在別的主題中也許就沒有 `contact` 這個屬性可以去進行設定。

## 發布第一則貼文

這一節我們來發布我們的第一則貼文。

在 VuePress 中，我們會透過 `Markdown` 的語法來進行文章的撰寫，最終這些 `.md` 的文件，都會被 VuePress 轉換成 `.html` 檔案，因此我們並不需要清楚的知道相關的底層原理，只要知道最後的預覽結果是我們想要的即可。

```md
<!-- 2022-7-20-first-post.md -->
---
date: 2022-07-20
tag: 
  - frontmatter
  - vuepress
author: sihle
summary: '我的第一則貼文'
location: Taipei  
---

# 你好，世界

這是我們使用 VuePress 建立的部落格，並且發布的第一則貼文。
```

首先，這裡我們需要注意到這個檔案的命名方式，前綴的日期透過 `-` 的方式串連，並在最後才標註檔名，這種方式有助於 `theme-blog` 解析我們的檔案名稱，並且進行相關的對應到網頁的網址上，當然這並不是必要的。

接著，由 3 個 `-` 串連的 `---` 前後包裹著一些語法的這坨東西稱為 `frontmatter`，而這個對應的語法稱為 `YAML` 這裡不深入說明這兩個東西，記住這樣的格式並且了解這樣的語法，這可以替我們的文章進行 SEO 優化，以及提供一些文章的相關資訊給我們的部落格網站使用，例如：`tag` 可以提供這篇文章的分類，並且可以在導覽列的地方，連結到進行分類文章的檢索頁面。

文章列表預覽：
![文章列表](../assets/images/vuepress/landing-page.png)

文章內容預覽：
![文章內容](../assets/images/vuepress/post-page.png)

## 結語

以上就是今天的使用 VuePress 建立個人部落格方法，不過這篇文章沒有撰寫部署的到線上的部分，我將相關的文章連結放置在下方的參考連結中了，需要的朋友可以逕自參閱。

## 參考連結

- [@vuepress/theme-blog](https://vuepress-theme-blog.billyyyyy3320.com/)
- [VuePress - Deploying](https://vuepress.vuejs.org/guide/deploy.html)
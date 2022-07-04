# VuePress

這裡存放學習使用 VuePress 的筆記。

## Quick Start

1. 建立專案目錄
2. 初始化 `yarn init -y`
3. 安裝套件 `yarn add -D vuepress`
4. 建立主頁 `echo '# Hello VuePress' > README.md`
5. 建立命令腳本

```json
{
  "scripts": {
    "dev": "vuepress dev ./",
    "build": "vuepress build ./"
  }
}
```

## 目錄結構

```plain
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

- docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
- docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
- docs/.vuepress/theme: 用于存放本地主题。
- docs/.vuepress/styles: 用于存放样式相关的文件。
- docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- docs/.vuepress/public: 静态资源目录。
- docs/.vuepress/templates: 存储 HTML 模板文件。
- docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
- docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
- docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
- docs/.vuepress/enhanceApp.js: 客户端应用的增强。

## 關於頁面的路由

頁面的默認路由取決於，命令執行時的 `targetDir`，以目前的範例來說

```json
{
  "scripts": {
    "dev": "vuepress dev ./",
    "build": "vuepress build ./"
  }
}
```

我們的 `targetDir` 會是 `./` 也就是專案的根目錄

## 基本設定

如果沒有進行一些基本的設定，這會導致我們的 VuePress 網站能力受到限制，所以首先我們必須建立一個 `.vuepress` 目錄，並且在其中建立一個 `config.js` 檔案，完整路徑為 `.vuepress/config.js`，而 `config.js` 需要透過 CommonJS 的方式會出一個 JS 物件，這個物件中的資料即為我們針對 VuePress 的設定。

:::tip
在此的 `.vuepress` 建立在 `./` 之中，也就代表專案跟目錄是我們的 `targetDir`。<br />
[配置參考文件](https://vuepress.vuejs.org/zh/config/)
:::

## 關於 Markdown 的拓展

### Front Matter

- [YAML Front Matter](https://jekyllrb.com/docs/front-matter/)
- [Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)

### 可用的 [Emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

語法範例：
`:tada: :100:`

### 自動生成目錄結構連結 `[[toc]]` 

範例：
[[toc]]

## 線上部署

部署前還需要調整一下線上公開的路徑，需要到 `config.js` 調整 `base` 參數。
需要注意的是，如果部署的位置是在 repo，那麼需要開頭結尾都加上 '/'。
由於路徑的組合是直接由這裡的字串進行串接，所以不在尾端加上 '/' 會導致連結路徑發生問題。（預設是 '/'）

```js
module.exports = {
  base: '/repo_name/',
}
```

部署用腳本：

```shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

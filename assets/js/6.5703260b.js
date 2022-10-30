(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{291:function(s,t,a){s.exports=a.p+"assets/img/vuepress.a54365d8.png"},292:function(s,t,a){s.exports=a.p+"assets/img/vuepress-cli.f34ab504.png"},293:function(s,t,a){s.exports=a.p+"assets/img/blog-preview.b76c3112.png"},294:function(s,t,a){s.exports=a.p+"assets/img/dir-structure.70063f9b.png"},295:function(s,t,a){s.exports=a.p+"assets/img/landing-page.953f8384.png"},296:function(s,t,a){s.exports=a.p+"assets/img/post-page.4057f2e8.png"},328:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("img",{attrs:{src:a(291),alt:"VuePress"}})]),s._v(" "),t("h2",{attrs:{id:"vuepress-簡介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-簡介"}},[s._v("#")]),s._v(" VuePress 簡介")]),s._v(" "),t("p",[s._v("VuePress 主要被用來快速建置靜態網站，網頁會透過預渲染 HTMl 的方式生成，因此會有良好的 SEO 表現，但是網頁加載完成後，網頁內容會透過 Vue 進行接管，因此同時又帶有 SPA 效能優異的特性。")]),s._v(" "),t("p",[s._v("VuePress 本身也透過插件來擴充其功能，由於其誕生的初衷是為了支援 Vue 的相關文檔輸出，因此大量的官方維護插件在這個面向提供大量的支援，例如：文檔智搜功能、back-to-top、last-updated ... 等等。")]),s._v(" "),t("p",[s._v("事實上，在使用 VuePress 開發時，由於 VuePress 是基於 Vue、Vue Router、Webpack 打造的靜態網站生成器，並且可以提供一定程度的客製化功能，對於熟悉 Vue 框架開發的開發者來說，對 VuePress 網站進行一定程度的客製化是相當容易且實際的。")]),s._v(" "),t("h2",{attrs:{id:"快速開始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速開始"}},[s._v("#")]),s._v(" 快速開始")]),s._v(" "),t("p",[s._v("這裡可以依照官方的文件從零開始構建自己的 VuePress Blog，當然前提是你需要對 VuePress 有一定程度的熟悉，當然主要還是透過 Plugins 的方式，所以喜歡自己動手研究的朋友，也可以全部從頭自己來，這點是肯定沒有問題的。")]),s._v(" "),t("p",[s._v("不過這裡我打算採用一個比較取巧的方式，也就是利用 VuePress 提供的建置工具來快速完成網站的構建。")]),s._v(" "),t("p",[s._v("請參考下面的指令完成網站的建立：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立 VP 專案並進入互動模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" create vuepress "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("blogName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切換目錄並安裝所需檔案")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("blogName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 開啟開發預覽模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("過程預覽：\n"),t("img",{attrs:{src:a(292),alt:"VuePress CLI"}})]),s._v(" "),t("blockquote",[t("p",[s._v("以下如果遇到相關的套件安裝，都會使用 "),t("code",[s._v("yarn")]),s._v(" 進行，這是基於 VuePress 官方的建議")])]),s._v(" "),t("p",[s._v("輸入指令後，首先會提示你要使用 vuepress 建立專案，要採用一個文件模板還是部落格模板，由於我們要建立的是一個部落格，所以這裡務必要選取 blog 的選項。但是萬一選錯了，且你也無法自行安裝 "),t("code",[s._v("plugins")]),s._v(" 並進行相關設定的情況下，那就只好把專案刪除重來囉~")]),s._v(" "),t("p",[s._v("另外，還有一點需要注意的是，透過這個方式建立的專案，預設的套件版本是相對比較舊的，建議可以執行下面的指令，將套件版本進行更新，這是為了避免有些功能無法使用。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress @vuepress/theme-blog -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果一切都相當順利的話，你會在終端看到 "),t("code",[s._v("http://localhost:8080/")]),s._v(" 類似這樣的網址，表示目前本地端開發用的網站伺服器已經被開啟，我們透過此連結預覽我們的部落格。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(293),alt:"Blog Preview"}})]),s._v(" "),t("h2",{attrs:{id:"專案目錄結構"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#專案目錄結構"}},[s._v("#")]),s._v(" 專案目錄結構")]),s._v(" "),t("p",[s._v("下面我簡單的解說專案的相關檔案目錄結構，由於是基於 "),t("code",[s._v("VuePress")]),s._v("，所以如果你已經了解的話，這部分可以徑直跳過。")]),s._v(" "),t("p",[s._v("由於我們的 "),t("code",[s._v("VuePress")]),s._v(" 是基於 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Convention_over_configuration",target:"_blank",rel:"noopener noreferrer"}},[s._v("Convention over configuration"),t("OutboundLink")],1),s._v(" 所以了解相關的結構，會有助於我們對部落格進行客製化的調校。")]),s._v(" "),t("p",[s._v("檔案目錄結構：\n"),t("img",{attrs:{src:a(294),alt:"Directory Structure"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("docs")]),s._v(" - 對應我們專案中的 "),t("code",[s._v("blog")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("_posts")]),s._v(" - 是必須同名且存在的目錄，其中存放相關的部落格文章。")]),s._v(" "),t("li",[t("code",[s._v(".vuepress")]),s._v(" - VuePress 的相關設定目錄。")]),s._v(" "),t("li",[t("code",[s._v(".vuepress/config.js")]),s._v(" - VuePress 的主要設定檔。")])]),s._v(" "),t("h2",{attrs:{id:"vuepress-config-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-config-js"}},[s._v("#")]),s._v(" "),t("code",[s._v(".vuepress/config.js")])]),s._v(" "),t("p",[s._v("在 VuePress 中，不論是要使用套件或者引用相關主題，都需要在 "),t("code",[s._v(".vuepress/config.js")]),s._v(" 中進行設定，這一小節，我們就來簡單的看看這個檔案。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'VuePress Blog Example'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'This is a blog example built by VuePress'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("theme")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/theme-blog'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// OR shortcut: @vuepress/blog")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("modifyBlogPluginOptions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("blogPluginOptions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" blogPluginOptions\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * Ref: https://vuepress-theme-blog.ulivz.com/#nav\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("nav")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Blog'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tags'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/tag/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * Ref: https://vuepress-theme-blog.ulivz.com/#footer\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("footer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("contact")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/ulivz'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'twitter'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://twitter.com/_ulivz'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("copyright")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Privacy Policy'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://policies.google.com/privacy?hl=en-US'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MIT Licensed | Copyright © 2018-present Vue.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("title")]),s._v(" - 部落格的頁籤標題")]),s._v(" "),t("li",[t("code",[s._v("description")]),s._v(" - 相當於 HTML 中 "),t("code",[s._v("meta")]),s._v(" 的 "),t("code",[s._v("description")]),s._v(" 屬性")]),s._v(" "),t("li",[t("code",[s._v("theme")]),s._v(" - 使用的 VuePress 主題")]),s._v(" "),t("li",[t("code",[s._v("themeConfig")]),s._v(" - 主題相關設定")])]),s._v(" "),t("p",[s._v("這裡唯一比較需要注意的是，在 VuePress 中，不同的主題可能會有不同的設定，這部分需要針對各個主題的文件去進行閱讀、設定，舉例來說，在我們的 theme-blog 這個主題中，有 "),t("code",[s._v("footer")]),s._v(" 這個屬性可以去設定聯絡資訊 "),t("code",[s._v("contact")]),s._v(" 以及部落格的所有權註記 "),t("code",[s._v("copyright")]),s._v("，在別的主題中也許就沒有 "),t("code",[s._v("contact")]),s._v(" 這個屬性可以去進行設定。")]),s._v(" "),t("h2",{attrs:{id:"發布第一則貼文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#發布第一則貼文"}},[s._v("#")]),s._v(" 發布第一則貼文")]),s._v(" "),t("p",[s._v("這一節我們來發布我們的第一則貼文。")]),s._v(" "),t("p",[s._v("在 VuePress 中，我們會透過 "),t("code",[s._v("Markdown")]),s._v(" 的語法來進行文章的撰寫，最終這些 "),t("code",[s._v(".md")]),s._v(" 的文件，都會被 VuePress 轉換成 "),t("code",[s._v(".html")]),s._v(" 檔案，因此我們並不需要清楚的知道相關的底層原理，只要知道最後的預覽結果是我們想要的即可。")]),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 2022-7-20-first-post.md --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token hr punctuation"}},[s._v("---")]),s._v("\ndate: 2022-07-20\ntag: \n  "),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" frontmatter\n  "),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" vuepress\nauthor: sihle\nsummary: '我的第一則貼文'\n"),t("span",{pre:!0,attrs:{class:"token title important"}},[s._v("location: Taipei  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" 你好，世界")]),s._v("\n\n這是我們使用 VuePress 建立的部落格，並且發布的第一則貼文。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("首先，這裡我們需要注意到這個檔案的命名方式，前綴的日期透過 "),t("code",[s._v("-")]),s._v(" 的方式串連，並在最後才標註檔名，這種方式有助於 "),t("code",[s._v("theme-blog")]),s._v(" 解析我們的檔案名稱，並且進行相關的對應到網頁的網址上，當然這並不是必要的。")]),s._v(" "),t("p",[s._v("接著，由 3 個 "),t("code",[s._v("-")]),s._v(" 串連的 "),t("code",[s._v("---")]),s._v(" 前後包裹著一些語法的這坨東西稱為 "),t("code",[s._v("frontmatter")]),s._v("，而這個對應的語法稱為 "),t("code",[s._v("YAML")]),s._v(" 這裡不深入說明這兩個東西，記住這樣的格式並且了解這樣的語法，這可以替我們的文章進行 SEO 優化，以及提供一些文章的相關資訊給我們的部落格網站使用，例如："),t("code",[s._v("tag")]),s._v(" 可以提供這篇文章的分類，並且可以在導覽列的地方，連結到進行分類文章的檢索頁面。")]),s._v(" "),t("p",[s._v("文章列表預覽：\n"),t("img",{attrs:{src:a(295),alt:"文章列表"}})]),s._v(" "),t("p",[s._v("文章內容預覽：\n"),t("img",{attrs:{src:a(296),alt:"文章內容"}})]),s._v(" "),t("h2",{attrs:{id:"結語"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#結語"}},[s._v("#")]),s._v(" 結語")]),s._v(" "),t("p",[s._v("以上就是今天的使用 VuePress 建立個人部落格方法，不過這篇文章沒有撰寫部署的到線上的部分，我將相關的文章連結放置在下方的參考連結中了，需要的朋友可以逕自參閱。")]),s._v(" "),t("h2",{attrs:{id:"參考連結"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#參考連結"}},[s._v("#")]),s._v(" 參考連結")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://vuepress-theme-blog.billyyyyy3320.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("@vuepress/theme-blog"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress - Deploying"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);
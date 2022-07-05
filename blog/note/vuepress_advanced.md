# VuePress Advanced

這裡記錄一些 VuePress 比較進階的使用方法。

## Browser API Access Restrictions

當你在開發一個VuePress 應用時，由於所有的頁面在生成靜態HTML 時都需要通過Node.js 服務端渲染，因此所有的Vue 相關代碼都應當遵循 編寫通用代碼的要求。簡而言之，請確保只在 beforeMount 或者 mounted 訪問瀏覽器/ DOM 的API。

如果有需要可以使用 `<ClientOnly>` 元件將其包裹。

## 自訂元件

在 `.vuepress` 中建立 `components` 目錄，在此目錄中建立的 `.vue` 元件，會被自動註冊為全域的異步元件。

測試範例：

```html
<!-- .vuepress/components/HelloWorld.vue -->
<template>
  <div>
    <h2>Hello VuePress</h2>
    <p>我可以輕鬆的使用自定義組建了</p>
  </div>
</template>
```

===> 元件展示開始

<HelloWorld />

<=== 元件展示結束

## 透過 Github Action 完成自動化佈署

詳細使用方法，可以參考 [jenkey2011/vuepress-deploy](https://github.com/jenkey2011/vuepress-deploy/#step-by-step-guide)

1. 建立 Github `access token`
2. 在 repo 中使用剛建立的 `token` 建立 `secrets`
3. 參考下方的 yaml 檔案，建立一個 Github Action

```yaml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: vuepress-deploy
      uses: jenkey2011/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        TARGET_REPO: username/repo
        TARGET_BRANCH: master
        BUILD_SCRIPT: yarn && yarn build
        BUILD_DIR: docs/.vuepress/dist
        CNAME: https://www.xxx.com
```

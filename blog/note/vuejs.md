# Vue

記錄一些關於 Vue 的學習筆記。

## Vue 概念

- Vue 實體應用
- Vue 指令應用
- Vue Lifecycle
- 元件之間資料傳遞
- Vue 與 DOM 的互動
- Options API &  Composition API 的轉換

## 觀念釐清

1. 為什麼 `Vue` 實體中的 `data` 屬性必須是 `function` 形式回傳？ 可以使用 Arrow Function 改寫嗎？ 為什麼？

使用 function return 的方式，可以保證資料的作用域被限定，從而避免元件之間資料互相污染。
可以使用 Arrow Function，功能依然正常，需要注意有無在其中使用 `this` 定義相關資料即可。

2. $ 以及 _ 在 Vuejs 中為保留字。

3. Vue2 以及 Vue3 使用 `template` 屬性時，Vue2 在第一層僅限一個 tag，而 Vue3 修正了這個問題。

4. method, computed, watch 的差異

5. computed 的 getter, setter 使用時機

6. Lifecycle Hooks 的使用時機

7. $nextTick 的使用時機

## 關注點分離

傳統做法：

1. 取得文字
2. 產生節點，寫入文字資料
3. 渲染至畫面上

> 資料通常會在 DOM 元素上，不易提取、操作

關注點分離：

1. 取得文字，寫入資料集
2. 從資料集提取文字資料，產生節點並寫入
3. 渲染至畫面上

> 資料儲存於資料集，方便管理、存取

實作範例：

```js
const app = document.querySelector('#app');

const component = {
  // Data
  data: [
    '這是資料內容',
    '這是資料內容',
    '這是資料內容'
  ],
  // Methods
  removeData(id) {
    this.data.splice(id, 1);
    this.render();
  },
  // 渲染，此部分由 Vue 實作
  render() {
    const str = this.data.map((item, index) => ( /* html */
      `<li>${item} <button type="button" data-id="${index}">刪除</button></li>`
    )).join('');
    app.innerHTML = `<ul>${str}</ul>`;

    const btns = document.querySelectorAll('button');
    btns.forEach(item => {
      item.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        this.removeData(id);
      })
    })
  },
  // Lifecycle Hooks
  init() {
    this.render();
  }
}

component.init();
```
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

## Vue Directives

### 渲染資料

- `{{}}` - mustache，透過左右兩個大括弧將資料渲染到畫面上
- `v-text` - 與 mustache 的使用方式雷同，主要都是用於渲染文字，在與某些語言樣板語法衝突時，可以透過這個指令解決
- `v-html` - 將帶有 HTML tags 的資料進行轉換，例如：`'<p>p元素</p>'`，會在實際頁面上生成一個 p 元素並渲染文字。 應避免使用此語法，使用此語法容易導致有 XSS 的風險。
- `v-once` - 將資料只進行一次渲染。在 v-model 的作用下，通常資料具有雙向綁定、聯動的功能，可以透過此指令令資料只進行一次渲染。

#### 多值渲染

如同原生 js 我們在操縱大量資料的時候，都會透過 for 進行資料的迭代，而 vue 則提供 `v-for` 這個指令來進行大量資料的渲染。

範例程式碼：

```html
<ul>
  <li v-for="(item, key) in itemList" :key="item.unique_id">{{ item.content }}</li>
</ul>
```

`v-for` 並不僅僅只能迭代陣列資料，即使是一個物件型態的資料，`v-for` 也能進行處理，原語法中的 `key` 在陣列中代表的是該筆迭代資料的索引位置，而若迭代的是物件，則 `key` 代表的是該物件的屬性。

在語法後方的 `:key=""` 為搭配 `v-for` 使用的語法，其目的是用來解決 `v-for` 資料渲染錯誤的狀況。vue 透過資料的 `key` 來判斷資料是否更動，並且進而重新渲染，若 vue 發現 `key` 並未更動，則保持原樣，因此使用索引進行 `key` 的綁定，會發生即使資料內容已更新（例如：陣列資料的反轉），資料仍依照 `v-for` 的次序進行索引與 `key` 的綁定，進而造成資料的混亂。

#### `v-if`, `v-else-if`, `v-else`

- `v-if` 與 `v-show` 不同在於 `v-if` 會完全移除該元素的節點。
- 當 `v-if` 與 `v-for` 並用時，`v-if` 擁有更高的優先權，但是一般來說不建議這樣使用，而是在外層加上 `<template>` 先進行判斷再進入迴圈，反之亦可。

```html
<ul>
  <template v-for="item in items">
    <li v-if="item.status">{{ item.content }}</li>
  </template>
</ul>

```

#### 屬性綁定

- 利用 `v-bind:` 針對特定屬性進行綁定，例如圖片屬性 `src`，`<img v-bind:src="imgVar">`
- 縮寫形式，以 `src` 舉例，`<img :src="imgVar">`
- 搭配表達式進行綁定，以 `src` 舉例，

```html
<img v-bind:src="`${imgVar}&w=${imgSize}`">
```

#### 樣式綁定

樣式的綁定可以是物件格式或陣列格式。

```html
<!-- Example 1 -->
<div 
  class="box"
  :class="{ 'bg-danger': true }"
  >
  這是一個 100x100 的盒子
</div>

<!-- Example 2，物件格式置入多個樣式-->
<!-- 只有在 bg-danger 這類帶有 - 連字號字元的樣式，才需要以 ' 單引號進行包裹轉成字串 -->
<div 
  class="box"
  :class="{ 'bg-danger': true, rotate: true }"
  >
  這是一個 100x100 的盒子
</div>

<!-- Example 3，物件格式置入多個樣式，使用資料變數-->
<div 
  class="box"
  :class="objClass"
  >
  這是一個 100x100 的盒子
</div>
<!-- 在 Vue 中的資料 -->
<script>
  // 省略的程式碼
  data() {
    return {
      objClass: {
        'bg-danger': true,
        rotate: true
      }
    }
  }
</script>

<!-- Example 4，陣列形式插入樣式 -->
<div 
  class="box"
  :class="['bg-danger', 'disabled']"
  >
  這是一個 100x100 的盒子
</div>

<!-- Example 5，陣列形式變數型插入樣式 -->
<div 
  class="box"
  :class="arrayClass"
  >
  這是一個 100x100 的盒子
</div>
```

#### 在 `style` 屬性綁定樣式

可以透過物件格式的方式進行樣式的撰寫，樣式名稱與 class 的綁定有些許不同，需要使用小駝峰的方式進行撰寫。
`key` 為 style 屬性，`value` 為 style 的值

```html
<!-- Example 1 -->
<div 
  class="box"
  :style="{ backgroundColor: 'red' }"
  >
  這是一個 100x100 的盒子
</div>

<!-- Example 3，使用變數 -->
<div 
  class="box"
  :style="objStyle"
  >
  這是一個 100x100 的盒子
</div>

<!-- Example 3，陣列形式的 style，陣列中的 style 需要是物件形式  -->
<div 
  class="box"
  :style="[{}, {}, {}]"
  >
  這是一個 100x100 的盒子
</div>
```

### 資料的雙向綁定

主要是透過 `v-model` 這個指令進行，另外，對於不同的表單元件進行綁定，互動時會得到不同的資料回傳。

#### InputText, Textarea

```html
<!-- inputText 單純的文字字串 -->
<input type="text" v-model="name" />
{{ name }}

<!-- textarea 單純的文字字串 -->
<textarea cols="30" rols="3" class="form-control" v-model="text"></textarea>
{{ text  }}
```

#### CheckBox

單選以及複選，分別會回傳得一個單值（可能是 boolean 或者預設值）以及陣列多值。

```html
<!-- 單選 checkbox 回傳 true or false -->
<p>{{ checkAns }}</p>
<div class="form-check">
  <input id="check" type="checkbox" class="form-check-input" v-model="checkAns">
  <label for="check" class="from-check-lable">訂閱</label>
</div>

<!-- 單選 checkbox 回傳預設 true-value or false-value -->
<p>{{ checkAns }}</p>
<div class="form-check">
  <input id="check" type="checkbox" true-value="訂閱" false-value="取消訂閱"  class="form-check-input" v-model="checkAns">
  <label for="check" class="from-check-lable">訂閱</label>
</div>

<!-- 複選 checkbox 回傳一個陣列包含各個單選的 value 值，[ 'blue', 'red' ] -->
<p>{{ checkAns }}</p>
<div class="form-check">
  <input id="check" type="checkbox" value="blue"  class="form-check-input" v-model="checkAns">
  <label for="check" class="from-check-lable">藍色</label>
</div>
<div class="form-check">
  <input id="check" type="checkbox" value="red" class="form-check-input" v-model="checkAns">
  <label for="check" class="from-check-lable">紅色</label>
</div>
```

#### Radio

回傳單一值

```html
<!-- 複選 radio 回傳各個單選的 value 值， 'red' or 'blue' -->
<p>{{ radioAns }}</p>
<div class="form-check">
  <input id="radio" type="radio" value="blue"  class="form-check-input" v-model="radioAns">
  <label for="radio" class="from-check-lable">藍色</label>
</div>
<div class="form-check">
  <input id="radio2" type="radio" value="red" class="form-check-input" v-model="radioAns">
  <label for="radio2" class="from-check-lable">紅色</label>
</div>
```

#### Select

根據單選或多選，回傳單一值或者陣列多值。

使用 `select` 的 `option` 如果沒有指定 value 屬性，預設會回傳 `option` 的內容，最好都使用 value 屬性補上值。

多選只需要在 `select` 加上 `multiple` 不需要而外的設定。而多選的操作，需要滑鼠搭配 `[shift]` or `[cmd]`。

```html{6}
<!-- 單選 -->
<p>{{ selectAns }}</p>
<select name="select" id="select" v-model="selectAns">
  <!-- 預設顯示的 option 如果沒有補上 value=""，由於 v-model 已經將資料進行雙向綁定
  ，但是沒有相應的 value 可以對應，則在顯示的時候會出現空白的情況。 若需要為必選，可以加上 disabled -->
  <option value="" disabled>說吧，你要吃什麼？</option>
  <option
    :value="product.name"
    v-for="product in products"
    :key="product.name"
    >
      {{ product.name }} / {{ product.price }} 元
  </option>
</select>

<!-- 多選 -->
<p>{{ selectAns }}</p>
<select name="select" id="select" multiple v-model="selectAns">
  <option value="" disabled>說吧，你要吃什麼？</option>
  <option
    :value="product.name"
    v-for="product in products"
    :key="product.name"
    >
      {{ product.name }} / {{ product.price }} 元
  </option>
</select>

<!-- 資料結構 -->
<script>
  export default {
  data() {
    return {
      selectAns: '',
      products: [
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '漢堡',
          price: 50,
          vegan: false
        },
        {
          name: '炒麵',
          price: 60,
          vegan: false
        },
        {
          name: '沙拉',
          price: 30,
          vegan: false
        },
      ],
    }
  }
}
</script>
```

### v-on

透過 v-on 綁定偵測、監聽事件，並執行相關的方法。

```html
<!-- v-on -->
<button v-on:click="sayHi" type="button">按鈕</button>
<!-- v-on 縮寫 -->
<button @click="sayHi" type="button">按鈕</button>

<script>
  export default {
    methods: {
      sayHi() {
        console.log('hi');
      }
    }
  }
</script>
```

#### DOM 原生事件

```html
<!-- input change -->
<input @change="onChange" type="text" />

<!-- form submit, 利用 .prevent 修飾符取消預設 -->
<form @submit.prevent="onSubmit">
  <input v-model="text" type="text" />
  <button>提交</button>
</form>

<!-- 動態事件, 可以透過變數動態改變監聽事件 -->
<input @[event]="dynamicEvent" type="text">
<input v-model="event" type="text">

<!-- 物件形式事件, 可以註冊多個事件，但是不能傳入參數 -->
<button @="{ mousedown: down, mouseup: up }" type="button">按</button>
```

#### v-on 修飾符

簡單來說就是對觸發的事件進行簡單的處理，常用的可以大致分為三類

- 按鍵修飾符 - 將事件綁定在特定按鍵上
- 滑鼠修飾符 - 將滑鼠觸發的事件綁定在滑鼠按鍵上
- 事件修飾符 - 針對事件進行簡易的處置，例如：冒泡事件、移除預設

按鍵修飾符：

```html
<!-- 別名修飾，事件從特定按鍵觸發時 -->
<input @keyup.enter="doSomething" type="text" />

<!-- 相應修飾，事件從相應特定按鍵觸發時（我自己歡稱串聯修飾 -->
<input @keyup.shift.enter="doSomething" type="text" />

<!-- 特定鍵，事件從特定按鍵觸發時 -->
<input @keyup.h="doSomething" type="text" />
```

滑鼠修飾符：

```html
<!-- 滑鼠右鍵點擊時觸發 -->
<div @click.right="doSomething" class="box"></div>
```

事件修飾符：

```html
<!-- prevent default -->
<a @click.prevent="doSomething" href="#">prevent linking</a>
```

其餘的修飾符： .stop, capture, .self, .once

.prevent 調用 event.preventDefault();
.stop 調用 event.stopPropagation();

## 生命週期 Lifecycle

兩個主要重點，操作資料在 created, 操作 DOM 在 mounted。在 beforeCreated 資料還沒建立，在 beforeMounted 節點還沒建立。

當資料異動時，會進入 update 的週期。（畫面需要重新渲染
unmounted 則是元件要卸載的週期。

### 資料狀態維持

`v-if` 每次觸發都會重新開始一個新的生命週期，這意味著資料節卸載的同時也會被清除，但是在某些情況下我們並不希望資料狀態被清除，使用 `<keep-alive>` 可以輕鬆的解決這個問題。

使用 `<keep-alive>` 會令元件在被關閉時進入 activate 的生命週期，而如果再次啟動元件則會再次進入 activate 生命週期，而不會重新開始一個新的生命週期。

### `v-if` 與 `v-show` 的差別

`v-if` 判斷為 false 會移除整個節點，這意味著下次觸發時，會重新觸發整個生命週期。 而 `v-show` 僅僅只是使用 `display: none` 將元件隱藏。

### 關於父子元件的生命週期

參考連結：[勇者鬥 Vue 龍 - 父元件及子元件間的生命週期(Lifecycle)](https://peterhpchen.github.io/VuejsQuest/basic/parent-child-lifecycle.html#%E7%88%B6%E5%85%83%E4%BB%B6%E5%8F%8A%E5%AD%90%E5%85%83%E4%BB%B6%E9%96%93%E7%9A%84%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F-lifecycle)

## Vue Router

前端路由

### 巢狀路由

### 具名視圖

```js
// Example 1, 一般的巢狀結構
const routes = [
  {
    path: '/'
    name: 'Home',
    children: [
      {
        path: 'metawall',
        component: () => import('@/views/IndexView.vue')
      }
    ]
  }
]

// Example 2, 具名視圖
const routes = [
  {
    path: '/'
    name: 'Home',
    children: [
      {
        path: 'metawall',
        components: {
          left: () => import('@/views/LeftComponent.vue'),
          right: () => import('@/views/RightComponent.vue')
        }
      }
    ]
  }
]
```

View 或 Component 本質上其實都是 Vue 的元件（Component），不過 View 更像是一個展示畫面的容器， Component 則是具有功能導向的元件，因此經常可以看見在 View 中引入、使用 Component。

### 動態路由

主要解決重複性高的路由結構，例：特定的產品頁面（每個產品帶有不同的編號

結構類似這樣：`/products/:product_id`

透過 Props 實作動態路由

```js
// 如果不是在 routes 透過 props 處理，就只是把相同的程式碼，搬到元件中實作。
const routes = [
  {
    path: '/',
    name: 'Home',
    children: [
      {
        path: 'products/:id',
        props: (route) => route.params.id
      }
    ]
  }
]
```

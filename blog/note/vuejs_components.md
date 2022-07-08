# Vue Components

整個 Vue 就是由 Components 組成的一個 SPA（Single Page Application），理解元件的建立有助於更好的駕馭 Vue。

以下是 Components 的幾個優點：

- 簡化重複的程式碼（複用性
- 避免單一檔案過大（不超過 200，最多不超過 300
- 便於協作、管理（功能獨立拆分，減少衝突的發生
- 將各個功能獨立化（元件資料、狀態獨立

## 元件註冊

- 全域註冊，所有地方都可以使用

```js{1-5,9}
const GlobalComponent = {
  data() {
    return {}
  },
  template: `<div></div>`
};

const app = createApp({});
app.component('ComponentName', GlobalComponent)

app.mount('#app');
```

- 區域註冊，限定在該註冊元件之下，才能使用。

```js{1-6,9-11}
const LocalComponent ={
  data() {
    return {}
  },
  template: `<div></div>`
}

const GlobalComponent = {
  components: {
    LocalComponent, // 掛載在 GlobalComponent 之下的元件
  }
  data() {
    return {}
  },
  template: `<div></div>`
};

const app = createApp({});
app.component('ComponentName', GlobalComponent)

app.mount('#app');
```

## 樣板製作

- 在元件中使用 - `template: '<div>example</div>'`
- x-template - 有點鳥的作法

  ```html
    <script type="text/x-template" id="x-template">
      <div>
        X-Template
      </div>
    </script>

    <script>
      // ... 省略 Vue app 實體建立程式碼
      app.component('Component', {
        template: '#x-template' // 綁定上方的 x-template id
      })
    </script>
  ```

- 單一文件元件 - Vue CLI 中會自動建立，為 HTML CSS JS 的集合體。

## 元件建立

- 搭配 `v-for` 使用
- 搭配 `v-is` 進行綁定

```html
<!-- 使用 v-is 可以不在意標籤名稱 -->
<!-- Example 1，v-is 可以搭配變數進行動態綁定，所以此處使用名字需要補上 ' (單引號) 傳入字串 -->
<div v-is="'componentName'" ></div>

<!-- Example 2，帶入變數，變數的值會是元件的名稱。 ComponentVar = 'ComponentName' -->
<div v-is="ComponentVar">

<!-- Example 3, HTML Table 的限制。 由於 HTML 限制 <tbody> 其後只能接 <tr>，此時則可以透過 v-is 解決問題， v-is 不在乎標籤名稱 -->
<table>
  <tbody>
    <tr v-is="'ComponentName'"></tr>
  </tbody>
</table>
```

## 資料傳遞

### props

我把它想像成自定義的 properties，並透過 v-bind 綁定資料。

往內部傳遞資料，並且不能透過元件內的 v-model 之類的手段修改資料，單向數據流。

若不是使用 `v-bind`，傳入的參數會被認定為字串。 `:props="var"`, `props="strin"`

型別驗證：

不影響運作，主要用來開發資料驗證

```js
export default {
  props: {
    // 型別驗證
    propA: Function,

    // 多型別驗證
    propB: [String, Number],

    // 必要值
    propC: {
      type: String,
      required: true
    },

    // 預設值
    propD: {
      type: Number,
      default: 300
    }

    // 自訂函式
    propE: {
      type: Object
      default() {
        return { money: 300 }
      }
    }

    // 自訂驗證
    propF: {
      validator(value) {
        return value > 1000
      }
    }
  }
}
```

### Emit

我把它想像成發射一個事件，並且可以順便夾帶資料，在外層透過 `v-on` 監聽事件執行相關方法。

向外層傳遞資料。

```js
export default {
  data() {
    return {
      text: '內部往外傳的文字'
    }
  }
  // Emit 驗證
  emits: {
    sendText(value) => {
      if (typeof value !== 'string') {
        console.warn('sendText 的參數型別須為 string!')
      }
      return typeof value === 'string'
    }
  }
  methods: {
    sendData() {
      this.$emit('sendText', this.text);
    }
  }
}
```

## 元件插槽 slot

應該是為了給元件提供一些彈性使用的語法，當在元件內部開啟一個插槽，在外部沒有使用的時候，內部可以徑直使用預設的資料，但是一但外部使用了這個開放的插槽，會讓內部的這些預設值消失，但是此時的插槽可以直接的存取元件外部的資訊，但若還是想要取得元件的資料，則需要透過 slot props 的方式取得。

元件 UI

# Vuejs Advanced

記錄一些 Vue 比較進階的使用方式。

## 資料渲染

### 透過表達式

- 在 `{{ }}` 中使用樣板字面值嵌入資料。
- 呼叫 js 原生方法，例：`{{ varName.split('').reverse().join('') }}`（反轉字串的效果
- 基礎數學運算，例：`{{ 1 + 1 }}`
- 與 `methods` 並用，例如我們有一個 `filter()` 的方法 `{{ filter(varName) }}`

### 使用 `{{ }}` 取代 `console.log()` 將資料直接顯示

### 使用 `v-pre` 令資料如實渲染文字，不進行轉譯

### `v-for` 搭配 `template` 元素在 `<table>` 中進行資料渲染

### 動態屬性綁定

```html
<button type="button" :click="dynamic = dynamic === 'disabled' ? 'readonly' : 'disabled'">切換為 {{ dynamic }}</button>
<input type="text" :[dynamic] :value="name" />
```

### v-model 的修飾符

在資料進行雙向綁定的同時，加上一些處理資料的小功能

- `v-model.lazy` - 延遲同步更新
- `v-model.number` - 數值化，搭配 input type number 會獲得較好體驗
- `v-model.trim` - 移除左右空白字元

### 取得 DOM 事件的 Event Obj 參數

在一般情況下，透過 `v-on` 綁定事件的同時，可以執行一個方法，並且可以透過該方法傳入相關的引數。
但是，如果該方法在觸發時，並沒有額外傳入引數，則在定義方法時使用的第一個參數，可以使用預設會傳入的 Event Obj。

```html
<!-- 未傳入引數 -->
<button @click="doSomething" type="button">點擊</button>

<script>
  export default {
    methods: {
      doSomething(event) {
        // Mouse Event
        console.log(event);
      }
    }
  }
</script>

<!-- 有傳入引數，則可以透過 $event 取得該事件的 Event Obj，需要注意傳入順序 -->
<button @click="doSomething(arg, arg2, $event)" type="button">點擊</button>

<script>
  export default {
    methods: {
      doSomething(param1, param2, event) {
        // Mouse Event
        console.log(event);
      }
    }
  }
</script>
```

### 突破按鍵修飾符的限制

透過判斷 key 以及 keyCode，可以不限於使用按鍵修飾符

```html
<!-- 不同的 event 會產生不同的 Event Obj -->
<input @keyup="doSomething" type="text" />

<script>
  export default {
    methods: {
      doSomething(event) {
        // Keyboard Event
        console.log(event.key, event.keyCode);
      }
    }
  }
</script>
```

## Computed 進階用法： getter, setter

getter 取 data 後進行渲染， setter 接收資料（也可能透過 methods）後改寫 data。

```html
<input v-model.number="num" type="number" />
<button @click="total = num" type="button">更新</button><br />
{{ sum }}

<script>
// 修改前
export default {
  data() {
    return {
      num: 10,
      carts: [],
    }
  },
  computed: {
    total() {
      let total = 0;
      this.carts.forEach((item) => total += item.price);
      return total;
    }
  }
}

// 修改後
export default {
  data() {
    return {
      num: 10,
      sum: 0,
      carts: [],
    }
  },
  computed: {
    total:{ 
      get() {
        let total = 0;
        this.carts.forEach((item) => total += item.price);
        return this.sum || total; // 有 sum 就回傳
      },
      set(value) {
        this.sum = value * 0.8; // 簡單的處理 打折
      }
    }
  }
}

</script>
```

## Watch 進階用法： 深層監聽

監聽物件，需要與資料同名，並且與物件的形式定義。

```js
export default {
  data() {
    return {
      product: {
        name: 'Apple',
        price: 100,
        vegan: true
      }
    }
  }
  watch: {
    product: {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
      },
      deep: true,
    },
  }
}
```
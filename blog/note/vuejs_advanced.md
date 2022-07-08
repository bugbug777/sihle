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

## API

### `$refs`

在欲取得的元素上使用 ref 屬性進行關聯，接著透過 `$refs` 取得頁面上所有使用 ref 進行關聯的元素。

若取得的元素是元件，透過 `$refs` 還可以連帶取得其定義的相關資料、方法。

假如有一關聯元件名為 'modal'，可以透過 . 進行操作，例： `this.$refs.modal.doSomething`

### Teleport

分散式元件，透過 `teleport` 自訂元素位置。

需要注意元件的生成順序，尚未 mounted 的元件，若無法取得元件則無法進行 teleport

```html
<!-- Example 1 -->
<teleport to="title"> 新增的標題 </teleport>

<!-- Example 2 -->
<teleport to="h1"> 新增的標題 </teleport>

<!-- Example 3 -->
<teleport to=".class-name"> 新增 </teleport>
```

### Provide

大範圍跨層級 props。

透過 `provide` 提供資料，以及 `inject` 進行資料注入、使用，常用於授權驗證

```js
// 物件形，若多層元件，資料不會是同步的形式
export default {
  provide: {
    user: {
      name: 'Ming',
      uuid: 77777
    }
  }
}

const Component = {
  template: '<div>{{ user.name }} / {{ user.id }}</div>',
  inject: ['user']
}

// 函式形，若多層元件，資料會是同步的形式，也就是響應式
export default {
  provide() {
    user: {
      name: 'Ming',
      uuid: 77777
    }
  }
}

const Component = {
  template: '<div>{{ user.name }} / {{ user.id }}</div>',
  inject: ['user']
}
```

### 使用 v-model, props, 還有 emit，讓資料進行雙向綁定

若有多個要進行綁定，重複以下多次即可

```html
<!-- 外部 -->
<!-- v-model:propsName="varName" -->
<Component v-model:text="text" />

<!-- 元件內部的語法不容易記憶  -->
<!-- @input="$emit('update:text', $event.target.value)" -->
<!-- 'update:propsName' 是搭配外層 v-model 使用的特殊事件語法 -->
<input @input="$emit('update:text', $event.target.value)" type="text" :value="text" />
```

### 透過 Mixins 重構程式碼，簡化重複區塊

目前還沒有比較好的實作範例可以記錄。

```js
// 不同的 Mixin 可以有不同的生命週期，並且可能重複觸發
// 資料的優先順序，後面覆蓋前面， 自身 > Compo2 > Compo1
export default {
  mixins: [Compo1, Compo2],
  data() {
    return {
      name: 'text'
    }
  },
}
```

### Extend

目前還不清楚實際用途。

Extend 只能進行單一擴展，反正就是只能放一個啦。

執行順序： Extend > Mixin > 元件自身
資料權重： 元件自身 > Mixin > Extend （同名變數覆蓋順序

### 自訂義指令

這東西滿酷的，但是我現在還沒想到任何實用的益處。

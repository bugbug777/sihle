# Vue Options API

紀錄 Options API 的一些學習筆記。

## Options API 與 Composition API 的差異

相較於 Composition API，Options API 的結構較為分明，缺點是在撰寫一些相同商業邏輯時，也會礙於這些架構，導致相同邏輯的程式碼四散在各個區塊。

## Methods

就是寫在 `methods: {}` 裡的方法，與 Composition API 不同處在於，Options API 不需要額外 return 就能夠直接使用。

## Computed

我將其稱為“函式變數"，在使用上有如 vue data 中的變數，但是實際上可以達成函式處理資料的效果。而真正註冊在 computed 時，也是以方法的方式進行定義。

```js
export default {
  data() {
    return {
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
```

### 常用技巧

應用於 search bar

```html
<input v-model.lazy="search" type="text" />

<script>
  export default {
    data() {
      return {
        search: '',
        products: [
          {
            name: 'Apple'
          },
          {
            name: 'Banana'
          },
        ],
        carts: [],
      }
    },
    computed: {
      filterProducts() {
        return this.products.filter((item) => item.name.match(this.search));
      }
    }
  }
</script>
```

## Watch

監聽單一變數，觸發事件對資料進行處理。當事件沒有變化時，不會觸發執行。

```js
export default {
  watch: {
    varWatched(newValue, oldValue) {
      // No need to return data
      console.log(newValue, oldValue);
    }
  }
}
```
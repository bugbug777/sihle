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

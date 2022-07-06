# Javascript ESM

## 使用方式

```html
<script type="module" src="./module.js"></script>
```

## 預設匯出

每個檔案只能有一個預設互吹。

```js
// 匯出語法
export default {};

// 匯入語法
import 自訂名稱 from './module.js';
```

## 具名匯出

每個檔案可以有多個具名匯出。

```js
// 匯出語法
export function fnName() {};

// 匯入語法
import { fnName } from './module.js';

// 全部匯入，不建議使用，會有變數污染的風險
import * as all from './module.js';
```

## Side Effect

```js
// module.js
(function (global) {
  global.$ = 'jQuery 的實作';
})(window)

// 匯入方式
import './module.js'; // 通常會直接執行，常出現於過去的套件
```

## 獨立的變數作用域

ESM 中建立的全域變數無法被其他 script 取得

```html
<script type="module">
  var a = 1;
  window.b = 2;
</script>

<!-- Example 1 -->
<script>
  console.log(a); // 無法取用
</script>

<!-- Example 2 -->
<script module="type">
  console.log(a); // 無法取用
  console.log(b); // 居然可以用
</script>
```

但是傳統的 script 定義全域變數是可以在其他 script 取用到的，

# Javascript Advanced

記錄一些比較進階的觀念、用法

## 語法糖與新增語法

ES6 的語法糖與新增語法的差異，在於語法糖為縮寫形式，不影響運作，邏輯與原來 JS 一樣。
而新增的語法則會影響運作，如 Arrow Function 之中的 This。

### 物件方法的縮寫

```js{4,12}
// 原
const obj = {
  name: 'ABC',
  fn: function() {
    return this.name; // ABC
  }
}

// 改
const obj = {
  name: 'ABC',
  fn() {
    return this.name; // ABC
  }
}
```

### 物件變數的縮寫

```js{7,12}
const person = {
  name: 'ABC'
}

// 原
const people = {
  person: person
}

// 改
const people = {
  person
}
```

### 陣列的展開

```js
const ary1 = [1, 2, 3];
const ary2 = [4, 5];

// 舊
const ary3 = ary1.concate(ary2); // [1, 2, 3, 4, 5]

// 新
const ary4 = [...ary1, ...ary2];
```

### DOM 類陣列轉陣列

轉換時機，需要陣列的所有方法時。

```js
const pseudoAry = document.querySelectorAll('li');
const newAry = [...pseudoAry];
```

### 物件的擴展

```js{2-7,14}
const methods = {
  fn1() {
    console.log('fn1');
  },
  fn2() {
    console.log('fn2');
  }
}

const newMethods = {
  fn() {
    console.log('fn);
  },
  ...methods
}
```

### 函式預設值

```js
function sum(a, b = 1) {
  return a + b
}

const c = sum(1); // 2
```

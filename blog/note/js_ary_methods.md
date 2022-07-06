# JS 陣列處理技巧

紀錄常見、好用的陣列處理技巧

## for loop 以及 Array.prototype.forEach 的差異？

for loop 可以 break .forEach 不行。某種層面來說 for 的效能似乎比較好。

參考連結：[JS - for 迴圈與 forEach 有什麼不同](https://www.casper.tw/development/2020/10/05/js-for-loop-vs-for-each/)

## forEach Syntax

```js
const ary = [1, 2, 3];

// ary.forEach(callback);
ary.forEach((item, index, array) => {
  // Code Block
  console.log(item);
})
```

## 使用 `forEach()` 與 `filter()` 進行篩選的差異？

目前的電腦效能都相當好，所以差異不大。

## 透過 if 進行資料過濾

## 搭配樣板字面值組合字串

## 透過 `map` 處理、組合回傳一個新陣列

## 透過 `filter` 設定條件、判斷結果為 true 的值，就回傳並組合成一個陣列

## 使用 `findIndex` 設定條件、判斷結果為 true 的值，就回傳該值得索引位置

## 使用 `map` 回傳、組合字串

```js
// Example 1, forEach
let str = '';
people.forEach(item => {
  str += `<li>${ item.order }, ${item.price}</li>`;
})

// Example 2, map
const str = people.map(item => `<li>${ item.order }, ${item.price}</li>`).join('');

```

## 使用 `reduce` 進行加總，回傳最後結果

```js
// syntax
ary.reduce((accumulator, currentValue, index, array) => {
  // code block
  console.log(accumulator, currentValue);

  return currentValue // 這會是下一個迭代的 accumulator
}, initValue)

// Example, 縮寫
const total = ary.reduce((prev, item) => prev + item.price, 0);
```

## 使用 `sort` 進行排序，會回傳排序後的新陣列

```js
// Syntax
ary.sort((a, b) => {
  return a - b; // 透過正負數判斷，進行排序
})

// Example
const newAry = ary.sort((a, b) => a.price - b.price);
```

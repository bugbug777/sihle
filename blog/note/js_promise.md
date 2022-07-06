# Promise

處理非同步行為。

## 非同步概念

正常情況下的資料取得狀況。

```js
const component = {
  getData() {
    setTimeout(() => {
      console.log('取得遠端資料！');
    }, 0)
  },
  init() {
    console.log('Start'); // 1
    this.getData(); // 3
    console.log('End'); // 2
  }
}

component.init();
```

## 基礎使用 Promise

```js
// 透過 Promise 封裝可以使用 .then() .catch() 取得資料
const promiseGetData = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve('取得遠端資料！');
      } else {
        reject('發生異常！');
      }
    }, 1000);
  })
}

promiseGetData(true)
  // 成功接收
  .then(res => {
    console.log(res); // 取得遠端資料！
  })
  // 失敗捕捉
  .catch(err => {
    console.log(err)
  })
```

## 串接使用

```js
const promiseGetData = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve('取得遠端資料！');
      } else {
        reject('發生異常！');
      }
    }, 1000);
  })
}

promiseGetData(true) // 第一次發送請求
  // 接收第一次請求
  .then(res => {
    console.log(res); // 取得遠端資料！
    return promiseGetData(true); // 第二次發送請求
  })
  // 接受第二次請求
  .then(res => {
    console.log(res); // 取得遠端資料！
  })
```

## AJAX & Promise & axios

釐清 AJAX, Promise, 以及 axios

### 什麼是 AJAX？

非同步 JavaScript 及 XML（Asynchronous JavaScript and XML，AJAX） 並不能稱做是種「技術」，而是 2005 年時由 Jesse James Garrett 所發明的術語，描述一種使用數個既有技術的「新」方法。

### 什麼是 Promise？

用於處理非同步操作的 JS 語法，透過 Promise 處理非同步操作，可以利用 .then() 接收成功返回的結果， .catch 捕捉錯誤返回的結果

由於該語法可以透過串接的方式處理非同步的操作，可以有效的處理 callback hell 的問題。

### 什麼是 axios？

一個基於 Promise 建構的函式庫，好用！！
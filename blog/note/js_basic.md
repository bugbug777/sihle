# Javascript Basic

紀錄基本的觀念、方法

## var, let, const 差異

## 變數的宣告

- 未宣告，a 為全域屬性，附屬於 Window 物件

```js
function fn() {
  a = 0;
}

fn();
console.log(a); // a = 0
// console.log(window)
```

- 於函式中宣告，a 為區域變數

```js
function fn() {
  var a = 0;
}

fn();
console.log(a); // a is not defined
```

- 嘗試刪除全域屬性、全域變數

```js
// 屬性被刪除了
a = 0;
delete window.a;
console.log(window);

// 變數無法刪除，還存在
var b = 1;
delete window.b;
console.log(window);
console.log(b);
```

## 作用域

### var 的作用域

```js
function fn() {
  var a = 1;
  debugger;
}
fn();
```

### var 的辭法作用域

var 的作用域在程式碼寫完當下就確定了

```js
var a = 0;
function fnA() {
  console.log(a); // a = 0
}
function fnB() {
  var a = 1;
  console.log(a); // a = 1
  fnA();
}
fnB();
```

### 奇怪的 var

a 拿不到值，b 居然可以拿到值

```js
function fn() {
  var a = 2;
}
console.log(a);
{
  var b = 1;
}
console.log(b);
```

for 迴圈裡面的 i 污染到全域變數了

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i)
  }, 0)
}
console.log(i);
```

var 在變數賦予值之前取值（ hoisting ）

```js
console.log(a); // undefined
var a = 1;
```

## 比較 let 與 var

let 的作用域只存在大括號內

```js
// a is not defined

// example 1
{
  let a = 1;
}
console.log(a); // a is not defined

//example 2
function fn() {
  let a = 1;
}
console.log(a); // a is not defined
```

- var 的作用域在 function 內
- let 的作用域在 {} 內

let 在全域宣告，不會變成全域屬性，但是 var 會

```js
var a = 1;
let b = 2;
console.log(window);
```

let 不能重複宣告

```js
let a = 1;
let a = 2;
```

let 雖然有類似於 var 的 hoisting 行為，但是不允許提前取值。
在這個宣告與取值之間的區塊有個名詞叫做，暫時性死區（ TDZ ）
因此，宣告時應盡量在開頭宣告變數。（ 我也不懂為什麼有人不在開頭宣告變數

```js
function fn(a) {
  console.log(a) // a = 1

  // example 1, 可以跑
  var a = 2;
  console.log(a); // a = 2

  // example 2, 會報錯
  let a = 2;
  console.log(a);
}
fn(1);
```

### let 與 const 的差異

- let 可以重新賦予值
- const 不能夠重新賦予值

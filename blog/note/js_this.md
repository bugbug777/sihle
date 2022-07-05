# Javascript This 運作機制

了解 This 的作用機制

## 不同情境函式中使用 this

傳統函式：

```js
function fn(params) {
  console.log(params, this, window, arguments)
}
fn([1, 2, 3]); // this 指向 window
```

物件方法：

```js
const obj = {
  fn: function(params) {
    console.log(params, this, window, arguments)
  }
}
obj.fn([1, 2 ,3]); // this 指向 obj
```
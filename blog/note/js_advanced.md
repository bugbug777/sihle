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

## 箭頭函式

語法範例程式碼：

```js
// Example 1
const fn = (params) => {
  const values = params;
  return values;
}

// Example 2
const fn = (params) => ({
  params;
});

// Example 3
const fn = params => params;
```

### 與 this 併用

```js
// Example 1
var name = 'global';
const person = {
  name: 'Ming',
  callName: function() {
    console.log('1', this.name); // Ming
    setTimeout(function() {
      console.log('2', this.name); // global
      console.log('3', this); // window
    })
  }
}

// Example 2, 箭頭函式沒有自己的 this
var name = 'global';
const person = {
  name: 'Ming',
  callName: function() {
    console.log('1', this.name); // Ming
    setTimeout(() => {
      console.log('2', this.name); // Ming
      console.log('3', this); // person
    })
  }
}

// Example 3, 箭頭函式沒有自己的 this
var name = 'global';
const person = {
  name: 'Ming',
  callName: () => {
    console.log('1', this.name); // global
  }
}

// Example 4, 箭頭函式沒有自己的 this
var name = 'global';
const person = {
  name: 'Ming',
  callMe() {
    const callName = () => {
      console.log('1', this.name); // Ming
    }
    callName();
  }
}
```

### 避免 this 指向錯誤

```js
// Example 1
var obj = {
  someone = 'Someone',
  fn() {
    // 透過 vm 預先存取 this
    const vm = this;
    setTimeout(function() {
      console.log(vm.someone); // Someone
    })
  }
}

// Example 2
var obj = {
  someone = 'Someone',
  fn() {
    setTimeout(() => { // 透過 arrow func 繞開，徑直取得外層的 this 作用域
      console.log(this.someone); // Someone
    })
  }
}
```

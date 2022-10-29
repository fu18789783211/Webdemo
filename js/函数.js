// 使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用。
var fun1 = function () {
  return console.log('fun1')
}

// 使用函数声明的形式声明的函数会被声明提前， 可以先调用在声明
function fun2(p1, p2) {
  console.log('fun2', p1, p2)
}
// 箭头函数
var fun3 = (p1, p2) => {
  console.log('fun3', p1, p2)
}
// 立即执行函数
(function () {
  console.log('自执行函数，没有返回值fun')
})()

fun1();
fun2(1, 2);
fun3(2, 3);


// 高阶函数
// 高阶函数举例2：把其他区函数作为返回值
function fn1() {
  let a = 20;

  return function () {
      console.log(a);
  };
}

const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
foo();


var fun1 = function () {
  return console.log('fun1')
}

function fun2(p1, p2) {
  console.log('fun2', p1, p2)
}

var fun3 = (p1, p2) => {
  console.log('fun3', p1, p2)
}

(function () {
  console.log('自执行函数，没有返回值fun')
})()

fun1();
fun2(1, 2);
fun3(2, 3);
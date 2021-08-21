// 空对象
var a=null;
console.log(a);

// undefined
// 变量声明未赋值 ，则控制台打印为undefined
var b;
console.log(b);

// 未声明是用typeof显示underfined

// 函数没有返回值也会打印undefined

// 调用函数，如果没有传参，会显示underfined
function foo(name) {
    console.log(name);
}

foo(); // 调用函数时，未传参。执行函数后的打印结果：undefined

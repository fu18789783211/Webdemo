// 空对象
var a=null;
console.log(a);

// undefined
// 变量声明为赋值则控制台打印为undefined
var b;
console.log(b);
// 函数没有返回值也会打印undefined

function foo(name) {
    console.log(name);
}

foo(); // 调用函数时，未传参。执行函数后的打印结果：undefined

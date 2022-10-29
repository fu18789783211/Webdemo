// 在js中所有数值都是number类型，包括整数、浮点数
var abc = 100;
var bc = 100.1;
console.log(typeof abc);
console.log(typeof bc);

// NaN为非数值
console.log('ac' / 18);
console.log(typeof NaN);

// 连字符和加号的区别
// 加号两边为number类型则为相加，如果为字符则为连字符
console.log("连" + "字" + "符");
console.log("连+字+符");

// 隐式转换
//除了加号 （ - * / % ）这几个符号会隐式转换
console.log('4' + 3 - 3);

// 处理数学运算的精度问题
//  toFix() 方法进行小数的截取 返回定点数字的字符串
// 语法为 numobj.toFix(digit)
// function cutnum(x){
//     return Number.parseFloat.toFixed(3);
// }
// console.log(cutnum(1.1234));
// const a=123.1234;

// a.toFixed(2);
// console.log(a);




// a = b;
// 把b的值赋给a，b不变。
// 将等号右边的值，赋给左边的变量；等号右边的变量，值不变。
                        //a		b       c
var a = 1;              //1
var b = 2;              //1     2
var c = 3;              //1     2       3
a = b + c;              //5     2       3
b = c - a;              //5     -2      3
c = a * b;              //5     -2      -10
console.log(a);
console.log(b);
console.log(c);


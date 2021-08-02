// 在js中所有数值都是number类型，包括整数、浮点数
var abc=100;
var bc=100.1;
console.log(typeof abc);
console.log(typeof bc);

// NaN为非数值
console.log('ac'/18);
console.log( typeof NaN);

// 连字符和加号的区别
// 加号两边为number类型则为相加，如果为字符则为连字符
console.log("连"    +   "字"     +      "符");
console.log("连+字+符");

// 隐式转换
//除了加号 （ - * / % ）这几个符号会隐式转换
console.log('4'+3-3);

// 处理数学运算的精度问题
//  toFix() 方法进行小数的截取
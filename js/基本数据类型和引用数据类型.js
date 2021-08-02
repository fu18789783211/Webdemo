// 基本数据类型（值类型）：String 字符串、Number 数值、Boolean 布尔值、Null 空值、Undefined 未定义
// 引用数据类型（引用类型）：Object 对象。
// 内置对象 Function、Array、Date、RegExp、Error等都是属于 Object 类型。
// 也就是说，除了那五种基本数据类型之外，其他的，都称之为 Object类型。

// 基本数据类型：传数值
var a=100;
var b=a;
a++;
console.log(a);//a=101
console.log(b);//b=100

//引用数据类型:传地址
var obj1= new Object();
obj1.name='yyds'
var obj2=obj1;//传地址
obj1.name='yygq'//修改obj1的值
console.log(obj1);
console.log(obj2);

// JS中，所有的变量都是保存在栈内存中的


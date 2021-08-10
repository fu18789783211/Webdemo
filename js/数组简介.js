// 创建数组对象
var arr=[];//空数组
var arr2=[1,2,3];//有初始值的数组

// 方式二：使用构造函数创建数组
var arr3=new Array();
var arr4=Array();
// 数组中可以存放任意类型的数据，还可以存放多维数组
// str.length为数组长度，而数组长度为元素个数，与索引号不同
// JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串
var arr1 = [11, 12, 13];
var arr2 = [21, 22, 23];

//获取数组中的元素
console.log(arr1[0]);

// 修改数组 arr1 的 length
arr1.length = 1;
console.log(JSON.stringify(arr1));

// 修改数组 arr2 的 length
arr2.length = 5;
console.log(JSON.stringify(arr2));



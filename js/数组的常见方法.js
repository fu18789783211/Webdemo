// isArray()：判断是否为数组
const a=[1,2];
console.log(Array.isArray(a));

// toString()：数组转换为字符串
console.log(a.toString());//1  形式：数组.tostring
console.log(String(a));//2  
console.log(a.join('.'));//3

// Array.from()：将伪数组转换为真数组  形式 array = Array.from(arrayLike);
var name='weishuzu';
console.log(array =Array.from(name));

// Array.of()：创建数组   作用：根据参数里的内容，创建数组。
console.log(Array.of('a','b','c'));   
// 补充：new Array()和 Array.of()的区别在于：当参数只有一个时,但是参数要为数字，前者表示数组的长度，后者表示数组中的内容。
var t2 =new Array(1);
var t1 = Array.of(1);
console.log(t1);
console.log(t2);

// 数组元素的添加和删除
// push()：向数组的最后面插入一个或多个元素，返回结果为新数组的长度。会改变原数组，因为原数组变成了新数组。











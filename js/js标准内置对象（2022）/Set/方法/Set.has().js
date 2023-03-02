// 语法：
// has(value)  value 测试 Set对象中是否存在的值；

// 返回值 ：如果Set对象如果有指定值的元素，返回 true；否则返回 false


var set = new Set();

set.add(111);
set.has(111);

const object = {key1:"对象"};
set.add(object);
set.has(object);//true

set.add({key:1});
set.has({key:1});//不同的对象引用,false
console.log(set.has({key:1}));
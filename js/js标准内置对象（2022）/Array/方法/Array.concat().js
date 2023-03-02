// concat()：此方法将两个数组或多个数组合并到一起，没有改变原数组，而是返回一个新数组；

// 语法：
concat();
concat(value0);
// value0：数组的和或值，合并成一个新的数组；
       // 如果没有所有valueN参数，就会返回调用此方法的现存数组的一个 浅拷贝
concat(value0,value1);
concat(value0,value1,/*...,*/valueN);



const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = array1.concat(array2);
console.log(array3);// output:['a','b','c','d','e','f']

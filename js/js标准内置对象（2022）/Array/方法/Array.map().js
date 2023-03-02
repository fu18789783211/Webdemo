// Array.map()方法创建一个新数组，这个新数组由原数组的每一个元素都调用一个提供的函数所返回的值组成
const array1 = [1,2,3,4,5];
//新数组 array2
const array2 = array1.map( x => x * 2);
console.log(array2);  // 2,4,6,8,10
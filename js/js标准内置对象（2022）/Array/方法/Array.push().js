// push():从数组末尾添加元素，并返回新数组的长度

// 语法：
push(element0); // element0 被添加到数组末尾的元素
push(element0,element1);
push(element0,element1,/*...,*/elementN);



const animals = ['pigs','goats','sheep'];
const count = animals.push('cows');
console.log(count);//4
console.log(animals);//['pigs','goats','sheep','cows'];

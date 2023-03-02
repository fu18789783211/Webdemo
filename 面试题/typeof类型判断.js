
// js数据类型：（原始类型或者基本数据类型）number，undefined，null，String，Symbol(ES6刚加入的值，表示独一无二的值)，boolean
          // （引用数据类型或者对象类型）Array,Object,Function还有两个：RegExp，Date


// typeof能正确判断原始类型；instanceof通过原型链正确判断对象类型

// typeof对于原始类型来说，除了null都可以显示正确类型,还有 instanceof不能判断原始类型s
typeof 1//number
typeof '1' //String
typeof Symbol //Symbol
typeof undefined //undefined
typeof true //boolean
//typeof对于对象来说，除了函数都会返回Object,所以说typeof并不能显示
typeof [] //Object
typeof {} //Object
typeof console.log();//Function
// 如果我们想要正确的判断对象类型，就需要用instanceof的内部机制的 原型链 来判断
const Person = function (){};//函数表达式创建的函数，声明不会提前，所以不能提前调用
const p1 = new Person();// p1声明为对象
p1 instanceof Person //true

const str = '1234';
str instanceof String // false,非对象实例,是原始类型
typeof str;// 'string'
Boolean(typeof str)//true

const str1 = new String('1234');
str1 instanceof String //true



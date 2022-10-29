// 面对对象
// 在 JavaScript 中，对象是一组无序的相关属性和方法的集合。
// 对象的作用是：封装信息。比如Student类里可以封装学生的姓名、年龄、成绩等。
// 对象具有特征（属性）和行为（方法）。
var obj = ['王二','30','前锋','60'];

var person={};//对象
//对象.属性名=属性值
person.name='王二';
person.age=30;
person.job='前锋';
person.weight=60;


var obj=new Object();
obj.name=function(){
    console.log('fuxiaorong');
}

console.log(obj.name);//输出方法
console.log('\n');
console.log(obj.name());//调用函数，即输出函数的返回值,另外没有返回值会显示undefined

//对象的属性值，也可以是一个对象
var obj1=new Object();
obj1.text='yes';
var obj2=new Object();
obj2.text='no';

obj1.text=obj2;
console.log(obj1.text.text);



// 1.内置对象：
// 由ES标准中定义的对象，在任何的ES的实现中都可以使用
// 比如：Object、Math、Date、String、Array、Number、Boolean、Function等。

// 2.宿主对象：
// 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象。
// 比如 BOM DOM。比如console、document。 

// 3.自定义对象：
// 由开发人员自己创建的对象
// 通过 new 关键字创建出来的对象实例，都是属于对象类型，比如Object、Array、Date等




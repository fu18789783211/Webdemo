Set.add();//如果Set没有相同值的元素，则会添加一个的指定值的新元素到Set对象；
// 语法： add(value); value为添加的值

var set = new Set();

set.add('111');
set.add('222').add('333');
set.add('444').add('444');


console.log(set); //  111 222 333 444
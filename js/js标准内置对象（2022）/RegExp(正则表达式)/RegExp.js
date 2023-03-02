// 正则表达式是用于匹配字符串中字符组合的模式，在js中，它也是对象；
// 它可以使用RegExp的exec和test方法；String的match,matchall,replace,search,split方法。

// 正则表达式有两种方式
// 第一种、使用字面量创建正则表达式
var re = /ab+c/;
// 第二种、调用RegExp对象的构造函数；
var re = RegExp("ab+c");

var parentheses = /a(b+c)/ //正则表达式里的括号代表的是记忆设备，括号里的字符串会被记一下以备后续使用；

// a|b  等同于 [ab] 称为 a或b
// ^ 只匹配字符开头   /^A/不能匹配an A，可以匹配An E 
// + 可以匹配前面的表达式一次或多次
// [^A] 反向字符集，匹配任何方括号中没有出现的字符
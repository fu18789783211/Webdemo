// 在js中只有三种类型转换情况：分别是 转换成布尔值，转换成数字，转换成字符串
// 原始类型
// number 转布尔值 除了 -0，0，NaN 都是true
//        转字符串 1=>'1'
// string 转数字 '5'=>5 'a'=>NaN
//        转布尔值 除了空串都是true
// undefined 转布尔值 false
// null 转布尔值 false
//      转数字 为0；
// Symbol 转字符串  'true'
//        转数字  报错
// Boolean  转字符串  'true''false'

// 引用类型 转布尔值  TRUE
//         转数字（除了数组） NaN
// Array（数组（引用类型））  转字符串[1,2] => '1,2'
//                      转数字 空字符串为0，''=> 0；存在一个元素且元素为数字转数字，其他情况转NaN
// Object（对象（引用类型）） 转字符串  '[object,Object]'
// Function （函数（引用类型））转字符串  'true'



// 在条件判断中 转boolean类型
//  除了undefined,null,0,-0,NaN,'',其他都为 true

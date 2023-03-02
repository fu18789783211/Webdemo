
//  逻辑或 ||  ，只要有一个 true，整体就是 true
// 语法：expr1 || expr2

// 转换成 false 的表达式实例有：null,NaN,undefined,空字符串(or,or, "",'',`` ),0

o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
o6 = false || 'Cat'      // f || t returns "Cat"
o7 = 'Cat' || false      // t || f returns "Cat"
o8 = ''    || false      // f || f returns false
o9 = false || ''         // f || f returns ""
o10 = false || varObject // f || object returns varObject

// JSON.stringify 表示将js对象和值转换成字符串

// 如果 函数 或 undefined(空格) 被单独转换时会显示 undefined
// 1、函数，undefined，symbol是在序列化中被忽略(非数组对象的属性时)或者 被转换成null（出现在数组中），或者函数,undefined单独会被转换成undefined；
// ​2、布尔值，字符串，数字会转换成原始值；
// ​3、NAN，null，Infinity会被当作null值来转换;
// Javascript的14个全局函数
// （1）decodeURI()
// 参数：string
// 功能：对encodeURI()编码过的URI进行解码

// （2）decodeURIComponent()
// 参数：string
// 功能：对encodeURIComponent()编码过的URI进行解码

// （3）encodeURI()
// 参数：string
// 功能：字符串某些字符将被十六进制的转义序列进行替换

// （4）encodeURIComponent()
// 参数：string
// 功能：可把字符串作为URI组件进行编码

// （5）escape()
// 参数：string
// 功能：escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串

// （6）unescape()
// 参数：string
// 功能：可以使用 unescape() 对 escape() 编码的字符串进行解码

// （7）eval()
// 参数：string
// 功能：eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。

// （8）getClass()
// 参数：javaobj
// 功能：返回一个 JavaObject 的 JavaClass。

// （9）isFinite()
// 参数：number
// 功能：检查其参数是否是无穷大

// （10）isNaN()
// 参数：x
// 功能：用于检查其参数是否是非数字值

// （11）Number()
// 参数：object
// 功能：把对象的值转换为数字

// （12）parseInt()
// 参数：string(必写) radix（可选）表示要解析的数字的基数。该值介于 2 ~ 36 之间。
//      如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
// 功能：解析一个字符串，并返回一个整数
// 返回值：返回解析后的数字

// （13）parseFloat()
// 参数：string
// 功能：可解析一个字符串，并返回一个浮点数。
// parseFloat 是全局函数，不属于任何对象。

// （14）String()
// 参数：object
// 功能：把对象的值转换为字符串
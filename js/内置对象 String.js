// 字符串的所有方法，都不会改变原字符串
//      查找字符串
// 1、indexOf()/lastIndexOf()：获取字符串中指定内容的索引
var str = 'abcdefg';
// 索引值=str.indexOf();    索引值为-1时为没有找到指定字符
console.log(str.indexOf('b'));//从左往右寻找单个字符
console.log(str.indexOf('de'));//从左往右寻找字符串
// 索引值=str.indexOf(查找的字符，[查找的初始位置]),但是字符的位置还是原字符串的顺序，初始位置之前的字符不会遍历到
console.log(str.indexOf('g', 4));

// 2、search()：获取字符串中指定内容的索引（参数里一般是正则）
var sea = 'abcde';
console.log(sea.search('bc'));//正则表达式：/ab

// 3、includes()：字符串中是否包含指定的内容,返回值为布尔值，true、false
// str.includes('字符'，[position]);
var inc = 'abcde';
console.log(inc.includes('cd'));
console.log(inc.includes('de', 1));

// 4、startsWith()：字符串是否以指定的内容开头
// 布尔值=str.startsWith('abcdef',[position]); position不指定默认为零
const sta = 'startswith';
console.log(sta.startsWith('with', 2));//从左到右

// 5、endsWith()：字符串是否以指定的内容结尾
// position表示检索长度，如果不指定则为str.length
const end = 'endswith';
console.log(end.endsWith('a', 2));//从左到右到检索结束位置

// 获取指定位置的字符
// 一般打印数组和 json 的时候用索引，打印 String 不建议用索引。
// str[index]与charAt[index]效果一样
var str1 = 'abcd';
console.log(str1.charAt(2));

// 返回字符串指定位置的 字符 的 Unicode 编码。不会修改原字符串。
var cca = 'abc';
console.log(cca.charCodeAt(0));


// 字符串截取，解释：从字符串中截取指定的内容。不会修改原字符串，而是将截取到的内容返回。
// 负数为从倒数开始，slice（开始位置，结束位置）  包左不包右，左大于右，返回值为空
var sli='zfcjq';
console.log(sli.slice(1,3));
// 2、substring()与slice（）类似，不能有负值，左大于右，交换左右。

// 3、substr(索引开始位置，截取长度)，从字符串中截取指定的内容。不会修改原字符串，而是将截取到的内容返回。

// String.fromCharCode()，根据字符的 Unicode 编码获取字符。
//     新字符串 = str1.concat(str2)； //连接两个字符串

// split(分隔符)：字符串转换为数组 【重要】，但不会改变字符串
//split()方法：字符串变数组
var str3 = '千古壹号|qianguyihao|许嵩';
console.log('结果1：' +str3.split()); // 无参数，表示：把整个字符串作为一个元素添加到数组中。
console.log(str3.split('')); // 参数为空字符串，则表示：分隔字符串中每一个字符每一个元素，分别添加到数组中
console.log(str3.split('|')); // 参数为指定字符，表示：用 '|' 分隔字符串。此分隔符将不会出现在数组的任意一个元素中
console.log(str3.split('许')); // 同上

//replace()方法：替换
var str2 = 'Today is fine day,today is fine day !';
console.log(str2);
console.log(str2.replace('today', 'tomorrow')); //只能替换第一个today
console.log(str2.replace(/today/gi, 'tomorrow')); //这里用到了正则，才能替换所有的today

// repeat()：重复字符串
const name = 'qianguyihao';
console.log(name.repeat(2)); // 打印内容：qianguyihaoqianguyihao















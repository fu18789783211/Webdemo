// 字符串
// 字符串型可以是引号中的任意文本，其语法为：双引号 "" 或者单引号 ''。  
// 同类引号不能嵌套：双引号里不能再放双引号，单引号里不能再放单引号
// 单引号里可以嵌套双引号；双引号里可以嵌套单引号
var str = '\\今\b天\t天\r真\n不错'
console.log(str);
// 获取字符串长度
console.log(str.length);
// 拼接字符串
var str = 'shen' + 666
console.log(str)
var obj = { name: '字符串拼接', age: 28 };
var str2 = '字符串拼接' + obj;
console.log(str2);



// 字符串的不可变性
// 字符串里面的值不可被改变。虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间
var str4 = '之前';
str4 = '现在';
console.log(str4);

// 模板字符串（模板字面量）
var name = 'html';
var age = 23;
console.log('我是' + name + '年龄:' + age);//传统写法，不能换行
console.log(`我是${name}年龄为${age}`);//es6写法，括号里用的是反引号 ``

// rest参数
// rest参数和扩展运算符都是ES6新增的特性。
// rest参数的形式为：...变量名；扩展运算符是三个点（...）。
add(1, 2, 3, 4);
function add(...sum) {
    let num = 0;
    for (var a of sum) {
        num += a;
    }
    return num;
}
// 模板字符串插入表达式
const a = 5;
const b = 10;
console.log(`这是${a + b}
不是${2 * a + b}`);//现在的写法
// 模板字符串支持换行
const result = {
    name: 'fu',
    age: '30',
    sex: '男',
};
const html = `<div>
            <span>${result.name}</span>
            <span>${result.age}</span>
</div>`;
console.log(html);



// 模板字符串中可以调用函数
function net() {
    const a = 'baidu';
    return a;//返回字符
}
console.log(`www.${net()}.com`);

// 模板字符串支持嵌套使用   
const namelist = ['许嵩', '成龙'];
function my() {
    return `<ul>
        ${namelist.map((item) => `<li>${(item)}</li>`)
            // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。类似于for循环，遍历数组中每一项
            // join('') 的意思是，把数组里的内容合并成一个字符串
            .join('')}
    </ul>`;
}
// console.log();
document.body.innerHTML = my();
// innerHTML:
// innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML。
// 语法：tablerowObject.innerHTML=HTML


//布尔值：boolean
// 布尔型有两个值：true 和 false。主要用来做逻辑判断： true 表示真，false 表示假。 true 按 1 来算 ，false 按 0 来算。
const ab=true;
console.log(typeof ab);



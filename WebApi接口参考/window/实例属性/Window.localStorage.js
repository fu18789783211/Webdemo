// h5的新特性 window.localstorage
// localStorage中的键值对总是以字符串的形式存储，而且存储在localstorage中的数据可以长期保留(没有设置过期时间)

// 增加数据项
localStorage.setItem('myCat','tom');
//读取数据项
let cat = localStorage.getItem('maCat');
//移除数据项
localStorage.removeItem('maCat');
//移除所有数据项
localStorage.clear();
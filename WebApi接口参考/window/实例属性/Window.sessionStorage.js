// window.sessionStorage
// 存储在sessionstorage中的数据会在页面会话结束后被清除


// 增加数据项
sessionStorage.setItem('myCat','tom');
//读取数据项
let cat = sessionStorage.getItem('maCat');
//移除数据项
sessionStorage.removeItem('maCat');
//移除所有数据项
sessionStorage.clear();
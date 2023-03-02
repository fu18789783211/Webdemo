// 语法：Promise.all(iterable);  返回一个Promise实例
// iterable类型有 Array ,String,Map，Set；
// 1、Promise实例的resolve回调执行是每一个promise都resolve回调执行都结束，或者说 iterable 没有 promise，
// 2、Promise实例的reject回调执行是任意一个promise的rejected回调执行或者输入不合法的promise就会抛出错误，Promise就会第一个抛出reject
const promise1 =Promise.resolve(3);
const promise2 =42;
const promise3 =new Promise((resolve,reject)=>{
  setTimeout(resolve,100,'foo');
});

Promise.all([promise1,promise2,promise3]).then((values)=>{
  console.log(values);
})

// 方法
// Promise.all(iterable) 接收一个iterable类型的值  （ES6的iterable类型的有 array，Map，Set）
// iterable 是一个可迭代对象 ，如array，String
// 任何情况下返回结果的值为数组
// 返回值： 如果传入的可迭代对象iterable为空的话，就会同步返回‘已完成（alreay resolved）’状态的 promise
          //如果传的不是promise的话，就会返回异步完成；在google chrome 58中则会返回已完成
          //在其它情况下，返回一个正在处理（pending）的promise，在所有返回promise或者有一个失败的情况下异步的完成或失败，再返回完成或失败。

// promise.race(iterable) 一旦某个迭代器返回解决或拒绝，总的promise就会返回解决或拒绝；
// 如果传的参数是一个空的迭代对象，将处于永久等待状态；
// 如果迭代包含一个或多个非承诺值和已解决/失败的承诺，则解析迭代为第一个值；
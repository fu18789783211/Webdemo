

// 事件循环：
  // 同步任务和异步任务分别进入不同执行环境，同步进入的是主线程，即主执行栈；异步进入的是 Event Queue；
  // 先执行完主线程中的任务，再去执行Event Queue里的任务；
// 两个任务分为宏任务和微任务
// 宏任务（）：
          // 整体代码 script;
          // setTimeout;
          // setInterval;
          // setImmediate (Node独有)
          // I/O口;
          // UI交互（浏览器独有）;
          //requestAnimationFrame(浏览器独有)
// 微任务（microTask）：
          // Promise;
          // Process.nextTick;（Node独有）
          // MutationObserver；(监听DOM树变化)
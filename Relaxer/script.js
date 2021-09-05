const circle = document.getElementById('Circle');
const text = document.getElementById('text');


// // 总时间
// var totaltime=7500;
// var holdtime=1500;
// var zoomtime=6000;


// animationzoom();
// // 动画缩放
// function animationzoom(){
//     // 放大部分
//     circle.className='Circle enlarge';
//     text.innerText='Breathe In!';

//     setTimeout( ()=>{
//         text.innerText='Hold';

//         setTimeout( ()=>{
//           // 缩小部分
//             text.innerText='Breathe Out';
//             // circle.className='circle narrow';
//         },holdtime);

//     },zoomtime);

// }

//   setTimeout 语法
// var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
// var timeoutID = scope.setTimeout(function[, delay]);
// var timeoutID = scope.setTimeout(code[, delay]);



// 重复调用这一流程
// setInterval(animationzoom, totaltime);
// setInterval 语法
// var intervalID = scope.setInterval(func, delay, [arg1, arg2, ...]);
// var intervalID = scope.setInterval(code, delay);


// enlarge
// hold
// narrow
// totaltime
const totaltime = 7500;
const narrowtime = 3000;
const holdtime = 1500;
const enlargetime = 3000;
animationzoom();
function animationzoom() {
    setTimeout(() => {
        text.innerText = 'Breathe In!';
        circle.className = 'circle narrow';
    }, narrowtime);

    setTimeout(()=>{
        text.innerText='Hold';
    },holdtime);

    setTimeout(()=>{
        text.innerText='Breathe Out';
        circle.className='circle enlarge';        
    },enlargetime);
}

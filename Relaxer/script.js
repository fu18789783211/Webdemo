const circle=document.getElementById('Circle');
const text=document.getElementById('text');


// 总时间
var totaltime=7500;
var holdtime=1500;
var zoomtime=6000;

// 动画缩放
function animationzoom(){
    // 放大启动
    circle.className='Circle enlarge';
    text.innerText='Breathe In!';
    
    setTimeout( ()=>{
        text.innerText='Hold';

        setTimeout( ()=>{
            text.innerText='Breathe Out';
            circle.className='circle narrow';
        },holdtime);
    },zoomtime);
    
       
}
animationzoom();



setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout( () => 
    {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);


  }, breatheTime);
//   setTimeout 语法
// var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
// var timeoutID = scope.setTimeout(function[, delay]);
// var timeoutID = scope.setTimeout(code[, delay]);
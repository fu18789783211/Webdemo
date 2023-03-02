//语法：得到0 到 1 之间的伪随机数
Math.random();


// 示例：
// 1、得到一个两数之间的随机整数，包含两个数在内，min <= a <= max
function getRandomIntInclusive(min,max){
   min = Math.ceil(min); // 大于等于 min 的最小整数
   max = Math.floor(max);// 小于等于 max 的最大整数
   return Math.floor(Math.random()*(max-min+1))+min;  //包含最大值和最小值
} 

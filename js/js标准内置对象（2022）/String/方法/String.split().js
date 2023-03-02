
// split()方法是用指定的 分隔符字符串 将String对象（字符串）分割成子字符串数组，以一个分割子串来决定拆分的位置；

// 语法：
// str.split([separator[,limit]]);
// separator：指定表示每个拆分应发生的点， 可以是字符串也可以是正则表达式，
//            如果str省略或者没有分隔符，将会返回一整个字符串；
//            如果分隔符为空字符串，就会以str原字符串中每个字符的数组形式返回；
// limit: 一个整数，限定 返回分割片段数量,当有此参数时，split方法会在指定分割符每次出现时分割该字符串，
//        如果限制的条目都进入了数组就会停止；限制条目如果大于字符长度，新数组就不会添加剩余的文字
// 返回值：返回源字符串以分隔符出现位置而分割成一个 Array

const str = 'Messi is the best player in the world';
const words = str.split(' ');
console.log(words[3]);// "best"

// 如果分隔符为空字符串，就会以str原字符串中每个字符的数组形式返回；
const chars = str.split('');
console.log(chars[7]);// "s"

// 如果str省略或者没有分隔符，则返回的数组包含一整个字符串组成的元素；
const strCopy = str.split();
console.log(strCopy);// Array ["Messi is the best player in the world"]



// example1
var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var space = " ";
var comma = ",";

function splitString(StringTosplit,separator){
        //分割前           分割后
  var arrayofStrings = StringTosplit.split(separator);

  console.log('原字符串："'+ StringTosplit+ ' " ');
  console.log('分割后的字符串："'+ arrayofStrings+ ' " ');
  console.log('分割后的字符串有："'+ arrayofStrings.length+ ' 个元素 ');
  for(var i = 0;i<arrayofStrings.length;i++){
    console.log(arrayofStrings[i]+'/');
  }
}

splitString(tempestString,space);// 以空格分割
splitString(tempestString);//省略或没有分隔符
splitString(monthString,comma);//以逗号分割


// example2 限制返回值中分割的数量
var myString = 'Hello World. How are you doing?' 
var afterSplit =myString.split(' ',3);
console.log(afterSplit);


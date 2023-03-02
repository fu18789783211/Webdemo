// splice()方法 删除或替换现有元素，新添加元素到数组中，返回新数组，从而就可以改变原数组

// 语法：
splice(start);
// start 是指开始修改的位置，如果大于数组长度，就从数组末尾添加元素;
//      如果为负数就从数组末尾开始，绝对值大于数组长度，就从索引的 0 开始修改
splice(start,deleteCount);
        // deleteCount  要移除数组元素的个数
        // 1 deleteCount 大于 start 之后的元素总数，删除start之后的元素（包含start）
        // 2 没有deleteCount或者大于array.length - start(所有元素的长度)，start之后所有数组元素都被移除；
        // 3 deleteCount为 0 或 负数，则不删除元素，应添加元素；
splice(start,deleteCount,item1);
       // item1 要添加进数组的元素，如果不指定就要删除元素
splice(start,deleteCount,item1,item2,itemN);



 const months = ['Jan','March','April','June'];
 mouths.splice(1,0,'Feb');// 在索引1添加一个元素
 console.log(mouths);// ['Jan','Feb','March','April','June']
 mouths.splice(4,1,'May');//  替换从索引4开始的一个元素
 console.log(mouths);//['Jan','Feb','March','April','May']




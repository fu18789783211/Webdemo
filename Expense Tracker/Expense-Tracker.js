var text=document.getElementById('text');
var amount=document.getElementById('amount');
var submit=document.getElementById('submit');

// 点击事件

function clicksubmit(){
    var receive1=text.value;
    var receive2=amount.value;
    // if(!receive1 || !receive2){
    //     return alert('请输入完整的信息和价格');
    // }
    console.log(text, receive1, receive2)
    const data = new FormData();
    data.append('receive1', receive1)
    data.append('receive2', receive2)

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3000/test/data');
    
    //发送合适的请求头信息
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.withCredentials = true
    xhr.onload = function () {
        // 请求结束后,在此处写处理代码
        console.log('+++++++++++++')
    };
    xhr.send(JSON.stringify({
        receive1,
        receive2
    }));
    // xhr.send('string');
    // xhr.send(new Blob());
    // xhr.send(new Int8Array());
    // xhr.send({ form: 'data' });
    // xhr.send(document);
}
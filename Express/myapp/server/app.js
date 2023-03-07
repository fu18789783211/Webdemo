// 服务器端
// 服务器处理发来的请求
const express = require("express");
const app = express();
const port =3000;

app.use('/', express.static('./static'))


app.get("ajaxdemo1.txt",(req,res)=>{
    console.log("123456");
    res.send("服务器成功找到txt");
});

app.get("ajaxdemo2.xml",(req,res)=>{
    console.log(111);
    res.send("成功");
});
//监听方法
app.listen(port,()=>{
    console.log(`侦听端口${port}的应用程序`);
})

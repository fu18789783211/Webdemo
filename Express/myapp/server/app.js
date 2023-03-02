const express = require("express");
const app = express();
const port =3000;

app.use('/', express.static('./static'))


app.get("/api/helloworld",(req,res)=>{
    res.send("helloWorld");
});

//监听方法
app.listen(port,()=>{
    console.log(`侦听端口${port}的应用程序`);
})

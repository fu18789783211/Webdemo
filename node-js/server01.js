const http=require('http');
// 创建一台服务器
var server= http.createServer(function(){
    console.log('有人来访问');
});

server.listen(8080);
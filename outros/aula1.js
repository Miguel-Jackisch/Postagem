var http = require('http');

http.createServer(function(req, res){
    res.end("<h1>Hello world!<h1>");
}).listen(8181);

console.log("o servidor tas online...")
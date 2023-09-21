const express = require("express");
const app = express();

app.get("/", function(req, res){
res.sendFile(__dirname + "/view/telainicial.html")
})

app.get("/calculadora", function(req, res){
    res.sendFile(__dirname + "/view/Calculadora.html")
})

app.get("/calculadora", function(req, res){
    res.sendFile(__dirname + "/view/cronometro.html")
})

app.get("/calculadora", function(req, res){
    res.sendFile(__dirname + "/view/quiz.html")
})

app.listen(8081,function(){
    console.log("servidor tas online... ")
});
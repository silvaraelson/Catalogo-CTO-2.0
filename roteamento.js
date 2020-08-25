
const express = require("express");
const app = express();
app.use(express.static('page-landing'));
 
app.get("/",function(req,res){
res.sendFile(__dirname +'/page-landing/index.html');
});

app.listen(5500,'192.168.0.101', function(){
    console.log("online");
});
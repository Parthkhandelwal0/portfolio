const express =require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname +"/index.html");
})

app.get("/about", function(req,res){
    res.sendFile(__dirname +"/index2.html");
})

app.listen(process.env.PORT || 4000, function(){
    console.log("server started");
});
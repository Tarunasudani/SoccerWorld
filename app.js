var express = require("express"),
    app = express(),
    bodyParser = require('body-parser')

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static(__dirname + '/views'));

app.get("/",function(req,res){
    res.render("index.ejs");
});

app.listen(process.env.PORT|| 3000,function(){
    console.log("server has started");
});

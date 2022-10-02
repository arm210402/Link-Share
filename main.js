var express=require('express');
var app= express();

var bodyParser=require('body-parser');
const con = require('./connection');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req ,res){
    res.sendFile(__dirname+'/index.html')
});

app.post('/',function(req,res){
    var key=req.body.key;


    con.connect(function(error){
        if(error) throw error;

        var sql="SELECT * FROM STUDENTS WHERE name=key";
        con.query(sql,function(error,result){
            if(error) throw error;
            res.send('Student register successfull');
        });
    });

});
app.listen(5500);
/*var con=require("./connection");

con.connect(function(error){
    if(error) throw error;
    con.query("Select * from students",function(error,result){
        if(error) throw error;
        console.log("connected")
        console.log(result);
    });
})
*/

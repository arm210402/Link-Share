//import {link,key} from 'function.js'

function insert() {
  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "",
    database: "link_share"
  });

  //random string 
  let r = (Math.random() + 1).toString(36).substring(7);
  con.connect(function (err) {
    //random string


    if (err) throw err;
    console.log("Connected!");
  });
  let sql1 = "Create database link_share";
  let sql2 = "CREATE TABLE 'datakv' ('key1' VARCHAR(65535) NOT NULL , 'data1' VARCHAR(65535) NOT NULL )";
  let sql3 = "Insert into datakv(key1, data1  )values ('akss2','askjdhs')";

  con.query(sql3, function (err, result, fields) {
    if (err) throw err;
    var names = result;
    names[Object.keys(names)[0]];
    console.log(names);

  });

}
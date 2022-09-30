var mysql=require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "",
    database: "students"
  });

  module.exports = con;

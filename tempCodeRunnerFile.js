

let sql="INSERT into tt (key1,data1) values ('"+ke+"','"+da+"' )";
con.query(sql, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
  
});
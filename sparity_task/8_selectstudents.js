var mysql = require("mysql");

var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sparitytask"
});

con.connect(function(err)
{
    if (err) throw err;
     var sql="SELECT * FROM student";
 con.query(sql,function(err,result,fileds)
 {
     if(err) throw err;
     console.log(result)
 });

});
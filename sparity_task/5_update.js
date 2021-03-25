var mysql =require("mysql");
 var con =mysql.createConnection(
     {
         host:"localhost",
         user:"root",
         password:"",
         database:"sparitytask"
     }
 );

 con.connect(function(err)
 {
     if(err) throw err;
     var sql ="UPDATE faculty set name='staffname_updated' where empid='123'";

     con.query(sql,function(err,result)
     {
         if(err) throw err;
         console.log("no.of records updated:"+result.affectedRows);


     });
 });
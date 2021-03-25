var mysql = require ('mysql');

var con = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"sparitytask"
    }
);
con.connect(function(err) {
    if(err) throw err;
    console.log("connected");
    var sql ="INSERT INTO faculty (name,empid) VALUES ('abhilash','123'),('sparity','exam1')";

con.query(sql,function(err,result)
{
    if (err) throw err;
    
    console.log("records added")
})
}
);
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
    var sql ="INSERT INTO student (name,subjectname,facultyname) VALUES ('abhilash','subject1','faculty1')";

con.query(sql,function(err,result)
{
    if (err) throw err;
    
    console.log("records added")
})
}
);
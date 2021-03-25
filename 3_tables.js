var mysql = require('mysql');

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
    console.log("connected");

    var sql="CREATE TABLE student (name VARCHAR(200), subjectname VARCHAR(100),facultyname VARCHAR(100) )";
    var sql1="CREATE TABLE subjects (name VARCHAR(200), subjectcode VARCHAR(100) )";
    var sql2="CREATE TABLE faculty (name VARCHAR(200), empid VARCHAR(100) )";
    var sql3="CREATE TABLE classrooms (name VARCHAR(200), section VARCHAR(100) )";


    function ct(abc){
        con.query(abc,function(err,result)
        {
            if (err) throw err;
            console.log("table created")
        });
      }

      ct(sql);
      ct(sql1);
      ct(sql2);
      ct(sql3);
 

    // con.query(sql,function(err,result)
    // {
    //     // if (err) throw err;
    //     // console.log("table created")
    // });
    // con.query(sql1,function(err,result)
    // {
    //     // if (err) throw err;
    //     // console.log("table created")
    // });
    // con.query(sql2,function(err,result)
    // {
    //     // if (err) throw err;
    //     // console.log("table created")
    // });
    // con.query(sql3,function(err,result)
    // {
    //     if (err) throw err;
    //     console.log("table created")
    // });



});
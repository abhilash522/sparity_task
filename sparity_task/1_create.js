var mysql = require("mysql");

var con = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        insecureAuth : true
    }
);

con.connect(function(err)
{
    if (err) throw err;
    console.log("connected");
});
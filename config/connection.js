const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: process.env.PORT || 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "things_db"
  });
}


connection.connect(function(err) {
  if (err) {
    console.log("error connecting: " + err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

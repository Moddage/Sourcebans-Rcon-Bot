var mysql = require("mysql");
const sourcebansJson = require('./sourcebans.json');
const mysqlLogin = sourcebansJson.mysql

var prefix = mysqlLogin.prefix;
var db = mysql.createConnection({
  host: mysqlLogin.host,
  database: mysqlLogin.database,
  user: mysqlLogin.user,
  password: mysqlLogin.password,
  port: mysqlLogin.port
})

db.connect(function(error) {
  if (error) console.log(error);

  db.query(`SELECT * FROM ${prefix}servers WHERE rcon <> '' AND enabled = '1'`, function(error, response) {
    if (error) console.log(error);
    console.log(response);
    exports.Servers = response;
  });
});
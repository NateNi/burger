// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    nost: 'localhost',
    user: 'root',
    password: 'barrels2569',
    database: 'burgers_db'
  })
}


connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
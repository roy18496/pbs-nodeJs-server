var mysql = require("mysql");
var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "pbs_dev"
});

module.exports = connection;
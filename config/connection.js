'use strict';
const util = require('util')
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;

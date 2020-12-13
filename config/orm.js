var connection = require("./connection.js");

function selectAll(table) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      return result
    });
  }

function createOne(table, columns, values) {
    var queryString = "INSERT INTO " + table + " (";
    queryString += columns.toString();

    var qmarks = []
    values.forEach(element => { qmarks.push("?");});
    
    queryString += "VALUES (";
    queryString += qmarks.toString();
    queryString += ") ";


    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }
      return result
    });
  }

var orm = {'selectAll': selectAll, 'createOne': createOne}

module.exports = orm;

var orm = require("../config/orm.js");

function selectAll() {
    orm.all("burgers", function(res) {
      callback(res);
    });
}

function createOne(name) {
    orm.create("burgers", 
    [
      "burger_name", 
      "devoured"
    ], 
    [
      name, 
      false
    ]);
}

var burger = {'selectAll': selectAll, 'createOne': createOne}

module.exports = burger;

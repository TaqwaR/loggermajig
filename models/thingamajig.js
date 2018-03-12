//THIS REPRESENTS THE TABLE OF THE SQL DATABASE

const orm = require("../config/orm");

const book = {
//read all
  selectAll: function(cb) {
    orm.selectAll("books", function(res) {
      cb(res);
    });
  },

//create
  insertOne: function(cols, vals, cb) {
    orm.insertOne("books", cols, vals, function(res) {
      cb(res);
    });
  },

//update
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("books", objColVals, condition, function(res) {
      cb(res);
    });
  }
}


module.exports = book;
 

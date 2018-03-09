// * Inside `thingamajig.js`, import `orm.js` into `thingamajig.js`
// * Also inside `thingamajig.js`, create the code that will call the ORM functions using burger specific input for the ORM.
//  * Export at the end of the `thingamajig.js` file.
//THIS REPRESENTS THE TABLE OF THE SQL DATABASE

const orm = require("../config/orm");

const book = {
//read
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

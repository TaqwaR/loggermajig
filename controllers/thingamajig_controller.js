
const express = require("express");
const router = express.Router();
const book = require("../models/thingamajig");

router.get("/", function(req, res) {
  book.selectAll(function(data) {
    const hbsObject = {
      books: data
    };
    console.log(hbsObject);
    //what is happening here?
    res.render("index", hbsObject);
  });
});

router.get("/api/books", function(req, res) {
  book.selectAll(function(data) {
    res.json({data});
  })
})



router.post("/api/books", function(req, res) {
  book.insertOne([
    "book_name", "book_author", "read_status"
  ], [
    req.body.book_name, req.body.book_author, req.body.read_status
  ], function(result) {
    res.json({ id: result.insertId });
  });
});



router.put("/api/books/:id", function(req, res) {
  const condition = "id = " + req.params.id;
  console.log("id + req.params.id: ", condition);

  book.updateOne({ read_status: req.body.read_status }, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//how is this exporting the functions even though they aren't wrapped in curly braces?
module.exports = router;

# Log-It-Up

A (book) logging application for the bibliophiles. An easy way to keep track of your reads!

## Screenshots

![Screen Shot 2018-03-12 at 9.37.53 PM](/Users/taqwarushdan/Desktop/Screen Shot 2018-03-12 at 9.37.53 PM.png)

## Tech/Framework Used

Log-It-up's layout follows the Model View Controller (MVC) design pattern and uses Node and MySQL to query and route data into the app, and Handlebars to generate the dynamic HTML elements.



**Built with**

- Node.js
- Express.js
- MySQL
- Handlebars.js
- Javascript & jQuery
- Custom ORM

## Features

In the Book Name and Author inputs, type in the details of a book you'd like to read or a good book that you have already finished reading. Click `submit`, and your book will be sorted into the right list and displayed in the application.

For those books you love to re-read,  you have the option of re-sorting the book and reading it again by clicking Read Again to add it back to the To Read column.

## Code Example

Using Express.js, here is how the application updates the read status on the API for any of the books included in either column:

```javascript
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
```


And here is how requests to create a new item are sent to the application's API:

```javascript
router.post("/api/books", function(req, res) {
  book.insertOne(
  	["book_name", "book_author", "read_status"], 
  	[req.body.book_name, req.body.book_author, req.body.read_status], 
  	function(result) {
   	 	 res.json({ id: result.insertId });
     	}
     );
});
```
 

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Installation and How To Use

The package.json file includes all environment dependicies that you'd need to run the app locally. To get the app running locally: 

- Step 1: Fork this repository and clone it to your local environment.
- Step 2: Navigate to the cloned repo/folder and run `npm init`. Once the repo is initialized, run `npm install`. This will download all of the necessary dependencies.
- Step 3: run node server.js, navigate to **\*localhost:3000*** on your favorite web browser, and the application should be up and running.
- Step 4: Try it out here: <https://radiant-savannah-89554.herokuapp.com/>
- Step 5 (bonus): Open the files in your favorite text editor and customize the application even more!


## License

[Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)


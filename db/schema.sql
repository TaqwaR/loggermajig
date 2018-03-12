-- Write SQL queries this file that do the following:
--
--    * Create the `things_db`.
--    * Switch to or use the `things_db`.
--    * Create a `books` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

CREATE DATABASE things_db;
USE things_db;

CREATE TABLE books(
  id int NOT NULL AUTO_INCREMENT,
  book_name varchar(300) NOT NULL,
  book_author varchar(300) NOT NULL,
  read_status BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
 

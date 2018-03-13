CREATE DATABASE things_db;
USE things_db;

CREATE TABLE books(
  id int NOT NULL AUTO_INCREMENT,
  book_name varchar(300) NOT NULL,
  book_author varchar(300) NOT NULL,
  read_status BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

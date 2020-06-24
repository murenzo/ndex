const express = require("express");

let bookRouter = express.Router();

function route(nav) {
  const books = [
    {
      title: "War and Peace",
      genre: "Historical Fiction",
      author: "Hugo Boss",
      read: false,
    },
    {
      title: "Les Miserables",
      genre: "Historical Fiction",
      author: "Victor Hugo",
      read: false,
    },
    {
      title: "The Time Machine",
      genre: "Science Fiction",
      author: "H. G. Wells",
      read: false,
    },
    {
      title: "A Journey into the Center of the Earth",
      genre: "Science Fiction",
      author: "Jules Verne",
      read: false,
    },
    {
      title: "The Dark World",
      genre: "Fantasy",
      author: "Henry Kuttner",
      read: false,
    },
    {
      title: "The Wind in the Willows",
      genre: "Fantasy",
      author: "Kenneth Grahame",
      read: false,
    },
  ];

  bookRouter.route("/").get((req, res) => {
    res.render("books", {
      title: "Books Page",
      nav,
      books,
    });
  });

  bookRouter.route("/:id").get((req, res) => {
    const { id } = req.params;
    res.render("book", {
      title: "Book Page",
      nav,
      book: books[id],
    });
  });

  return bookRouter;
}

module.exports = route;

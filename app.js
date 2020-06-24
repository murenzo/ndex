let express = require("express");
let morgan = require("morgan");
let path = require("path");

const nav = [
  { link: "books", title: "Books" },
  { link: "authors", title: "Authors" },
];

let bookRouter = require("./src/routes/bookRoutes")(nav);

const port = process.env.PORT || 4000;

let app = express();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  "/css",
  express.static(
    path.join(__dirname, "node_modules/@fortawesome/fontawesome-free/css")
  )
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/popper.js/dist/umd"))
);
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/books", bookRouter);

app.get("/", function (req, res) {
  res.render("index", {
    title: "Library Home",
    nav: [
      { link: "books", title: "Books" },
      { link: "authors", title: "Authors" },
    ],
  });
});

app.listen(port, function () {
  console.log(`Listening on the port ${port}`);
});

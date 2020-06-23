var express = require("express");
var morgan = require("morgan");
var path = require("path");

const port = process.env.PORT || 4000;
var app = express();
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
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

app.get("/", function (req, res) {
  res.render("index", { title: "Library Home", list: ["a", "b", "c"] });
});

app.listen(port, function () {
  console.log(`Listening on the port ${port}`);
});

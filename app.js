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

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(port, function () {
  console.log(`Listening on the port ${port}`);
});

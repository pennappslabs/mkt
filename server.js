var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.status(200).sendFile(path.join(__dirname, "search.html"));
});

app.listen(8080);
console.log("listening to port 8080...");

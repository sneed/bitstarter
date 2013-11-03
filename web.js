var buffer = new Buffer("Hello World from index.html!", "utf-8");
var fs = require("fs");
var fileName = "index.html";
var contents = fs.readFileSync("./index.html", "utf8").toString();

console.log(contents);
var express = require('express');
var app = express();
app.use(express.logger());

app.get('./index.html', function(request, response) {
  response.send('Hello World from index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

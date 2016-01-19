var express = require('express');
// var bodyParser = require('body-parser');
var app = express();

// third-party middleware
app.use(bodyParser.urlencoded());

// custom middleware
app.user(function(request, response, next) {
    console.log("this will log on every request");
    next();
});
// route function
app.get('/route', function(request, response) {
    response.send("this is a route");
});

// built-in middleware
app.use(express.static('./public'));

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
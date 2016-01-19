var express = require('express');
var bodyParser = require('body-parser');
var app = express();

function log(request, response, next) {
  console.log(names);
  next();
}

app.use(bodyParser.urlencoded());

var names = [];

app.all('/', function(request, response, next) {
    console.log('from ALL');
    next();
})

// GET
app.get('/', log, function(request, response) {
    response.render('index.jade', {
        names: names
    });
});

// POST
app.post('/', function(request, response) {
    names.push(request.body.name);
    response.redirect('/');
})

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
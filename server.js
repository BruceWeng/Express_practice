var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());

var names = [];

app.route('/')
    .all(function(request, response, next) {
        console.log('this logs on all VERBs');
        next();
    })
    .get(function(request, response) {
        response.render('index.jade', { names: names });
    })
    .post(function(request, response) {
        names.push(request.body.name);
        response.redirect('/');
    });

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
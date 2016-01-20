var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.format({
        'text/plain': function() {
            response.send('text response');
        },
        'text/html': function() {
            response.render('index.jade');
        },
        'application/json': function () {
            response.json({ topic: 'Express'});
        }
    });
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
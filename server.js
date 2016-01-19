var express = require('express');
var app = express();

app.param('name', function(request, response, next, name) {
    request.name = name[0].toUpperCase() + name.substring(1);
    next();

    Users.findOne({ username: name }, function(err, user) {
        request.user = user;
        next();
    });
});

app.get('/name/:name', function(request, response) {
    response.send('Your name is ' + request.name);
});

app.put('/name/:name/edit');
app.delete('/name/:name/delete');

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
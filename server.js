var express = require('express');
var app = express();

app.get('/:breedOfDog', function(request, response) {
    request.params.breedOfDog;
    request.query.ATTR;
    request.body.ATTR;
    request.param('ATTR'); //check in the order of params, body and query

    request.route;
    request.originalUrl;
    request.cookies.ATTR;
    request.get(); // get any header name
    request.accepts('text/html'); // application/json/plain
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
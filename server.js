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

    response.status(200);
    response.set(header, value);
    response.get(header);
    response.cookie(name, value);
    repsonse.clearCookie(name);
    response.redirect(status, path);
    response.send(status, text);
    response.json(status, object);
    response.jsonp(status, object); // callback({}) used in cross domain
    response.download(file);
    response.render(file, props, function(err, html) {
        response.send(html);
    });

});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
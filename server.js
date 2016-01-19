var express = require('express');
var app     = express();

app.get('/', function(request, response) {
    response.render('index.ejs', {
        title: "Hello Express and Jade"
    });
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
})
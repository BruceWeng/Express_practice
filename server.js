var express = require('express');
// var bodyParser = require('body-parser');
var app = express();

// Setting Params Configurations
app.set('env', 'development'); // process.env.NODE_ENV = 'production'
app.enable('trust proxy');
app.set('jsonp callback name', 'cb');
app.set('json replacer', function(attr, val) {
  if (attr === 'paawordHash') {
    return undefined;
  }
  return val;
});

app.get('/user_info', function(request, response) {
    // get user data
    response.json(user); // JSON.stringify
});

app.enable('case sensitive routing'); // /hello and /hello/hello are different
app.enable('strict'); // /hello /hello/ are the same

app.enable('view cache');
app.enable('view engine', 'ejs');
app.set('views', 'templates');
app.disable('x-powered-by'); // Remove express tag in Header





app.get('/', function(request, response) {
  request.render('index.ejs', {
      title: "Hello Express and Jade"
  });
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});

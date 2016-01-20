var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var APIv1 = require('./api1');
var APIv2 = require('./api2');

app.use('/api/v1', APIv1);
app.use('/api/v2', APIv2);
// Router Object
// - use
// - param
// - verb / all
// - route

// var router = express.Router();

// router.use(function(request, response, next) {
//     console.log('router specific middleware');
//     next();
// });

// router.get('/', function(resuest, response) {
//     response.send('router home route');
// });

// router.route('/test')
//     .get(function(request, response) {
//         response.send('router test route');
// });

// app.use('/api', router);

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
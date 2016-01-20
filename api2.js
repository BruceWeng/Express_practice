var APIv2 = require('express').Router();

APIv2.get('/names', function(request, response) {
    response.send('from API 2');
});

module.exports = APIv2;
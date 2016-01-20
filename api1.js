var APIv1 = require('express').Router();

APIv1.get('/names', function(request, response) {
    response.send('from API 1');
});

module.exports = APIv1;
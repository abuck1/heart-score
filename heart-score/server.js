'use strict';

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello Fran :)')
});

app.get('/drinks/:user', function (req, res) {
    var user_drinks = {
        user_id: req.params.user,
        drinks: [
            {
                name: "beer",
                units: 2
            },
            {
                name: "wine",
                units: 1
            },
            {
                name: "spirit",
                units: 0
            },
            {
                name: "strong_spirit",
                units: 3
            }
        ]};

    res.send(user_drinks);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('server restarted: ', Date().valueOf(), ' on port:', port);
})

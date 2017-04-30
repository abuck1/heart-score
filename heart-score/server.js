'use strict';

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello Fran :)')
})

var port = process.env.PORT || 3000; 
app.listen(3000, function () {
    console.log('server restarted: ', Date().valueOf(), ' on port:', port);
})

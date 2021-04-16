const express = require('express');
const mongoose = require('mongoose');
const PORT = 8000;
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

//Running at http://localhost:8000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.post('/save-data', function(req, res){
    console.log('Printing Response');
    x = req.body;
    console.log(x);
    console.log('This is the Key : '+ x['key']);
    console.log('This is the Value : '+ x['value']);
});

// listen for requests
app.listen(PORT, function () {
    console.log(`Ready on port ${PORT}!`)
})
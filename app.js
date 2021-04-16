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

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json())
app.post('/save-data', function(req, res){
    console.log('Printing Response');
    x = req.body;
    console.log(x);
    console.log('This is the Key : '+ x['key']);
    console.log('This is the Value : '+ x['value']);
});


app.listen(PORT, function () {
    console.log(`Ready on port ${PORT}!`)
})
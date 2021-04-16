const express = require('express');
const PORT = 8000;
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

// Running the html website at http://localhost:8000
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// listen for requests
app.listen(PORT, function () {
    console.log(`Ready on port ${PORT}!`)
})

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

const Store = require('./models/store.model.js');

// Fetching the data from UI and posting it to MongoDB
app.post('/save-data', function (req, res) {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }
    else {
        console.log('Printing Response');
        console.log(req.body);
        console.log('This is the Key : ' + req.body.key);
        console.log('This is the Value : ' + req.body.value);

        // Create a new Store
        const store = new Store({
            Key: req.body.key,
            Value: req.body.value
        });
        // Save store in the database
        store.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Something went wrong while creating new store."
                });
            });


    }
});
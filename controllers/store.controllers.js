const Store = require('../models/store.model.js');

// Retrieve and return all stores from the database.
exports.findAll = (req, res) => {
    Store.find()
        .then(stores => {
            res.send(stores);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of stores..."
            });
        });
};

// Create and Save a new store
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
      return res.status(400).send({
      message: "Please fill all required field!"
    });
    }
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
    };
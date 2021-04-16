const express = require('express')
const router = express.Router()
const storeController = require('../controllers/store.controllers.js')


// Retrieve all stores
router.get('/', storeController.findAll);

// Create a new store
router.post('/', storeController.create);

module.exports = router
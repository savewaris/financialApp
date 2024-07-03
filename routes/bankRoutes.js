const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

// Route for fetching all transactions
router.get('/transactions', bankController.getAllTransactions);

module.exports = router;

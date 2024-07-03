const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

// Example route for transactions
router.get('/transactions', bankController.getAllTransactions);

module.exports = router;

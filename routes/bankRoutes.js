const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

router.get('/transactions', bankController.getAllTransactions);

module.exports = router;

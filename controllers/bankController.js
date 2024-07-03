const axios = require('axios');
const config = require('../config/bankConfig');

const getTransactions = async (apiUrl, token) => {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.transactions;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw new Error('Failed to fetch transactions');
    }
};

exports.getAllTransactions = async (req, res) => {
    try {
        const bangkokBankTransactions = await getTransactions(config.bangkokBank.apiUrl, config.bangkokBank.token);
        const scbEasyTransactions = await getTransactions(config.scbEasy.apiUrl, config.scbEasy.token);
        const kPlusTransactions = await getTransactions(config.kPlus.apiUrl, config.kPlus.token);
        const makeByKBankTransactions = await getTransactions(config.makeByKBank.apiUrl, config.makeByKBank.token);

        const allTransactions = [
            ...bangkokBankTransactions,
            ...scbEasyTransactions,
            ...kPlusTransactions,
            ...makeByKBankTransactions,
        ];

        res.json(allTransactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

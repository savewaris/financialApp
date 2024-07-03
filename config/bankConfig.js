const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    bangkokBank: {
        apiUrl: process.env.BANGKOK_BANK_API_URL,
        token: process.env.BANGKOK_BANK_API_TOKEN,
    },
    scbEasy: {
        apiUrl: process.env.SCB_EASY_API_URL,
        token: process.env.SCB_EASY_API_TOKEN,
    },
    kPlus: {
        apiUrl: process.env.KPLUS_API_URL,
        token: process.env.KPLUS_API_TOKEN,
    },
    makeByKBank: {
        apiUrl: process.env.MAKE_BY_KBANK_API_URL,
        token: process.env.MAKE_BY_KBANK_API_TOKEN,
    }
};

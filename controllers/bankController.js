// Example controller logic
exports.getAllTransactions = async (req, res) => {
    try {
        // Implement logic to fetch transactions from banks
        const transactions = [
            { id: 1, description: 'Transaction 1' },
            { id: 2, description: 'Transaction 2' },
            { id: 3, description: 'Transaction 3' }
        ];

        res.json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
};

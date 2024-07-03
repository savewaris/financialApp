const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bankRoutes = require('./routes/bankRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', bankRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Financial Management and Tracking Service');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

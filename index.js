const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bankRoutes = require('./routes/bankRoutes');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use('/api', bankRoutes);

app.get('/', (req, res) => {
    res.send('Financial Management and Tracking Service');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

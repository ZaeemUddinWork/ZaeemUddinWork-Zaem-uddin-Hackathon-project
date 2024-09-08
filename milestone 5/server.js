"use strict";
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Route to serve resume data
app.get('/resume/:username', (req, res) => {
    const username = req.params.username;
    // Normally you would fetch data from a database
    // For simplicity, we'll just send a static HTML
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

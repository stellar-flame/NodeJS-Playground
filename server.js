const express = require('express');
const cors = require('cors'); // If you're using CORS
const app = express();
const port = 3000;

app.use(cors()); // Use CORS if needed
app.use(express.json()); // Middleware to parse request body
app.use(express.static('public')); // Serve static files from 'public' directory

app.post('/hello', (req, res) => {
    if (req.body.message === "Hello") {
        res.json({message: "World"});
    } else {
        res.status(400).send("Unknown request");
    }
});

app.get('/bye', (req, res) => {
    res.json({message: "Bye World"});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

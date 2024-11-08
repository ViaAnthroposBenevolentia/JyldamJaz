// server/index.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // to parse JSON requests

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
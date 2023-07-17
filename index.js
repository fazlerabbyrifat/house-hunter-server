const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('house hunter is actively looking for a new house');
})

app.listen(port, () => {
    console.log(`house hunter is listening on ${port}`);
})
const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());

const categories = require('./category.json');

app.get('/category', (req, res) => {
    res.send(categories)
})
app.listen(port, () => {
    console.log(`Running on ${port}`)
})
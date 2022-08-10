const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// environemt variable 
env.config();
// mongodb connection
// 
mongoose.connect(
    `mongodb+srv://root:root@cluster0.htqxtzb.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
    console.log('Database Connected');
});
// instead pog app,use(express.json())
app.use(bodyParser());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'hello from the server'
    });
});

// post request 
app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});
app.listen(process.env.PORT, () => {
    console.log(`the server is running on port ${process.env.PORT}`)
});
const express = require('express');
const env = require('dotenv')
const app = express();

// environemt variable 
env.config();

app.get('/', (req, res, next) => {
    req.status(200).json({
        message: 'hello from the server'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`the server isn running on port ${process.env.PORT}`)
})
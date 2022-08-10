const express = require('express');
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser')

// environemt variable 
env.config();
// instead pog app,use(express.json())
app.use(bodyParser());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'hello from the server'
    });
});
 
// post request 
app.post('/data',(req, res, next)=>{
res.status(200).json({
message:req.body
});
});
app.listen(process.env.PORT, () => {
    console.log(`the server isn running on port ${process.env.PORT}`)
});
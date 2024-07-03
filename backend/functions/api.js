const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();


const products=require('./routes/product');
const orders=require('./routes/order');

app.use('/api/v1/',products);
app.use('/api/v1',orders);

app.get('/', (req, res) => {
    res.send('Website working fine');
  });

// app.listen(3000,()=>{
//     console.log(`server listing to port 3000 in development}`)
// })


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
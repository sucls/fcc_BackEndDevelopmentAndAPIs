const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send('hello world!')).listen(8088)


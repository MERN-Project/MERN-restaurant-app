const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/route');
const orderedItem = require('./routes/api/orderRoute');

const app =express();

//body-parser Middle ware
app.use(bodyParser.json());

//DB config

const db= require('./config/keys').mongoURI;

//connect to Mongo
mongoose
.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log('MongoDB connected...'))
.catch(err=>console.log(err));

app.use(items);
app.use(orderedItem);
const port = process.env.PORt || 5000;

app.listen(port, ()=>console.log(`Server is running on port ${port}`));

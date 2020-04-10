const express = require('express');
const orderControler = require('../../controller/controller/orderProduct');

const router = express.Router();



router.get('/addorder/:itemId',orderControler.addOrderedItem);

module.exports=router;

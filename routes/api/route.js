const express =require('express');

const router = express.Router();

const controller=require('../../controller/controller/products');


router.get('/getItem',controller.getAllItem );
router.post('/getItem',controller.postAnItem);

module .exports = router;
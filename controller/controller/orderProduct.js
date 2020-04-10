const orderedProduct = require('../../models/modelOrders');
const itemProduct = require('../../models/modelItems');

exports.addOrderedItem = (req,res,next)=>{
 const itemId = req.param.itemId;

const item = itemProduct.findById(itemId)
.then(item=>res.json(item))
.catch(err=>console.log(err));

item.save()
.then(item=>res.json(item))
.catch(err=>console.log(err));
}
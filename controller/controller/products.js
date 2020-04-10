const FoodItems = require('../../models/modelItems');

exports.getAllItem=(req,res,next)=>{
    FoodItems.find()
    .then(items=> res.json(items))
    .catch(err=>console.log(err))
}

exports.postAnItem=(req,res,next)=>{
    const newFood = new FoodItems({
        name:req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    })
    console.log('llllll',newFood);

    newFood.save()
    .then(item=>res.json(item))
    .catch(err=>console.log(err))
}
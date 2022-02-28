var express = require('express');

var router = express.Router();



var OrderController = require('../controllers/order')




router.get('/', async function(req, res) {

    const order = await OrderController.getOrder();

    res.json(order);

});



router.post('/',async(req, res) => {

    const {order} = req.body;

    const result =  await OrderController.createOrder(order);

    res.json(result);

});



 router.delete('/:orderId', async(req,res) => {
   const {orderId} = req.params;
     const result = await OrderCrontroller.deleteOrder(orderId);
     res.json(result);
 });



module.exports = router;
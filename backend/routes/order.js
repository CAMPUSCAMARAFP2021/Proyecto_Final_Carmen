var express = require('express');

var router = express.Router();



var orderController = require('../controllers/order')




router.get('/', async function(req, res) {
    const {customer} = req;
    const order = await orderController.getOrdersbycustomer(customer);

    res.json(order);

});



router.post('/',async(req, res) => {
    const {customer} = req;
    const {order} = req.body;

    const result =  await orderController.createOrderbycustomer(order, customer);

    res.json(result);

});



 router.delete('/:order', async(req,res) => {
    const {customer} = req;
    const {order} = req.params;
     const result = await orderController.deleteOrder(order, customer);
     res.json(result);
 });



module.exports = router;
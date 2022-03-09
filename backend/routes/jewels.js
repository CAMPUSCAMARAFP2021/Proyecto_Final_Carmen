var express = require('express');

var router = express.Router();



var JewelController = require('../controllers/jewels')




router.get('/', async function(req, res) {
const order=req.order
    const jewels = await JewelController.getJewelsbyorder(order);

    res.json(jewels);

});



router.post('/',async(req, res) => {
    const order=req.order
    
    const {jewel} = req.body;
jewel.order=order
    const result =  await JewelController.createJewel(jewel);

    res.json(result);

});



 router.delete('/:jewelId', async(req,res) => {
   const {jewelId} = req.params;
     const result = await JewelCrontroller.deleteJewel(jewelId);
     res.json(result);
 });



module.exports = router;
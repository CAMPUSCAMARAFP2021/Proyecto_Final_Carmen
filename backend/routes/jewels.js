var express = require('express');

var router = express.Router();



var JewelController = require('../controllers/jewels')




router.get('/', async function(req, res) {

    const jewels = await JewelController.getJewel();

    res.json(jewels);

});



router.post('/',async(req, res) => {

    const {jewel} = req.body;

    const result =  await JewelController.createJewel(jewel);

    res.json(result);

});



 router.delete('/:jewelId', async(req,res) => {
   const {jewelId} = req.params;
     const result = await JewelCrontroller.deleteJewel(jewelId);
     res.json(result);
 });



module.exports = router;
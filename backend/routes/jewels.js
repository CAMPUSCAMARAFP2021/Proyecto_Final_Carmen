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



// router.delete('/:teamId', async(req,res) => {

//     const {teamId} = req.params;

//     const result = await teamController.deleteTask(teamId);

//     res.json(result);

// });



module.exports = router;
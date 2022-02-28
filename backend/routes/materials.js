var express = require('express');

var router = express.Router();



var MaterialController = require('../controllers/materials')




router.get('/', async function(req, res) {

    const material = await MaterialController.getMaterial();

    res.json(material);

});



router.post('/',async(req, res) => {

    const {material} = req.body;

    const result =  await MaterialController.createMaterial(material);

    res.json(result);

});



 router.delete('/:materialId', async(req,res) => {
   const {materialId} = req.params;
     const result = await MaterialCrontroller.deleteMaterial(materialId);
     res.json(result);
 });



module.exports = router;
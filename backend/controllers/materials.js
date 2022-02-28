const Material = require('../modules/materials');



const createMaterial = async(materialId) => {

    return await Material.create(materialId);

}

const deleteMaterial = async (materialId) => {     
    const material = await Material.findByIdAndDelete(materialId);
    return false;

}

const getMaterial = async () => {

     return await Material.find()

}



module.exports = {

    createMaterial,

    deleteMaterial,

   getMaterial

}
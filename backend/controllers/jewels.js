const Jewel = require('../modules/jewels');



const createJewel = async(jewelId) => {

    return await Jewel.create(jewelId);

}

const deleteJewel = async (jewelId) => {     
    const jewel = await Jewel.findByIdAndDelete(jewelId);
    return false;

}

const getJewel = async () => {

     return await Jewel.find()

}



module.exports = {

    createJewel,

    deleteJewel,

    getJewel

}
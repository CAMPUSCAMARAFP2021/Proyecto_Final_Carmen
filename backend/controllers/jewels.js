const Jewel = require('../modules/jewels');



const createJewel = async(jewel) => {

    return await Jewel.create(jewel);

}

const deleteJewels = async (jewel) => {     
    const jewel = await Meet.findByIdAndDelete(jewel);
    return false;

}

const getJewel = async () => {

     return await Jewel.find()

}



module.exports = {

    createJewel,

    deleteJewels,

    getJewel

}
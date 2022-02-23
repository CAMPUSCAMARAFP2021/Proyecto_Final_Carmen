const Jewel = require('../modules/jewels');



const createJewel = async(jewel) => {

    return await Jewel.create(jewel);

}

const getJewel = async () => {

     return await Jewel.find()

}



module.exports = {

    createJewel,

    getJewel

}
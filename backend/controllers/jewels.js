const Jewel = require('../modules/jewels');



const createJewel = async(jewel) => {

    return await Jewel.create(jewel);

}

const deleteJewel = async (jewelId) => {     
    const jewel = await Jewel.findByIdAndDelete(jewelId);
    return false;

}

const getJewel = async () => {

     return await Jewel.find()

}
const getJewelsbyorder = async (order) => {
    console.log(order)

    return await Jewel.find({order})

}



module.exports = {

    createJewel,

    deleteJewel,

    getJewel, 

    getJewelsbyorder

}
const Order = require('../modules/order');



const createOrder = async(orderId) => {

    return await Order.create(orderId);

}

const deleteOrder = async (orderId) => {     
    const material = await Order.findByIdAndDelete(orderId);
    return false;

}

const getOrder = async () => {

     return await Order.find()

}



module.exports = {

    createOrder,

    deleteOrder,

    getOrder

}
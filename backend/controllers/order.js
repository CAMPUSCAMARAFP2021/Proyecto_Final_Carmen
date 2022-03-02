const Order = require('../modules/order');



const createOrderbycustomer = async(order , customer) => {
order.customer= customer
    return await Order.create(order);

}

const deleteOrder = async (orderId) => {     
    const material = await Order.findByIdAndDelete(orderId);
    return false;

}

const getOrders = async () => {

     return await Order.find()

}

const getOrdersbycustomer = async (customer) => {

    return await Order.find({customer})

}


module.exports = {

    createOrderbycustomer,

    deleteOrder,

    getOrders,

    getOrdersbycustomer

}
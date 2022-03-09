const Order = require('../modules/order');



const createOrderbycustomer = async(order , customer) => {
order.customer= customer

    return await Order.create(order);

}

const deleteOrder = async (order, customer) => {     
    
    await Order.findByIdAndDelete(order);
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
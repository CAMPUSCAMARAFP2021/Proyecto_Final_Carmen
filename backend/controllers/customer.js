const Customer = require('../modules/customer');
const jwt = require('jsonwebtoken');


const encriptarPassword = (pass) => {
    return pass;
}

const buildJWT = (customer) => {
    const time = 1212;
    
    return jwt.sign({
        time,
        customer
    }, 'secret');
} 


const login = async (name,password) => {
    const customer = await Customer.findOne({name});
      if(!customer) throw new Error('usuario no encontrado');
     console.log('=============>', customer)
    const passwordEncriptada = encriptarPassword(password);
    return buildJWT(customer);
    
}

const createCustomer = async(customer) => {

    customer.password = encriptarPassword('married jewels');
    return await Customer.create(customer);
}

const getCustomers = async() => {
    return await Customer.find();
}

const getCustomer = async(customerId) => {
    return await Customer.findById(customerId);
}

const deleteCustomer = async(customerId)=> {
    const order = await Order.findByIdAndDelete(customerId);
    return false;
}

module.exports = {
    login,
    createCustomer,
    getCustomers,
    getCustomer,
    deleteCustomer,
};
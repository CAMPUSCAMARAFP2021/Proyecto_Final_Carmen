const jwt = require('jsonwebtoken');



module.exports = async(req, res, next) => {

    const {authorization} = req.headers;

     const {customer} = jwt.verify(authorization, 'secret');

     req.customer = customer;

    next();

}
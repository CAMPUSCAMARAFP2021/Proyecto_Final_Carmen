var router = require('express').Router();
var customerController = require('../controllers/customer');

var OrderRouter = require('./order');

router.post('/',async(req, res) => {
    const {customer} = req.body;
    const result =  await customerController.createCustomer(customer);
    res.json(result);
});


router.post('/login',async(req, res) => {
    const {user, password} = req.body;
    const result = await customerController.login(user, password);
    res.json(result);
});

router.get('/', async(req, res) => {
    const customer = await customerController.getCustomers();
    res.json(customer);
})

router.get('/:customerId', async(req, res) => {
    const {customerId} = req.params;
    const customer = await customerController.getCustomer(customerId);
    res.json(customer);
})

router.use('/:customerId/orders', async (req, res, next) => {
    const {customerId} = req.params;
    req.customer = await customerController.getCustomer(customerId);
    next();
} ,OrderRouter);


router.delete('/:customerId', async(req,res) => {
    const {customerId} = req.params;
    const result = await customerController.deleteCustomer(customerId);
    res.json(result);
});

module.exports = router;

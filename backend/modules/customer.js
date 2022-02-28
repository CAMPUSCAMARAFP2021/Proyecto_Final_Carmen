const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    subName: String,
    email: String,
    order: [
        {type: Schema.Types.ObjectId, ref:'Order'}
    ]
})

const Customer = model('Customer', schema);


module.exports = Customer;
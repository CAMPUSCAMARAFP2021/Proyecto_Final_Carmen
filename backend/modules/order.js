const {model, Schema} = require('mongoose');

const schema = new Schema({
    date: Schema.Types.String,
    jewels: [
        {type: Schema.Types.ObjectId, ref:'Jewel'}
    ],
    customer: [
        {type: Schema.Types.ObjectId, ref:'Customer'}
    ]
})

const Order = model('Order', schema);



module.exports = Order;
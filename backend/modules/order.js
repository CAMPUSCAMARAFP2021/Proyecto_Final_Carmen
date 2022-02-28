const {model, Schema} = require('mongoose');

const schema = new Schema({
    
    order: [
        {type: Schema.Types.ObjectId, ref:'Jewel'},
        {type: Schema.Types.ObjectId, ref:'Customer'}
    ]
})

const Order = model('Jewel', schema);
const Order = model('Customer', schema);


module.exports = Order;
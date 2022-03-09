const {model, Schema} = require('mongoose');
const Order = require('./order');




const schema = new Schema({

    name:  String,
    size:  String,
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
    materials:[String],
    description : String
  });



const Jewel = model('Jewel', schema);




module.exports = Jewel;
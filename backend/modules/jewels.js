const {model, Schema} = require('mongoose');
const Order = require('./order');
const Material = require('./materials');



const schema = new Schema({

    name:  String,
    size:  String,
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
    material:{
    type: Schema.Types.ObjectId,
    ref: 'Material',
  },
    description : String
  });



const Jewel = model('Jewel', schema);




module.exports = Jewel;
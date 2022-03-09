const {model, Schema} = require('mongoose');




const schema = new Schema({

    name:  String,
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
    materials:String,
    
  });



const Jewel = model('Jewel', schema);




module.exports = Jewel;
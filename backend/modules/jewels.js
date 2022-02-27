const {model, Schema} = require('mongoose');



const schema = new Schema({

    name:  String,
    size:  String,
    description:   String,
  },

  );



const Jewel = model('Jewel', schema);



module.exports = Jewel;
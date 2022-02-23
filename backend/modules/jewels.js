const {model, Schema} = require('mongoose');



const schema = new Schema({

    name:  String,

    description:   String,


  },

  );



const Jewel = model('Jewel', schema);



module.exports = Jewel;
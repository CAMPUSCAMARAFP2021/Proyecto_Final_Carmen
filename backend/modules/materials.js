const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    quantity: String,
    unit: String,
    quality: String,
    Material: [
        {type: Schema.Types.ObjectId, ref:'Jewel'}
    ]
})

const Material = model('Material', schema);


module.exports = Material;
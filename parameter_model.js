
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // name: {
    vessel_name: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
 
    vessel_mms: {
        type: Number,
        required: true
    },
  
});


module.exports = mongoose.model("parameter", schema);
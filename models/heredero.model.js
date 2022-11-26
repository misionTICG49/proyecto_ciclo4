const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HerederoSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    apellido:{type: String, required: true, max:60},
    telefono:{type: String, required: false, default:"", max:20},
    //parentesco:{type: String, required: false, default:"", max:60},
    email:{type: String, required: true, max:60},
    testadorId:{type: String, required: false, max:20, index: false },
    mensaje:{type: String, required: false, default:"", max: 6000} 
});

module.exports = mongoose.model("heredero", HerederoSchema); 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HerederoSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    apellido:{type: String, required: true, max:60},
    telefono:{type: String, required: false, max:20},
    parentesco:{type: String, required: true, max:60},
    email:{type: String, required: true, max:60}
});

module.exports = mongoose.model("heredero", HerederoSchema); 
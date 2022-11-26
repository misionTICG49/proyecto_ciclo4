const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestadorSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    apellido:{type: String, required: true, max:60},
    identificacion:{type: String, required: true, unique: true, max:20},
    //telefono:{type: String, required: false, max:20},
    email:{type: String, required: true, max:60},
    pass:{type: String, required: true}
    /*fechaEnvio:{type: Date, required: true, default: Date.now},
    testamento:{type: String, required: true, max: 6000},  */
});

module.exports = mongoose.model("testador", TestadorSchema); 
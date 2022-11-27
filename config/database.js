/*import Pass from "./Pass.json";

const { pass } = Pass;*/

const mongoose = require ("mongoose");

/*const host = "localhost";
const port = "27017";
const db = "herencia";*/

exports.mongoConnect = () =>{
    const mongoStringConnection = `mongodb+srv://Master:admin@cluster0-g49.izjz7gk.mongodb.net/herencia` 
    //const mongoStringConnection = `mongodb+srv://Master:admin@cluster0-g49.izjz7gk.mongodb.net/herencia` 
    // const mongoStringConnection = `mongodb://${host}:${port}/${db}`; 
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongo connection error"))
}
const Heredero = require("../models/heredero.model");

const jwt_decode = require('jwt-decode');

let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){

    const token = req.headers.authorization;
    var decoded = jwt_decode(token);

    let heredero = new Heredero({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        //parentesco: req.body.parentesco,
        email: req.body.email,
        testadorId: decoded.id
    })

    heredero.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el contacto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El contacto se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){

    const token = req.headers.authorization;
    var decoded = jwt_decode(token);

    Heredero.find({ 'testadorId': decoded.id }, function(err, heredero){
        res.json(heredero)
    })
}

exports.findOne = function(req,res){
    Heredero.findOne({_id: req.params.id},function(err, heredero){
        const token = req.headers.authorization;
        var decoded = jwt_decode(token);
    
        if(heredero.testadorId !== decoded.id){ 
            response.exito = false,
            response.msg = "No tiene acceso a visualizar este contacto"
            res.status(401)
            res.json(response)
            return;
        }

        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al obtener el contacto"
            res.json(response)
            return;
        }

        res.json(heredero)
    })
}

exports.update = function(req,res){
    let body = req.body;
    /*let heredero1 = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        //parentesco: req.body.parentesco,
        email: req.body.email
    }*/
    
    /*Heredero.findOne({_id: req.params.id},function(err, heredero){
        const token = req.headers.authorization;
        var decoded = jwt_decode(token);

        if(heredero.testadorId !== decoded.id){ 
            console.error(err)
            response.exito = false,
            response.msg = "No tiene acceso a modificar el contacto"
            res.status(401)
            res.json(response)
            return;
        }*/

        Heredero.updateOne({_id: body._id}, {$set: req.body}, function(err){
            if(err){
                console.error(err), 
                response.exito = false,
                response.msg = "Error al modificar el contacto"
                res.json(response)
                return;
            }

            response.exito = true,
            response.msg = "El contacto fue modificado correctamente"
            res.json(response)
        })
    }/*)
}*/

exports.remove = function(req,res){
    /*Heredero.findOne({_id: req.params.id},function(err, heredero){
        const token = req.headers.authorization;
        var decoded = jwt_decode(token);

        if(heredero.testadorId !== decoded.id){ 
            response.exito = false,
            response.msg = "No tiene acceso a eliminar el contacto"
            res.status(401)
            res.json(response)
            return;
        }*/

        Heredero.findByIdAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.error(err), 
                response.exito = false,
                response.msg = "Error al eliminar el contacto"
                res.json(response)
                return;
            }

            response.exito = true,
            response.msg = "Contacto eliminado correctamente"
            res.json(response)
        })
    //})
}


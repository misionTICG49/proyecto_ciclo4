const Heredero = require("../models/heredero.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let heredero = new Heredero({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        parentesco: req.body.parentesco,
        email: req.body.email
    })

    heredero.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el heredero"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El heredero se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Heredero.find(function(err, heredero){
        res.json(heredero)
    })
}

exports.findOne = function(req,res){
    Heredero.findOne({_id: req.params.id},function(err, heredero){
        res.json(heredero)
    })
}

exports.update = function(req,res){
    let heredero = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        parentesco: req.body.parentesco,
        email: req.body.email
    }

    Heredero.findByIdAndUpdate(req.params.id, {$set: heredero}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el heredero"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Heredero modificado correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Heredero.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el heredero"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Heredero eliminado correctamente"
        res.json(response)
    })
}


const Testador = require("../models/testador.model");
const Usuario = require("../models/usuario.model");
const crypto = require("crypto");


let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let testador = new Testador({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        telefono: req.body.telefono,
        email: req.body.email,
        pass: crypto.createHash("sha512").update(req.body.pass).digest("hex"),
        fechaEnvio: req.body.fechaEnvio,
        testamento: req.body.testamento
    })

    let usuario = new Usuario({
        _id: testador._id,
        usuario: testador.identificacion,
        pass: testador.pass
    })

    testador.save(
        usuario.save(function(err){
            if(err){
                console.error(err), 
                response.exito = false,
                response.msg = "Error al guardar el testador"
                res.json(response)
                return;
            }

            response.exito = true,
            response.msg = "El testador se guardó correctamente"
            res.json(response)
        }))
}

exports.find = function(req,res){
    Testador.find(function(err, testador){
        res.json(testador)
    })
}

exports.findOne = function(req,res){
    Testador.findOne({_id: req.params.id},function(err, testador){
        res.json(testador)
    })
}


exports.update = function(req,res){
    let testador = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        telefono: req.body.telefono,
        email: req.body.email,
        pass: crypto.createHash("sha512").update(req.body.pass).digest("hex"),
        fechaEnvio: req.body.fechaEnvio,
        testamento: req.body.testamento
    }

    let usuario = {
        //_id: testador._id,
        usuario: testador.identificacion,
        pass: testador.pass
    }

    Testador.findByIdAndUpdate(req.params.id, {$set: testador}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el testador"
            res.json(response)
            return;
        }

        Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, function(err){
            if(err){
                console.error(err), 
                response.exito = false,
                response.msg = "Error al modificar el testador"
                res.json(response)
                return;
            }
            response.exito = true,
            response.msg = "Testador modificado correctamente"
            res.json(response)
        })
    })
}

exports.remove = function(req,res){
    Testador.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el testador"
            res.json(response)
            return;
        }

        Usuario.findByIdAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.error(err), 
                response.exito = false,
                response.msg = "Error al eliminar el testador"
                res.json(response)
                return;
            }
            response.exito = true,
            response.msg = "Testador eliminado correctamente"
            res.json(response)
        })
    })
}

const express = require("express")
const router = express.Router()
const usuariosController = require("../controllers/usuario.controller")
const testadorController = require("../controllers/testador.controller")

router.post("/register", testadorController.create)
router.post("/login", usuariosController.login)


module.exports = router

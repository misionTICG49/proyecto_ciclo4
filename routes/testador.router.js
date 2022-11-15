const express = require("express")
const router = express.Router()
const testadorController = require("../controllers/testador.controller")

/*router.post("/", testadorController.create)*/
router.get("/", testadorController.find)
router.get("/:id", testadorController.findOne)
router.put("/:id", testadorController.update)
router.delete("/:id", testadorController.remove)

module.exports = router
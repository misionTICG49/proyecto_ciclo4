const express = require("express")
const router = express.Router()
const herederoController = require("../controllers/heredero.controller")

router.post("/", herederoController.create)
router.get("/", herederoController.find)
router.get("/:id", herederoController.findOne)
router.put("/:id", herederoController.update)
router.delete("/:id", herederoController.remove)

module.exports = router
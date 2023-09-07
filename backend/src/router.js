const express = require("express")

const router = express.Router()

const itemControllers = require("./controllers/itemControllers")
const charactersControllers = require("./controllers/charactersControllers")
const spellsControllers = require("./controllers/spellsControllers")

router.get("/spells", spellsControllers.pouletBrowse)
router.get("/spellscharacter/:id", spellsControllers.readSpellsForOneCharacter)

router.get("/characters", charactersControllers.browse)
router.get("/characters/:id", charactersControllers.read)
router.post("/characters", charactersControllers.add)
router.put("/characters/:id", charactersControllers.edit)
router.delete("/characters/:id", charactersControllers.destroy)

router.get("/items", itemControllers.browse)
router.get("/items/:id", itemControllers.read)
router.put("/items/:id", itemControllers.edit)
router.post("/items", itemControllers.add)
router.delete("/items/:id", itemControllers.destroy)

module.exports = router

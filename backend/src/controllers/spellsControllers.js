const models = require("../models")

const pouletBrowse = (req, res) => {
  models.spells
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const readSpellsForOneCharacter = (req, res) => {
  models.spells
    .readSpellAsOneCharacter(req.params.id)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  pouletBrowse,
  readSpellsForOneCharacter,
}

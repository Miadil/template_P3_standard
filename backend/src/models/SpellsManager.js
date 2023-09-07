const AbstractManager = require("./AbstractManager")

class SpellsManager extends AbstractManager {
  constructor() {
    super({ table: "spells" })
  }

  insert(item) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      item.title,
    ])
  }

  readSpellAsOneCharacter(id) {
    return this.database.query(
      `SELECT c.id, c.lastname, h.houseName, c.firstname, JSON_ARRAYAGG(s.spellName) AS all_spells 
      FROM characters AS c
        join houses as h
        On h.id = c.houses_id
        Join spells_has_characters AS sHc
        ON sHc.characters_id = c.id
      Join spells AS s
        ON s.id = sHc.spells_id
      where c.id = ?
      Group by c.firstname,c.lastname, c.houses_id
    `,
      [id]
    )
  }
  // readSpellAsOneCharacter(id) {
  //   return this.database.query(
  //     `SELECT c.firstname,  JSON_ARRAYAGG(s.spellName) AS all_spells
  //     FROM characters AS c
  //     Join spells_has_characters AS sHc
  // 	    ON sHc.characters_id = c.id
  //     Join spells AS s
  // 	    ON s.id = sHc.spells_id
  //     where c.id = ?
  //     Group by c.firstname
  //   `,
  //     [id]
  //   )
  // }
  // readSpellAsOneCharacter(id) {
  //   return this.database.query(
  //     `SELECT c.firstname, group_concat(s.spellName separator ',') AS all_spells
  //     FROM characters AS c
  //     Join spells_has_characters AS sHc
  // 	    ON sHc.characters_id = c.id
  //     Join spells AS s
  // 	    ON s.id = sHc.spells_id
  //     where c.id = ?
  //     Group by c.firstname
  //   `,
  //     [id]
  //   )
  // }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    )
  }
}

module.exports = SpellsManager

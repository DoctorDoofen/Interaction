const Character = require("./character")


class Player extends Character {
    constructor(name, _class, race, health) {
        super(name, _class, race, health)


    }



}

const player1 = new Player('Andrew', 'Paladin', 'Human', 100)

console.log(player1.getHealth())
player1.damageCharacter(20)
console.log(player1.getHealth())
player1.healCharacter(15)
console.log(player1.getHealth())

module.exports = Player
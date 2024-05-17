const Character = require("./character")

class Enemy extends Character {
    constructor(name, _class, race, health, rank) {
        super(name, _class, race, health)
        this.rank

    }


}

let boss = new Enemy('God', 'Wizard', 'Human', 300, 'Boss')

console.log(boss)
boss.damageCharacter(100)
console.log(boss.health)
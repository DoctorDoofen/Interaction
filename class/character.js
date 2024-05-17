class Character {
    constructor(name, _class, race, health) {
        this.name = name
        this._class = _class
        this.race = race
        this.health = health
    }

    fullHealth() {
        if (this._class === 'Paladin') {
            return 100
        }
        if (this._class === 'Wizard') {
            return 25
        }
        if (this._class === 'Rogue') {
            return 30
        }
    }

    getHealth() {
        let result = this.health
        return result
    }

    damageCharacter(hit) {
        this.health -= hit

        if (this.health === 0) {
            console.log(`${this.name} is making death saving throws`)
        }

    }

    healCharacter(healing) {

        if ((this.getHealth() + healing) > this.fullHealth()) {
            this.health = this.fullHealth()
        } else if ((this.getHealth() + healing) < this.fullHealth()) {
            this.health += healing
        }
    }
}

module.exports = Character
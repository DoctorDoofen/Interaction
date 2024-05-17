const Item = require('./items')

class Weapon extends Item {
    constructor(name, use, description, damage) {
        super(name, use, description)
        this.damage = damage
    }


}

let sword = new Weapon('oathkeeper', 'slashy stabby', 'a mighty sword weilded by kings', 30)

sword.validateItem()
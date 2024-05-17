

class Item {
    constructor(name, use, description) {
        this.name = name
        this.use = use
        this.description = description
    }

    validateItem() {
        if (!this.name || !this.use || !this.description) {
            throw new Error('Invalid Item')
        } else {
            return true
        }
    }

}

let staff = new Item('Wizard Staff', 'Spell Casting', 'A powerfull staff only able to be used by a level 5 Wizard')

console.log(staff.validateItem())

module.exports = Item
// Наследование
// - extends
// - super()

class Hero {
    constructor({name = 'hero', xp = 0} = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor({weapon, ...restProps}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

class Berserk extends Warrior{
    constructor({ warcry, ...restProps }) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

class Mage extends Hero{
    constructor({spells, ...restProps} = {}) {
        super(restProps);
        
        this.spells = spells;
    }
    
    cast() {
        console.log(`${this.name} что-то там кастует`);
    }
}

const mango = new Warrior({
    name: 'mango',
    xp: 1000,
    weapon: 'алебарда',
});

mango.gainXp(1000);
console.log(mango);

const poly = new Mage({
    name: 'poly',
    xp: 500,
    spells: ['фаербол'],
});

poly.cast();
poly.gainXp(200);
console.log(poly);

const ajax = new Berserk({
    name: 'ajax',
    xp: 500,
    weapon: 'axe',
    warcry: 'waaaaaaaaaah',
});

ajax.gainXp(200);
ajax.attack();
console.log(ajax);




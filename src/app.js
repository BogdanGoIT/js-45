// импорт пакет
// const Joi = require('joi');
// const shortid = require('shortid');


// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// // console.log(passwordSchema.validate('fkd'))


// console.log(shortid.generate());

const sum = (a, b) => a + b;

sum(2, 3);

class Hero{
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const h = new Hero('Mango');
// деструктуризируем в параметрах:
const Car = function ({ brand, model, price } = {}) {

    this.brand = brand;
    this.model = model;
    this.price = price;

};


Car.prototype.changePrice = function (newPrice) {
         this.price = newPrice;
 }

Car.description = 'Класс описывающий автомобиль';


// 1. Если функция вызывается через new, создаеться пустой обьект
const myCar = new Car({
    brand: 'Audi',
    model: 'b6',
    price: 350000
});
// console.log(myCar);

myCar.changePrice(100000);

// console.log(myCar);



// Классы:
// - обьявление
// - конструктор
// - методы
// - static
// - приватные свойства
// - синтаксис публичных свойств и методов
// - геттеры и сеттеры

class Car1 {
    static description = 'Класс описывающий автомобиль';
    
    // #test = 'test';

    constructor( {brand, model, price } = {}) {
        console.log(this);

        
        this.brand = brand;
        this._model = model;
        this._price = price;
    }

    // changePrice(newPrice) {
    //     this.price = newPrice;
    // }

    set price(newPrice) {
        this._price = newPrice;
    }

    get price() {
        return this._price;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}

// console.dir(Car1);

const carInstance = new Car1({
    brand: 'Audi',
    model: 'Q6',
    price: 350000
});

console.log(carInstance);

console.log(carInstance.model);
carInstance.model = 'Q7';
console.log(carInstance.model);

console.log(carInstance);
carInstance.price = 380000;
console.log(carInstance.price);

console.log(carInstance);
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


// ## Example 4 - Заметки

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

class Notes {
  constructor(items) {
    this.items = items;
  }

  static Priority = { LOW: "low", NORMAL: "normal", HIGH: "high" };

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    this.items = this.items.filter((item) => item.text !== text);
  }

  updatePriority(newText, newPriority) {
    this.items = this.items.map((item) =>
      item.text === newText ? { ...item, priority: newPriority } : item
    );
  }
}

// item.text === newText
// true
// {...item, priority: newPriority }

// const user = {
//   name: "Bob",
//   age: 15,
// };

// const user2 = {
//   ...user,
//   age: 45,
// };

// {name: 'Bob', age: 45}

const myNotes = new Notes([]);

myNotes.addNote({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: "Моя вторая заметка",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote("Моя первая заметка");
console.log(myNotes.items);

myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);
console.log(myNotes.items);
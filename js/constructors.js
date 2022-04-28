// Основы ООП: класс, экземпляр (обьект), интерфейс


// // деструктуризируем в параметрах:
// const Car = function ({ brand, model, price } = {}) {
//     // деструктуризация аргументов в теле:
//     // const { brand, model, price } = config;

//     // 2. Функция вызываеться в контексте созданого обьекта
//     //    тоесть в this записываеться ссылка на него
     
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//     // 3. в свойство this.[[Prototype]] записываеться ссылка на обьект Car.prototype
//     //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
    
//     // 4. ссылка на обьект возвращаеться в место вызова new Car
// };


// Car.prototype.changePrice = function (newPrice) {
//          this.price = newPrice;
//  }


// // 1. Если функция вызывается через new, создаеться пустой обьект
// const myCar = new Car({
//     brand: 'Audi',
//     model: 'b6',
//     price: '350000'
// });

// console.log(myCar);  -> price: 350000
// myCar.changePrice(100000);
// console.log(myCar); -> price: 100000

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'x5',
//     price: '200000'
// });

// console.log(myCar2);

// const myCar3 = new Car();
// console.log(myCar3);


// деструктуризируем в параметрах:
const Car = function ({ brand, model, price } = {}) {
    // деструктуризация аргументов в теле:
    // const { brand, model, price } = config;

    // 2. Функция вызываеться в контексте созданого обьекта
    //    тоесть в this записываеться ссылка на него
     
    this.brand = brand;
    this.model = model;
    this.price = price;

    // 3. в свойство this.[[Prototype]] записываеться ссылка на обьект Car.prototype
    //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
    
    // 4. ссылка на обьект возвращаеться в место вызова new Car
};


Car.prototype.changePrice = function (newPrice) {
         this.price = newPrice;
 }


// 1. Если функция вызывается через new, создаеться пустой обьект
const myCar = new Car({
    brand: 'Audi',
    model: 'b6',
    price: 350000
});
console.log(myCar);

myCar.changePrice(100000);

console.log(myCar);

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'x5',
//     price: 200000
// });

// console.log(myCar2);

// const myCar3 = new Car();
// console.log(myCar3);


const User = function ({email, password} = {} ) {
    
    this.email = email;
    this.password = password;

};

User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
}

const mango = new User({
    email: 'email@gmail.com',
    password: 'fgJ525',
});

mango.changeEmail('fox@mail.ua');
console.log(mango);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueGenres);

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}


// const getFriends = (users) => users.flatMap(user => user.friends):
// ['Sharron Pace', 'Briana Decker', 'Sharron Pace', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman', 'Goldie Gentry', 'Briana Decker']

// .filter((friends, index, array) => array.indexOf(friends) === index):

// friends = Sharron Pace
// index = 0
// array = ['Sharron Pace', 'Briana Decker', 'Sharron Pace', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman', 'Goldie Gentry', 'Briana Decker']

// array.indexOf(Sharron Pace) === 0
// 0 === 0 // true
// [Sharron Pace, ]

// friends = Briana Decker
// index = 1
// array = ['Sharron Pace', 'Briana Decker', 'Sharron Pace', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman', 'Goldie Gentry', 'Briana Decker']
// array.indexOf(Briana Decker) === 1
// 1 === 1 // true
// [Sharron Pace, Briana Decker, ]

// friends = Sharron Pace
// index = 2
// array = ['Sharron Pace', 'Briana Decker', 'Sharron Pace', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman', 'Goldie Gentry', 'Briana Decker']
// array.indexOf(Sharron Pace) === 2
// 0 === 2 // false
// [Sharron Pace, Briana Decker, ]

// const getFriends = (users) => users.flatMap(user => user.friends).filter((friends, index, array) => array.indexOf(friends) === index);



// console.log(getFriends([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]));


// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false


// // Change code below this line
// const isEveryUserActive = (users) => users.every(value => value.isActive)
// // Change code above this line


// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);


// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);


// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);


// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32


// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => previousValue + number);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, { playtime, gamesPlayed }) => total += playtime / gamesPlayed, 0);


// Фу-кция сравнения (callback)
// numbers.sort((currEl, nextEl) => nextEl - currEl);

// console.log(numbers);

// как сделать копию массива что бы не сортировать оригинал
// - Array.prototype.slice()
// - Операция spread

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
// const sortedByAuthorName = [...books].sort((firstName, secondName) => firstName.author.localeCompare(secondName.author));
// console.log(sortedByAuthorName);

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]


// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(books => books.rating > MIN_BOOK_RATING)
//   .map(books => books.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);


// Change code below this line
// const getSortedFriends = users => [...users]
//   .flatMap(users => users.friends)
//   .filter((friends, index, array) => array.indexOf(friends) === index)
//   .sort((a, b) => a.localeCompare(b));
// Change code above this line

// Change code below this line
// const getTotalBalanceByGender = (users, gender) => [...users]
//   .filter(users => users.gender === gender)
//   .reduce((total, { balance }) => total + balance, 0);
// // Change code above this line

// console.log(getTotalBalanceByGender([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ], "female"));




// Петя біжить швидко, тому що він (this) намагається зловити поїзд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();


// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]


// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis:  undefined

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis:  {username: 'Mango', showContext: ƒ}


// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis:  undefined

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext(); // this in showThis:  undefined

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}


// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// // ❌ Було
// // makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Big Mike"));

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"))

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// // console.log(dog); // { name: 'Mango', __proto__: animal }
// // console.log(animal.isPrototypeOf(dog)); // true

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']



// Метод побудови класу залежить від того, що вам потрібно. У нашому випадку, клас - це користувач, тому ми додамо в нього поля для імені та пошти.
// class User {

//    // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   // Обов'язкове оголошення приватних властивостей
//   #email;
//   #role;

//   // Деструктуризуємо об'єкт
//   constructor({ name, email, role }) {
    
//     this.name = name;
//     this.#email = email;
//     this.#role = role;
//   }

//   // // Метод getEmail
//   // getEmail() {
//   //   return this.email;
//   // }

//   // // Метод changeEmail
//   // changeEmail(newEmail) {
//   //   this.email = newEmail;
//   // }


//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
    
//   }



// }


// // Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.
// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }

// // Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"


// У виразі class Child extends Parent дочірній клас Child наслідує (розширює) від батьківського класу Parent.
// class Child extends Parent {
//   // ...
// }


// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }


// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']


// const dog = Object.create(animal);
// Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.


// Якщо параметрів багато (більше 2-х), то, як правило, застосовують патерн «Об'єкт параметрів».
// class Car {
//   // Change code below this line
//     constructor({brand, model, price}) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return this.price = newPrice;
//   }
//   // Change code above this line
// }

// const car1 = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000,

// });
// console.log(car1);

// const car2 = new Car({
//   brand: "BMW",
//   model: "X5",
//   price: 58900,
// });
// console.log(car2);

// const car3 = new Car({
//   brand: "Nissan",
//   model: "Murano",
//   price: 31700,
// });
// console.log(car3);

// console.log(car1.getPrice());

// car1.changePrice(30000);

// console.log(car1.getPrice());

// - getItems() - возвращает массив товаров.
// - addItem(newItem) - получаетновый новый товар и добавляет его к текущим.
// - removeItem(itemToRemove) - получает товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     if (!this.items.includes(itemToRemove)) {
//       return 'Товар відсутній на складі';
//     }

//     this.items = this.items.filter(items => items !== itemToRemove);
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }


// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// class Car {
//   // Change code below this line
//   #brand;


//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }


// const Car1 = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000,
// })


// Гетери та сетери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс.

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

// // Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код, наприклад, з будь-якими перевірками

//   // Сеттер email
//   set email(newEmail) {
//     if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com


// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }



// Додамо класу користувача приватну властивість role - його роль, що визначає набір прав, наприклад, адміністратор, редактор, звичайний користувач тощо.
// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"


// class Car {
//   // статичні властивості (static). Вони корисні для зберігання інформації, що стосується класу.
// static MAX_PRICE = 50000;

//   // Change code below this line
//   #price;

  

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {

//     }
//     else this.#price = newPrice;
    
    
//   }
//   // Change code above this line
// }

// const audi = new Car({
//   price: 35000,
// });


// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// class Car {
//   static #MAX_PRICE = 50000;

//   static checkPrice(price) {
//     if (price <= this.#MAX_PRICE) {
//       return "Success! Price is within acceptable limits";
//     }

//     return "Error! Price exceeds the maximum";
//   }
//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class Child extends Parent {
//   // дочірній клас Child наслідує (розширює) від батьківського класу Parent.
// - приватні властивості і методи батьківського класу не наслідуються дочірнім класом.
// }


// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     }
  
// }

// console.log(Admin.AccessLevel.SUPERUSER);


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, posts }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// const editor = new Admin({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name.includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const indx = [];
//     for (let {name} of this.potions) {
//       indx.push(name);
//     }

//     const potionIndex = indx.indexOf(potionName);
//     // console.log(potionIndex);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1){
//       const {name} = this.potions[i];

//       if (oldName === name) {
//         console.log('нашли ', oldName);
//         console.log(i);

//         potions[i].name = newName;
//       }

      
//     }
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //  return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.
//   },
//   // Change code above this line
// };


// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')


// console.log(atTheOldToad.getPotions());



// если нужно поэлементно трансформировать массив в новый — используйте map().
// const allActivities = [
//  { title: 'My activity', coordinates: [ 50.123, 3.291] },
//  { title: 'Another activity', coordinates: [ 1.238, 4.292] }
// ]

// const allCoordinates = allActivities.map(activity => activity.coordinates)
// console.log(allCoordinates)


// Или же можно удалять строго определённые элементы массива:
// const participants = [
//  { id: 'a3f47', username: 'john' },
//  { id: 'fek28', username: 'mary' },
//  { id: 'n3j44', username: 'sam' },
// ]

// function removeParticipant(participants, id) {
//  return participants.filter(participant => participant.id !== id)
// }

// // forEach
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index, arr) => console.log(number > arr[index - 1]));

// console.log(numbers);

// filter - пошук унікальних значень

// const allCourses = ['JS', 'HTML', 'JS', 'React'];

// const uniqueCourses = allCourses
//     .filter((course, index, array) => array.indexOf(course) === index);

// // 1 итерация
// // course = 'JS'
// // index = allCourses.indexOf('JS')
// // 0 === 0 // true
// // ['JS']

// // 2 итерация
// // course = 'HTML'
// // index = allCourses.indexOf('HTML')
// // 1 === 1 // true
// // ['JS', 'HTML']

// // 3 итерация
// // course = 'JS'
// // index = allCourses.indexOf('JS')
// // 0 === 2 // false
// // ['JS', 'HTML']

// console.log(uniqueCourses);

// // new Set() - пошук унікальних значень

// console.log(new Set(allCourses));





// # Модуль 4. Занятие 8. Перебирающие методы массива

// ## Коллекция объектов для всех примеров с автомобилями

// ```js
// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];


// ## Example 1 - Метод map

// array.method(element, index, array) => {
//     // some logic
// }

// Пусть функция `getModels` возвращает массив моделей (поле model) всех
// автомобилей.

// const getModels = cars => cars.map(car => car.model);
// console.table(getModels(cars));


// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) =>
//     cars.map(car => ({ ...car, price: (1 - discount) * car.price }));


// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// console.table(cars);

// ## Example 3 - Метод filter

// Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
// чем значение параметра `threshold`.

// const filterByPrice = (cars, threshold) => cars
//     .filter(car => car.price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));


// Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
// onSale которых true.

// const getCarsWithDiscount = cars => cars
//     .filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));



// ## Example 6 - Метод find
// найти машину по моделям

// const getCarByModel = (cars, model) => cars.find(car => car.model === model)

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));


// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.

// const sortByAscendingAmount = [...cars]
//     .sort((a, b) => a.amount < b.amount ? -1 : 1); // 14 < 2 // false => 1
// // a - 0 => 1
// // b - 1 => 0

// console.table(sortByAscendingAmount);

// ## Example 9 - Метод sort

// Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
// по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
// значения параметра `order`.

// const sortByModel = (cars, order) => {
//     if(order === 'asc')
//         return [...cars].sort((a, b) => a.model.localeCompare(b.model));

//     if(order === 'desc')
//         return [...cars].sort((a, b) => b.model.localeCompare(a.model));
// }
//     console.table(sortByModel(cars, 'asc'));
//     console.table(sortByModel(cars, 'desc'));


// ## Example 10 - Метод reduce( обєднати кілька обьєктів в один, обєднати кілька масивів, обєднати кілька рядків )

// Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
// свойств `amount`).
// const getTotalAmount = cars => cars.reduce((accum, cars) => accum += cars.amount, 0);
// console.log(getTotalAmount(cars));

// // Пусть функция `getTotalAmount` возвращает загальну вартість
// const getTotalAmount = cars => cars.reduce((accum, cars) => accum += cars.amount * cars.price, 0);
// console.log(getTotalAmount(cars));

// const getTotalAmount = (cars) => {
//     let total = 0;
//     for (let car of cars) {
//         total += car.amount;
//     }
//     return total;
// }

// console.log(getTotalAmount(cars));


// ## Example 11 - Цепочки методов

// Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
// только тех, которые сейчас на распродаже.

// const getModelsOnSale = (cars) =>
//   cars
//     .filter(({ onSale }) => onSale)
//     .map(({ model }) => model)
//     .sort((a, b) => a.localeCompare(b))
//     .find((model) => model === "Fusion")
//     .toUpperCase();

// console.table(getModelsOnSale(cars));




// ## Example 1 - Мастерская драгоценностей

// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

// ```js
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(stone => stone.name === stoneName);
//     return price * quantity;
//   },
// };


// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); //


// ## Example 2 - Телефонная книга
// this - це спицифічна змінна яка лише доступна в середині ф-ції
// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.
// const phonebook = {
//   contacts: [],
//   add: (contact) => {
//     console.log("this", this);
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };


// const phonebook = {
//   name: "book1",
//   contacts: [],
//   add(contact) {
//     console.log("this", this);
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };


// const phonebook2 = {
//   name: "book2",
//   contacts: [],
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };


// // візьми в сусіда дрельку phonebook.add і викорыстай її в обєкті phonebook2
// phonebook.add.call(phonebook2, {
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// });

// // call - coma
// // apply - array


// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b
//   },

//   mult() {
//     return this.a * this.b;
//   }
// }

// calculator.read(4, 5);

// console.log(calculator.mult());

// class User {
//   #percent;

//   constructor(percent) {
//     this.#percent = percent;
//   }

//   get percent() {
//     return this.#percent
//   }

// }

// class Admin extends User {
//   #percent;

//   constructor(percent, role) {
//     super(percent); // constructor з class User
//     this.role = role
//   }

//   set percent(value) {
//     this.#percent = value;
//   }
// }

// const user = new User(20);
// console.log(user);

// const admin = new Admin(30, 'Admin');
// console.log(admin);
// admin.percent = 40;
// console.log(admin);



// ## Example 2 - Хранилище

// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив товаров.
// - `addItem(item)` - получает новый товар и добавляет его к текущим.
// - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    if (!this.items.includes(item))
      return 'товар відсутній на складі'
    this.items = this.items.filter(items => items !== item);
  }
}

// ```js
const storage = new Storage(["apple", "lemon", "bananas", "grape"]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("kiwi");
// console.table(storage.items);
// storage.removeItem("lemon");
// console.table(storage.items);


// const user = {
//   name: "Bob",
//   age: 23,
//   getInfo() {
//     return `${this.name} and ${this.age}`;
//   },
// };


// const user2 = {
//   name: "Jack",
//   age: 35,
// };

// const getInfoForUser2 = user.getInfo.bind(user2);

// console.log(getInfoForUser2);

// console.log(user.getInfo.call(user2));
// console.log(getInfoForUser2());

// console.log(user.getInfo());

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;


// DOM

// получаем обьект body

const bodyEl = document.body;
// console.log(bodyEl)


// коллекция childNodes содержит список всех детей, включая текстовые узлы
const childNodes = bodyEl.childNodes;
// console.log(childNodes);

// childNodes - похож на массив. Но это не массив, а коллекция - особый перебираемый обьект - псевдомассив.

// Отличая от массива:
// 1. для перебора коллекции мы можем использовать for...of:
// 2. методы массивов не будут работать, потому что коллекция - это не массив

// перебор коллекции 
for (let node of childNodes) {
  // console.log(node); // покажет все узлы из коллекции
}

// получаем коллекцию всех дочерних элиментов 
const bodyChildren = bodyEl.children;
// console.log(bodyChildren);

// поиск произвольного элемента

// поиск по селектору класса
// const elemsOne = document.querySelectorAll('.site-nav');
// console.log(elemsOne);

// // поиск по селектору класса
// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo);

// // поиск по смешеному селектору тега и класа
// const elemsThree = document.querySelectorAll('li.site-nav__item');
// console.log(elemsThree);

// // поиск по тегу первого уровня вложенности
// const elemsFour = document.querySelectorAll('.site-nav>li');
// console.log(elemsFour);

// // поиск по нескольким класам
// const elemsFive = document.querySelectorAll('.site-nav, .site-nav__text');
// console.log(elemsFive);

// // поиск по вложенным класам
// const elemsSix = document.querySelectorAll('.site-nav__item .site-nav__link');
// console.log(elemsSix);

// // поиск по ID
// const elemsSeven = document.querySelectorAll('#title');
// console.log(elemsSeven)

// // поиск по атрибуту
// const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight);

// // поиск по атрибуту со значением
// const elemsNine = document.querySelectorAll('[data-item="85"]');
// console.log(elemsNine);

// querySelectorAll - статичная коллекция

// получение конкретного элемента коллекции
const elms = document.querySelectorAll('li');
// console.log(elms[2]);

// for (const item of elms) {
//   console.log(item);
// }

// elms.forEach(item => console.log(item));

// искать можно не только в document
// const subList = document.querySelectorAll('.site-nav__item');
// const subItem = subList[0].querySelectorAll('a');
// // console.log(subItem);


// // querySelector - возвращает первый елимент внутри элемента, соответствующий данному CSS-селектору

// const lessonList = document.querySelector('a');
// // console.log(lessonList)

// // Получаем статическую коллекцию
// const listStatic = document.querySelectorAll('.site-nav__item');

// // Получаем "живую" коллекция
// const listLive = document.getElementsByClassName('site-nav__item');

// console.log(listStatic);
// console.log(listLive);


// // Создаем новый HTML - обьект
// const lesonList = document.querySelector('.site-nav__item');
// lesonList.insertAdjacentHTML('beforeend', '<li class="site-list__item">Новый пункт</li>');

// живая коллекция содержит актуальную инфу о DOM - дереве


// innerHTMl

// получаем обьект
// const textEl = document.querySelector('.site-nav__text');
// console.log(textEl)

// // получаем содержимое обьекта "как есть" вместе с HTML
// const textELContent = textEl.innerHTML;
// console.log(textELContent);

// // перезаписываем содержимое обьекта
// textEl.innerHTML = 'Живи, а работай в свободное время';

// // дописываем содержимое обекта
// textEl.innerHTML = `<h3>${textELContent} <p>Живи, а работай в <span class="yellow" > свободное </span> время </h3>`;
// console.log(textEl.innerHTML);


// просто текст элемента textContent

// получаем обьект
// const textEl = document.querySelector('.site-nav__item');
// const textElContent = textEl.textContent;
// console.log(textElContent);

// // полезная возможность textContent - записывать текст "безопасным способом"

// textEl.textContent = `<p>Живи, а работай в <span class="yellow" > свободное </span> время </p>`;
// console.log(textEl.textContent);

// мы не хотим, что бы на сайте появлялся произвольный HTML - код.
// присаиваем через textContent - один из способов от этого защитится


// создание элиментов и узлов.


// // получаем обьект
// const textEl = document.querySelector('.site-nav__item');

// // Создание нового элимента (тега)
// const newEl = document.createElement('div');
// console.log(newEl);

// // наполняем новый элемент
// newEl.innerHTML = `<p>Живи, а работай в <span class="yellow" > свободное </span> время </p>`;

// // создание нового текстового узла
// const newText = document.createTextNode('Привет');
// console.log(newText);

// // созданые обьекты находятся в константах,
// // но не являються частью документа

// // вставляем новый элемент...

// // ... перед обьектом
// // textEl.before(newEl);
// // ... после обьекта
// // textEl.after(newEl);
// // ... внутрь в начале обьекта
// // textEl.prepend(newEl);
// // ... внутрь и в конец обьекта
// // textEl.append(newEl);

// // вставка нескольких фрагментов сразу
// textEl.append(newEl, "Привет")


// методы вставки

// получаем обьект
// const textEl = document.querySelector('.site-nav__item');

// // вставляем текст, HTML, элемент

// textEl.insertAdjacentHTML("afterend", `<p>Живи, а работай в <span class="yellow" > свободное </span> время </p>`);

// "beforebegin" - вставить html непосредственно перед textEl
// "afterbegin" - вставить html в начало внутрь textEl
// "beforeend" - вставить html в конец внутрь textEl
// "afterend" - вставить html непосредственно после textEl



// // Создание нового элимента (тега)
// const newEl = document.createElement('div');


// // получаем обьект
// const title = document.querySelector('h2')

// // переносим title в конец newEl
// newEl.append(title);


// // удаление узлов

// // получаем обьект
// const newObjEl = document.querySelector('.site-nav__item');

// // удаляем обьекта
// newObjEl.remove();


// // Управление класами
// // Свойства className и classList

// // свойство className

// // получаем элемент
// const el = document.querySelector('.site-nav__text');

// // получаем имена классов
// const elClassName = el.className;
// console.log(elClassName);

// // перезаписываем все классы
// // el.className = "red"

// // свойство classList - метод для удаления/добавления одного класа

// // добавить класс
// el.classList.add('active');
// // удалить класс
// el.classList.remove('active');
// // добавить класс, если его нет, а если есть удалить.
// el.classList.toggle('active');
// // проверка наличия класса, возвращает true/false
// el.classList.contains('active')

// // управление стилями

// // получает элемент
// const elm = document.querySelector('.site-nav__item');
// // задаем стиль с помощью CSS свойства
// elm.style.backgroundColor = "red";
// // для свойств из нескольких свойств записываем camalCase

// // сброс стиля
// elm.style.backgroundColor = "";



// События

// element.addEventListner(event, handler[, options]);

// const button = document.querySelector('.js-button');

// button.addEventListener('click', e => console.log('клик'));
// button.addEventListener('click', e => console.log('клак'));

// function showConsole() {
//   console.log('Клик!');
//   button.removeEventListener('click', showConsole);
// }

// button.addEventListener('click', showConsole);
// button.addEventListener('mouseenter', showConsole)


// обьект события

// function showConsole() {
  // тип события
  // console.log(event.type);
  // // обьект на котором сработал оброботчик
  // console.log(event.target);
  // обьект которому назначем обработчик
  // console.log(event.currentTarget);
  // положение курсора по оси Х
  // console.log(event.clientX);
  // // положение курсора по оси Y
  // console.log(event.clientY);

  // все детали события
  // console.log(event)
// }


// делигирование событий

// const sectionButton = document.querySelector('.section-button');


// sectionButton.addEventListener('click', event => {
//   if (event.target.closest('.js-button')) {
//     showConsole();
//   }
// });

// const link = document.querySelector('.site-nav__link');

// link.addEventListener('click', event => {
//   console.log('Наши действия');
//   // отменить действия браузера переход по ссылке
//   event.preventDefault();
// })


const sectionButton = document.querySelector('.section-button');

// const hoverHandlar = (e) => {
//   // деструктуризуємо і переіменовуємо target на button
//   const { target: button } = e;
//   button.style.top = `${Math.floor(Math.random() * (window.innerHeight - button.clientHeight))}px`;
//   button.style.left = `${Math.floor(Math.random() *(window.innerWidth - button.clientWidth))}px`;
// }

// sectionButton.addEventListener('mouseover', hoverHandlar);


sectionButton.addEventListener('click', (e) => {
  const { target } = e;
  if (!target.dataset.modal) {
    return;
  }

  console.log(target.dataset.modal);
})








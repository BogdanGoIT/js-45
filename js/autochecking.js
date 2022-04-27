
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
console.log(allGenres);
const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);
console.log(uniqueGenres);

function showThis() {
  console.log("this in showThis: ", this);
}

// Викликаємо у глобальному контексті
showThis(); // this in showThis: Window

const user = {
  username: "Mango",
};

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
user.showContext = showThis;

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

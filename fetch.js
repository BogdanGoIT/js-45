// fetch('https://pokeapi.co/api/v2/pokemon/2')
//     .then(response => {
//         return response.json();
//     })
//     .then((pockemon => {
//         console.log(pockemon)
//     }))
//     .catch(error => {
//         console.log(error);
//     })



// const refs = {
//     cardContainer: document.querySelector('section-button')
// }

// fetchPockemon(1)
//     .then(renderPockemonCard)
//     .catch(error => console.log(error));

// function fetchPockemon(pockemonId) {
//      return fetch(`https://pokeapi.co/api/v2/pokemon/${pockemonId}`).then(response => {
//         return response.json();
//     })
// }

//     //  return промис.промис(response.json()).then(pockemon => );
 

// function renderPockemonCard(pockemon) {
//     const markup = pockemonCardTPL(pockemon);
//     refs.cardContainer.innerHTML = markup
// }


// параметры запроса
// pokemon?limit=100000&offset=200
// mysite.com/api/pokemon?имя=значение&имя=значение

// fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
//     .then(r => r.json())
//     .then(console.log);

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(r => r.json())
//     .then(console.log)

// let globalVariable; // undefined

// // Initializing data fetching
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//     console.log("users inside then callback: ", users);

//     // Writing the result to a global variable
//     globalVariable = users;

//     // Everything is ok here, the data is in the variable
//     console.log("globalVariable inside fetch callback: ", globalVariable);
//   });

// // No async data here
// console.log("globalVariable outside fetch: ", globalVariable); // undefined

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"


// const headers = new Headers({
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// });

// headers.append("Content-Type", "text/bash");
// headers.append("X-Custom-Header", "custom value");
// headers.has("Content-Type"); // true
// headers.get("Content-Type"); // "text/bash"
// headers.set("Content-Type", "application/json");
// headers.delete("X-Custom-Header");

const headers = {
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
};
// Запит з використанням заголовків буде виглядати наступним чином.
fetch("https://jsonplaceholder.typicode.com/users", {
  headers: {
    Accept: "application/json",
  },
}).then(response => {
  // ...
});
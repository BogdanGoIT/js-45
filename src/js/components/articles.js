// {{#each this}}
//   <li>
//     <a href="{{url}}" target="_blank" rel="noopener noreferrer">
//       <article>
//         <img src="{{urlToImage}}" alt="" width="480">
//         <h2>{{title}}</h2>
//         <p>Posted by: {{author}}</p>
//         <p>{{description}}</p>
//       </article>
//     </a>
//   </li>
// {{/each}}


export function renderUserList(articles) {
  return articles.map(({url, urlToImage, author, description, title}) => {
        return `<li>
            <a href="${url}" target="_blank" rel="noopener noreferrer">
                <article>
                    <img src="${urlToImage}" alt="" width="480">
                    <h2>${title}</h2>
                    <p>Posted by: ${author}</p>
                    <p>${description}</p>
                </article>
            </a>
        </li>`;
    })
      .join("");
}
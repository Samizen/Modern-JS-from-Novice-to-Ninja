// Parent to Child
const article = document.querySelector('article');

// Get children:
const children = article.children;

console.log(article);
console.log(children);

// To use individual elements of this HTMLCollection, convert it to an Array
Array.from(article.children).forEach(child =>{
    child.classList.add('article-element');
});

// Child to Parent
const title = document.querySelector('h2');
console.log(title.parentElement)
console.log(title.nextElementSibling)


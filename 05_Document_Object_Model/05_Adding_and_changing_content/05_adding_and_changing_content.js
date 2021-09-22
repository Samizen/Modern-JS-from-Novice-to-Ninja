// To select the first paragraph - Hello World!

const hello = document.querySelector('p');
hello.innerText = '21 Guns'
console.log(hello);

// To change multiple elements, query HTML collection
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.innerText += " I'm a son of rage and love";
});

// To change HTML of the content
const content = document.querySelector('.content');
content.innerHTML = '<h4>Characters in Mario</h4><p>Paragraph of the content is added through this.</p>';

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // Create HTML template for each
    html += `<li>${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
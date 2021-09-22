const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.instagram.com/side_track_illustrations/');
link.innerText = "Samit's Illustrations and Graphic design works..."

const message = document.querySelector('p.error');

console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
console.log(message.getAttribute('class'));

// Also works for declaring new attributes:
message.setAttribute('style', 'color:red;');

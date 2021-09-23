// Grab the object

// Delete list items when clicked:
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();        
    })
});

// To add elements to Webpage
const button = document.querySelector('button');
const ul = document.querySelector('ul');

// Add event listener:
button.addEventListener('click', () => {
    // Create an element
    const li = document.createElement('li');
    li.textContent ='Whatever you want';
    ul.append(li);
});


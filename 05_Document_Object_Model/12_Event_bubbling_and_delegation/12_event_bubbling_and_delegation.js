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
ul.addEventListener('click', () => {
    console.log("Event Bubbling ul");
    // alert('Fire!, Fire!')
});

// Add event listener:
button.addEventListener('click', (e) => {
    // Create an element
    const li = document.createElement('li');
    li.textContent ='Whatever you want';
    ul.append(li);
    e.stopPropagation(); // This stops event bubbling from the button as body is its parent and there is an eventListerner attatched to it. 
}); 

const body = document.querySelector('body');
body.addEventListener('click', () => {
    body.style.backgroundColor = 'red';
})



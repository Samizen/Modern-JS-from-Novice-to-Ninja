// Grab the object
const button = document.querySelector('button');

// Add event listener:
button.addEventListener('click', (e) => {
    // Create an element
    const li = document.createElement('li');
    li.textContent ='Whatever you want';
    ul.append(li);
    e.stopPropagation(); // This stops event bubbling from the button as body is its parent and there is an eventListerner attatched to it. 
}); 

// To add elements to Webpage
const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
    
});

// Event Delegation is done to by first removing the event listener attatched to each li element. 
// Instead we add an 

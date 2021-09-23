// Grab the object
const button = document.querySelector('button');

// Add event listener:
button.addEventListener('click', () => {
    console.log("Click Me Button is clicked!")
});

// Delete list items when clicked:
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.addEventListener('click', e => {
        console.log(e); // Mouse event - Pointer Event
        console.log(e.target); // <li>List Item</li>
        // item.remove();
        e.target.style.textDecoration = 'line-through';
        // e.target.remove();
    })
});
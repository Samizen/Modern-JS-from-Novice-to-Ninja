const todos = [
    {text: 'play mariocart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];

const todosJson = JSON.stringify(todos);
localStorage.setItem("todos",todosJson);

// Retrieving and parsing it to an array:

const stored = localStorage.getItem('todos');
const backToArray = JSON.parse(stored);

console.log(stored);

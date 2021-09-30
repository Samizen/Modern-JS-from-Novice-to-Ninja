// Async is placed in a function:

const getTodos = async() => {
    // fetch API is place inside the async function:
    const response = await fetch("luigi.JSON");
    const data = await response.json();
    return data; // Is still a promise
};

// Asyncronous programming in action:
console.log(1);
console.log(2);

getTodos()
.then(data => console.log('resolved:', data));

console.log(1);
console.log(2);

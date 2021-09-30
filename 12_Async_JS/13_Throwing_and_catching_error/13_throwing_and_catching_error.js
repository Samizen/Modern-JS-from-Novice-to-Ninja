// Async is placed in a function:

const getTodos = async() => {
    // fetch API is place inside the async function:
    const response = await fetch("luigi.JSON");

    if(response.status !== 200){
        throw new Error('Not reached')
    }
    const data = await response.json();
    return data; // Is still a promise
};

// Asyncronous programming in action:
getTodos()
.then(data => console.log('resolved:', data))
.catch(error => console.log('rejected:', error.message));
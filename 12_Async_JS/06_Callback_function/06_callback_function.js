const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
            // Let's call data here

        } else if (request.readyState === 4) {
            callback("Data can't be fetched", undefined);
            // Let's call the error here

        }
    })
    
    // Send a request:
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};

// Asynchronous 
console.log(1);
console.log(2);

// getTodos();
// There can be options inside the callback function on how we use them
getTodos((error, data) => {
    console.log("Callback is fired!");
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
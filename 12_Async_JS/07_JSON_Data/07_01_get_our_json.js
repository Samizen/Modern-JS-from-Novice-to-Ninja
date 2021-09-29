const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
            // Let's call data here

        } else if (request.readyState === 4) {
            callback("Data can't be fetched", undefined);
            // Let's call the error here

        }
    })
    
    // Send a request:
    request.open('GET', 'todos.json');
    request.send();
};

getTodos((error, data) => {
    console.log("Callback is fired!");
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

const getTodos = (resource, callback) => {
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
    request.open('GET', resource);
    request.send();
};

// The callback Hell - when multiple callbacks are nested inside one another: This is a solution when there are more than on waiting functions. 
getTodos('luigi.JSON', (err, data) => {
    console.log(data);
    getTodos('mario.JSON', (err, data) => {
        console.log(data);
        getTodos('shawn.JSON', (err, data) => {
            console.log(data);            
        });
    });
});

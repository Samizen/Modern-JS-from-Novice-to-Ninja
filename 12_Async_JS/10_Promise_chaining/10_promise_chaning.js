const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
    
        const request = new XMLHttpRequest();
    
    
        request.addEventListener("readystatechange", () => {
            // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
                // Let's call data here
    
            } else if (request.readyState === 4) {
                reject('Error getting resource')
                // Let's call the error here
    
            }
        })
        
        // Send a request:
        request.open('GET', resource);
        request.send();
    });
    
};

getTodos('luigi.JSON').then(data => {
    console.log('Promise1 Resolved', data);
    return getTodos('mario.JSON');
}).then(data => {
    console.log('Promise2 Resolved', data);
    return getTodos('shawn.JSON');
}).then(data => {
    console.log('Promise3 Resolved', data);
})
.catch(error => {
    console.log('Promise Failed', error);
});

// Single catch works for any number of promises:

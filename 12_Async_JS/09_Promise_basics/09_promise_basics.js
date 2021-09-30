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
    console.log('Promise Resolved', data);
}).catch(error => {
    console.log('Promise Failed', error);
});

// Promise example:
// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         //fetch something
        
//         // if success:
//         // resolve('some data');
        
//         // if error:
//         reject('some error')
//     }); // either resolved after we get the data or rejected because of error
// };

// // resolve:
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// }); // We can add function to .then() so that we can call it when the promise is resolved

// // if the promise is rejected, then we add another function for reject inside the parameter of then 
// getSomething().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


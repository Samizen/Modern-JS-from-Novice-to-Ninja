// Create a Request Object:
const request = new XMLHttpRequest();

// Check a status of the request using an EventListener():
request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
    console.log(request, request.responseText);
    } else if (request.readyState === 4) {
        console.log('Request succeeded but could not fetch data!')
    }
})

// Send a request:
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

request.open('GET', 'https://jsonplaceholder.typicode.com/stodos');
request.send();

// We'll add this to a function
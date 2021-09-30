fetch('luigi.JSON').then((response) => {    
    console.log('Resolved', response);
    return response.json();
}).then(data => {
    console.log(data)
})
.catch((error) => {
    console.log('Error', error);
});
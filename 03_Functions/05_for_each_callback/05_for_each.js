// Callback:

const myFunct = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

// myFunct(function(value){
//     console.log(value);
// })

// Equivalent to 
myFunct(value => {
    console.log(value); 
});

let people = ["mario", "luigi", "chun-li", "ryu", "ken"];

/* people.forEach(function(person){
    console.log(person);
}) */

people.forEach(person => console.log(person) );

// Function Declaration
function greet() {
    console.log('Hello There!');
}

// Function Invokation
const speak = function(){
    console.log("G'day to you");
};

// Funcion invoking with parameters:
const speakName = function(name){
    console.log(`Hey there ${name}, what's it like in New York city?`)
};

// Default parameters
const speakToMe = function(name = 'Samit', yourName = 'Anonymous') {
    console.log(`I am ${name}, what about you, ${yourName}?`);
};

speak();
speakName('Delilah');
speakToMe('Samit')
greet();
// console.log(speak);
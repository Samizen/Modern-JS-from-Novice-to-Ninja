const speak = function(name = 'luigi', time = 'night'){
    return(`Good ${time}, ${name}`);
}

const result = speak('Samit', 'Day');
console.log(result);

const pi = 3.14;

const calcArea = function(radius) {
    return pi * radius**2;
}

let circleArea = calcArea(3);
console.log(`Area = ${circleArea}`);
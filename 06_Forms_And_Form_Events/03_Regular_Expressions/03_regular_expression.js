const form = document.querySelector('.signup-form');



form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.username.value);
});

// Testing RegEx:
const username = 'SamitP';
const patternRegEx = /^[a-zA-Z]{6,}$/

let result = patternRegEx.test(username); //returns boolean
console.log(result);

if(result) {
    console.log('RegEx text passed.')
} else {
    console.log('RegEx text failed.')
}

// Another method:
let result2 = username.search(patternRegEx); //Result in position in which it finds the match - here from 0 index
console.log(result2); 
// test is preferred because we want result in true and/or false

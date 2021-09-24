const form = document.querySelector('.signup-form');
// Use username id to query select this
// const userName = document.querySelector('#username');


form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(userName.value);
    console.log(form.username.value);
    
});
const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninja.com',
    login(){
        console.log('The user logged!');
    }, 
    logout(){
        console.log('The user logged out!');
    }
};

console.log(userOne.email);
userOne.login();

// If we want to create another player, we have to copy the same code :
const userTwo = {
    username: 'chun-li',
    email: 'chun-li@thenetninja.com',
    login(){
        console.log('The user logged!');
    }, 
    logout(){
        console.log('The user logged out!');
    }
};

// This is not very efficient if even more objects have to be created.

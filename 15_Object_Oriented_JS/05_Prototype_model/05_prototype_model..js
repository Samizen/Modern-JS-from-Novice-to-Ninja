function User(username, email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in.`)
    }
}

// Adding methods to Prototype:
User.prototype.login = function(){
    console.log(`${this.username} has logged in.`);
}

const userOne = new User('mario', 'mario@gmail.com');
console.log(userOne);
const userTwo = new User('luigi', 'luigi@gmail.com');
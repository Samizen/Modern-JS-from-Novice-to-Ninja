class User {
    // Class Constructor:
    constructor(userName, email){
        // Properties
        this.userName = userName;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(this.userName + ' has logged in.');
        return this;
    }

    logout(){
        console.log(this.userName + ' has logged out.');
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.userName} has a score of ${this.score}`);
        return this;
    }
}

// To create an object (the instances of the User class):
const mario = new User('mario', 'mario@thenetninja.com');
const luigi = new User('luigi', 'luigi@thenetninja.com');
mario.login();
luigi.logout();
console.log('Mario: ' , mario);
console.log('Luigi: ' , luigi);

console.log('');
console.log('');
// Chaining methods:
mario.login().incScore().incScore().logout();

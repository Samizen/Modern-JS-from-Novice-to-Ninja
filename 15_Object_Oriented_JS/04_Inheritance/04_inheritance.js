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

class Admin extends User {
    constructor(userName, email, title){
        super(userName, email);
        this.title = title;
    }
    
    deleterUser(user){
        users = users.filter((u) => {
            return u.userName !== user.userName;
        })
    }
}

const mario = new User('mario', 'mario@thenetninja.com');
const luigi = new User('luigi', 'luigi@thenetninja.com');
const kristal = new Admin('kristal', 'kristal@thenetninja.com', 'The boss');
console.log(kristal);
kristal.login();

let users = [mario, luigi, kristal];
console.log(users);
kristal.deleterUser(luigi);
console.log(users);
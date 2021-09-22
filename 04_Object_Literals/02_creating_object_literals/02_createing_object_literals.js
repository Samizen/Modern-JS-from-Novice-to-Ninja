let user  = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: ['Technology and Ecstacy', '10 things to write 10 things']
};

console.log(user);

// Accessing the individual members:
console.log(user.age);
// Can also be changed
user.age = 35;
console.log(user.age);
// Access by square bracket:
console.log(user['email']);
// Again this too can be edited
user['email'] = 'crystal.method@gmail.com' 
console.log(user['email']);

console.log(`Type of - user : ${typeof(user)}`);
let user  = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: ['Technology and Ecstacy', '10 things to write 10 things'],
    // Method attatched to object
    login: function(){
        console.log('The user logged in!');
    },
    // Shorthand regular function:
    logout(){
        console.log('The user logged out!');
    },
    logBlogs: function() {
        console.log(this.blogs); //This captures whole array
        // The output is (2) ['Technology and Ecstacy', '10 things to write 10 things']

        // To grab a hold of individual objects:
        this.blogs.forEach(blog => {
            console.log(blog);
        })
        // The output is: 
        // Technology and Ecstacy
        // 10 things to write 10 thing

    }

};

user.login();
user.logBlogs();

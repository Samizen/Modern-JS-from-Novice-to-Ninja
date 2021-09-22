let user  = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    // Arrays can store objects:
    blogs: [
        {   title: 'Technology and Ecstacy', likes: 30  },
        {   title: '10 Things to write 10 things', likes: 42 }
    ],
    // Method attatched to object
    login: function(){
        console.log('The user logged in!');
    },
    // Shorthand regular function:
    logout(){
        console.log('The user logged out!');
    },
    logBlogs: function() {
        // To grab a hold of individual objects:
        this.blogs.forEach(blog => {
            console.log(`Title: ${blog.title}`);
            console.log(`Likes: ${blog.likes}`);
        });

    }

};

user.login();
user.logBlogs();

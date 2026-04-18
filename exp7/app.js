const fs = require('fs');

// Simulating a NoSQL document retrieval
function findUserByRole(role) {
    const rawData = fs.readFileSync('data.json');
    const data = JSON.parse(rawData);
    
    console.log(`Searching for users with role: ${role}`);
    const filteredUsers = data.users.filter(user => user.role === role);
    
    if (filteredUsers.length > 0) {
        console.table(filteredUsers);
    } else {
        console.log("No users found.");
    }
}

function findPostsByUser(userId) {
    const rawData = fs.readFileSync('data.json');
    const data = JSON.parse(rawData);
    
    console.log(`Searching for posts by userId: ${userId}`);
    const filteredPosts = data.posts.filter(post => post.userId === userId);
    
    if (filteredPosts.length > 0) {
        console.table(filteredPosts);
    } else {
        console.log("No posts found.");
    }
}

// Execution
console.log("--- Experiment 7: JSON & NoSQL Concepts ---");
findUserByRole('Admin');
findUserByRole('User');
findPostsByUser(1);

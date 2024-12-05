
class Database {
    constructor() {
      this.users = [];
      this.posts = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    addPost(post) {
      this.posts.push(post);
    }
  
    getUserById(userId) {
      return this.users.find(user => user.id === userId);
    }
  
    getPostsByUserId(userId) {
      return this.posts.filter(post => post.userId === userId);
    }
  }
// postService.js
const db = require('./database');

class PostService {
  createPost(userId, content) {
    const user = db.getUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const post = { id: Date.now().toString(), userId, content };
    db.addPost(post);
    return post;
  }

  listPostsByUser(userId) {
    return db.getPostsByUserId(userId);
  }
}

module.exports = new PostService();

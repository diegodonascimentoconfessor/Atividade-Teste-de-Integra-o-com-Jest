
import { getUserById, addPost, getPostsByUserId } from './database';

class PostService {
  createPost(userId, content) {
    const user = getUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const post = { id: Date.now().toString(), userId, content };
    addPost(post);
    return post;
  }

  listPostsByUser(userId) {
    return getPostsByUserId(userId);
  }
}

export default new PostService();
class PostService {
    constructor(database) {
      this.database = database;
    }
  
    criarPostagem(usuarioId, conteudo) {
      const postagem = { id: this.database.postagens.length + 1, usuarioId, conteudo };
      this.database.postagens.push(postagem);
      return postagem;
    }
  
    obterPostagensPorUsuarioId(usuarioId) {
      return this.database.postagens.filter((postagem) => postagem.usuarioId === usuarioId);
    }
  }
  
  export{
    PostService}
  
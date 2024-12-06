class PostService {
  constructor(database, userService) {
    this.database = database;  // Instância do banco de dados.
    this.userService = userService;  // Instância do UserService.
  }

  // Método para criar postagens para todos os usuários no banco de dados.
  createPostsForUsers() {
    const users = this.database.getUsers();  // Obtém todos os usuários do banco de dados.

    if (!users.length) {
      console.log('Nenhum usuário encontrado para criar postagens.');
      return;  // Sai se não houver usuários.
    }

    // Para cada usuário, cria uma postagem com conteúdo personalizado.
    users.forEach(user => {
      const post = this.createPost(
        user.id, 
        `Postagem automática para ${user.name}`
      );
      console.log(`Postagem criada: ${JSON.stringify(post)}`);  // Log da postagem criada.
    });
  }

  // Método para criar uma postagem associada a um usuário.
  createPost(userId, content) {
    // Valida se o usuário existe antes de criar a postagem.
    const user = this.database.getUsers().find(u => u.id === userId);
    if (!user) {
      throw new Error(`Usuário com ID ${userId} não encontrado. Postagem não criada.`);
    }

    // Cria o objeto da postagem.
    const post = {
      id: this.database.getPosts().length + 1,  // Gera um ID único baseado no tamanho atual do banco.
      userId,  // Associa o ID do usuário à postagem.
      content,  // Define o conteúdo da postagem.
    };

    this.database.addPost(post);  // Adiciona a postagem ao banco de dados.
    return post;  // Retorna a postagem criada.
  }

  // Método para listar todas as postagens no banco de dados.
  listPosts() {
    const posts = this.database.getPosts();  // Obtém todas as postagens.
    if (!posts.length) {
      console.log('Nenhuma postagem encontrada.');
      return [];  // Retorna um array vazio se não houver postagens.
    }
    console.log(`Lista de postagens: ${JSON.stringify(posts)}`);
    return posts;  // Retorna as postagens.
  }
}

export default PostService;

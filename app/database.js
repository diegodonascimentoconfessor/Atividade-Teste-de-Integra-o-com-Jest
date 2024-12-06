class Database {
  constructor() {
    this.users = [];
    this.posts = [];

    this.users = [
      { id: 1, name: 'João Silva' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' },
      { id: 4, name: 'Carlos' },
      { id: 5, name: 'Diana' },
      { id: 6, name: 'Eduardo' }
    ];

    this.createPersonalizedPosts();
  }

  addUser(user) {
    this.users.push(user);
  }

  addPost(post) {
    this.posts.push(post);
  }

  getUsers() {
    return this.users || [];
  }

  getPosts() {
    return this.posts || [];
  }

  createPersonalizedPosts() {
    this.users.forEach(user => {
      const post = {
        userId: user.id,
        title: `Postagem especial de ${user.name}`,  // Título personalizado para cada usuário
        content: `Olá ${user.name}, esta é sua postagem exclusiva! Aqui estão algumas informações sobre você: ID ${user.id}, Nome ${user.name}.`
      };
      this.addPost(post);
    });
  }
}

// Instanciando o banco de dados
const db = new Database();

// Exibindo os dados no console
console.log('Usuários:', db.getUsers());
console.log('Postagens:', db.getPosts());

export default Database;
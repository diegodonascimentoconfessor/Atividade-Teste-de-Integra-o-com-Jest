import Database from './Database';
import UserService from './userservice';
import PostService from './Postservice';

describe('Teste de Integração', () => {
  let database;
   let userService;
   let postService;

  beforeEach(() => {
    database = new Database();
    userService = new UserService(database);
    postService = new PostService(database);
  });

  afterEach(() => {
    // Limpeza para evitar problemas com estado residual
    if (database && typeof database.disconnect === 'function') {
      database.disconnect(); // Supondo que exista um método de desconexão
    }
  });

  it('deve testar algo relacionado ao UserService', () => {
    // Exemplo de teste
    const user = userService.createUser({ name: 'Teste', email: 'teste@example.com' });
    expect(user).toHaveProperty('id'); // Valide os resultados
  });

  it('deve testar algo relacionado ao PostService', () => {
    // Exemplo de teste
    const post = postService.createPost({ title: 'Teste', content: 'Conteúdo de teste' });
    expect(post).toHaveProperty('id'); // Valide os resultados
  });
});

// Importação das classes necessárias para o teste.
import Database from '../database';  // Importa a classe Database para criar a instância do banco de dados
import UserService from '../userservice';  // Importa a classe UserService para gerenciar usuários
import PostService from '../postservice';  // Importa a classe PostService para gerenciar postagens

// Início do bloco de testes de integração, que garante que os serviços de usuários e postagens funcionem corretamente juntos.
describe('Teste de Integração: Serviços de Usuário e Postagem', () => {
  let db, userService, postService;

  // beforeEach é executado antes de cada teste, criando uma nova instância do banco de dados e dos serviços.
  beforeEach(() => {
    db = new Database();  // Cria uma nova instância do banco de dados (limpa os dados antes de cada teste).
    userService = new UserService(db);  // Cria uma instância do UserService, passando o banco de dados.
    postService = new PostService(db);  // Cria uma instância do PostService, passando o banco de dados.
  });

  // Teste para garantir que vários usuários e suas postagens associadas sejam criados corretamente.
  test('deve criar vários usuários e postagens associadas a eles', () => {
    // Criando os usuários através do método createUser do UserService. 
    // Utiliza o map para iterar sobre os nomes dos usuários e cria um usuário para cada nome.
    const users = ['João Silva', 'Alice', 'Bob', 'Carlos', 'Diana', 'Eduardo'].map(name => 
      userService.createUser(name)  // Chama createUser para cada nome da lista e armazena os usuários criados.
    );

    // Verificando se os usuários foram criados corretamente no banco de dados.
    users.forEach(user => {
      // Verifica se o usuário foi adicionado corretamente ao banco de dados.
      expect(db.getUsers()).toContainEqual(user);
    });

    // Criando postagens associadas aos usuários. Para cada usuário, cria uma postagem associada a ele.
    const posts = users.map(user => 
      postService.createPost(user.id, `Postagem do usuário ${user.name}`)  // Cria uma postagem associada ao usuário.
    );

    // Verificando se as postagens foram criadas corretamente e associadas ao usuário certo.
    posts.forEach((post, index) => {
      // Verifica se a postagem foi adicionada corretamente ao banco de dados.
      expect(db.getPosts()).toContainEqual(post);
      
      // Verifica se a postagem foi associada ao usuário correto (comparando o userId da postagem com o ID do usuário).
      expect(post.userId).toBe(users[index].id);  // Verifica se a postagem está associada ao usuário correto.
    });
  });
});

// Define a classe UserService que gerencia usuários.
class UserService {
  // Construtor da classe, responsável por inicializar a instância com o banco de dados.
  constructor(database) {
    this.database = database;  // Armazena a referência do banco de dados para uso posterior.
    console.log('UserService instantiated with database:', database); // Log de inicialização
  }

  // Método responsável por criar um novo usuário.
  createUser(name) {
    // Cria um objeto de usuário com um ID gerado automaticamente (baseado na quantidade de usuários no banco).
    const user = { 
      id: this.database.getUsers().length + 1,  // O ID é o tamanho atual da lista de usuários + 1, garantindo unicidade.
      name // Atribui o nome passado como argumento ao objeto do usuário.
    };
    
    // Adiciona o novo usuário ao banco de dados chamando o método addUser da classe Database.
    this.database.addUser(user);
    console.log('User created:', user); // Log ao criar o usuário

    // Retorna o objeto usuário recém-criado.
    return user;
  }

  // Método para listar todos os usuários armazenados no banco de dados.
  listUsers() {
    // Obtém a lista de usuários armazenados no banco de dados chamando o método getUsers da classe Database.
    const users = this.database.getUsers();
    console.log('Listing all users:', users); // Log ao listar os usuários

    return users;
  }
}

// Exporta a classe UserService para ser usada em outros arquivos.
export default UserService;


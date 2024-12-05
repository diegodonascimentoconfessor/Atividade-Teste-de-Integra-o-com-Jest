class UserService {
    constructor(database) {
      this.database = database;
    }
  
    criarUsuario(nome) {
      const usuario = { id: this.database.usuarios.length + 1, nome };
      this.database.usuarios.push(usuario);
      return usuario;
    }
  
    obterUsuarioPorId(id) {
      return this.database.usuarios.find((usuario) => usuario.id === id);
    }
  }
  
  export default UserService;
  

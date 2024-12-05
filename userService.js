
import { addUser, users } from './data.base';

class UserService {
  createUser(name) {
    const user = { id: Date.now().toString(), name };
    addUser(user);
    return user;
  }

  listUsers() {
    return users;
  }
}

export default new UserService();

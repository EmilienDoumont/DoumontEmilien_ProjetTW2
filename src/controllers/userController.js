import User from '../models/user';

class UserController {
  constructor() {
    this.users = [];
  }

  async loadUsers() {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    this.users = data.users.map(user => User.fromJSON(user));
  }

  getUsers() {
    return this.users;
  }

  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }
}

export default UserController;
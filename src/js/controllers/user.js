import User from '../models/User';
import * as userView from '../views/userView';
import {clearResults} from '../views/base'


export default class UserController {
  constructor(){
    this.user = new User();
  }

  async getUserData(id) {
    const user = await this.user.getUserWithId(id);

    clearResults();
    userView.renderUser(user);
  }

  getUsers() {
    const users = await this.user.getUsers();
    userView.renderUserList(users);
  }
}
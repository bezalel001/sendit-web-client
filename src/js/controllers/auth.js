
import * as authView from '../views/authView';
import { homePageView, clearContainer } from '../views/base';
import Auth from '../models/Auth';
import * as userView from '../views/userView';
import * as parcelView from '../views/parcelView';
import ParcelController from './parcel';
import UserController from './user';

import User from '../models/User';

export default class AuthController {
  constructor() {
    this.state = {};
    this.user = new User();
    this.parcelController = new ParcelController();
    this.userController = new UserController();
  }

  renderLoginComponent() {
    authView.clearAuthForm();
    authView.renderLoginForm();
  }


  renderSignUpComponent() {
    authView.clearAuthForm();
    authView.renderSignupForm();
  }

  async handleSignUp() {
    const userData = authView.getSignUpUserData();

    const {
      firstName, lastName, otherNames, email, password1, password2, username, isAdmin,
    } = userData;

    if (!firstName || !lastName || !email || !password1 || !password2 || !username) {
      alert('Missing data!');
    }
    if (password1 !== password2) {
      alert('Password does not match!');
    }
    // New Auth object. add to state

    console.log('Signup data(UserData): ', userData);

    this.state.account = new Auth(userData);

    try {
      // Create account
      await this.state.account.createUser();

      // Render the login page

      this.renderLoginComponent();
    } catch (error) {
      alert('Registration error');
    }
  }

  async handleLogin() {
    const userData = authView.getLoginUserData();
    const { email, password } = userData;
    if (!email || !password) {
      alert('Missing email or password!');
    }
    // Keep track of the currently logged user
    console.log('userData: ', userData);
    this.state.authUser = new Auth(userData);

    // login user
    try {
      const user = await this.state.authUser.loginUser();
      console.log('handlelogin userId: ', user.user_id);
      // redirect user to profile

      this.userController.getUserData(user.user_id);
      return { userId: user.user_id, isAdmin: user.is_admin };
    } catch (error) {
      alert(`Some login Error: ${error}`);
    }
  }

  handleLogout() {
    localStorage.removeItem('token');
    // clearContainer();
    homePageView();
  }
}

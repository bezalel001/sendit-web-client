import AuthController from './controllers/auth';
import * as baseViews from './views/base';
import * as authView from './views/authView';

export default class App {
  constructor(element) {
    this.signIn = new AuthController(element);
    this.signUp = new AuthController(element);
  }

  initPage() {
    baseViews.homePage();
    this.addEventListener();
  }

  addEventListener() {
    this.addLoginNavEventListener();
    this.addSignUpNavEventListener();
  }

  addLoginNavEventListener() {
    document.getElementById('login-btn').addEventListener('click', (e) => {
      e.preventDefault();
      this.signIn.renderLoginComponent();
    });
  }

  addSignUpNavEventListener() {
    document.getElementById('signup-btn').addEventListener('click', (e) => {
      e.preventDefault();
      this.signUp.renderSignUpComponent();
    });
  }
}

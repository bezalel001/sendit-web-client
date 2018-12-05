/* eslint-disable class-methods-use-this */
import AuthController from './controllers/auth';
// import * as authView from './views/authView';
import { elements, homePageView } from './views/base';

export default class App {
  initPage() {
    homePageView();
    // authView.renderSignupForm();
    this.addEventListener();
  }

  addEventListener() {
    this.setupClickEventListener();
    // this.setupSubmitEventListener();
  }

  setupClickEventListener() {
    elements.container.addEventListener('click', this.handleClick);
  }

  // setupSubmitEventListener() {
  //   document.getElementsByClassName('form')[0].addEventListener('submit', this.handleSubmit);
  // }

  handleClick(event) {
    console.log(`${event.target.id}: was clicked==== ${new AuthController()}`);
    event.preventDefault();
    if (event.target.id === 'signin__nav-link') {
      new AuthController().renderLoginComponent();
    } else if (event.target.id === 'signup__nav-link') {
      new AuthController().renderSignUpComponent();
    } else if (event.target.id === 'signup__form') {
      new AuthController().handleSignUp();
    } else if (event.target.id === 'login__form') {
      new AuthController().handleLogin();
    }
  }

  // handleSubmit(event) {
  //   console.log(`${event.target.id}: was submited==== ${new AuthController()}`);
  //   event.preventDefault();
  //   if (event.target.matches(elements.signupForm)) {
  //     this.authController.handleSignUp();
  //   } else if (event.target.matches(elements.loginForm)) {
  //     this.authController.handleLogin();
  //   }
  // }


  // addLoginNavEventListener() {
  //   document.getElementById('login-btn').addEventListener('click', (e) => {
  //     e.preventDefault();
  //     this.signIn.renderLoginComponent();
  //   });
  // }

  // addSignUpNavEventListener() {
  //   document.getElementById('signup-btn').addEventListener('click', (e) => {
  //     e.preventDefault();
  //     this.signUp.renderSignUpComponent();
  //   });
  // }
}

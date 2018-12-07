/* eslint-disable class-methods-use-this */
/* global alert */
import AuthController from './controllers/auth';
// import * as authView from './views/authView';
import { elements, homePageView } from './views/base';
import UserController from './controllers/user';
import ParcelController from './controllers/parcel';
import Parcel from './models/Parcel';

export default class App {
  constructor() {
    this.userController = new UserController();
    this.user = {};
  }

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

  async handleClick(event) {
    try {
      console.log(`${event.target.id}: was clicked==== ${new AuthController()}`);
      event.preventDefault();
      if (event.target.id === 'signin__nav-link') {
        new AuthController().renderLoginComponent();
      } else if (event.target.id === 'signup__nav-link') {
        new AuthController().renderSignUpComponent();
      } else if (event.target.id === 'signup__form') {
        new AuthController().handleSignUp();
      } else if (event.target.id === 'login__form') {
        this.user = await new AuthController().handleLogin();
        console.log('This user(Controller): ', new AuthController().handleLogin());
        console.log('This user: ', this.user);
      } else if (event.target.id === 'user__all-parcels') {
        new UserController().userParcelCtrl(this.user.userId, this.user.isAdmin);
      } else if (event.target.id === 'user__create-parcel') {
        new ParcelController().renderParcelFormComponent();
      } else if (event.target.id === 'signout') {
        console.log('Logout out event');
        new AuthController().handleLogout();
      } else if (event.target.id === 'parcel-0') {
        new ParcelController().getParcel(0);
      } else if (event.target.id === 'parcel__activate') {
        new ParcelController().renderActivateParcelFormComponent();
      } else if (event.target.id === 'parcel__edit-location') {
        new ParcelController().renderParcelEditLocationFormComponent();
      } else if (event.target.id === 'parcel__edit-status') {
        new ParcelController().renderParcelEditStatusFormComponent();
      } else if (event.target.id === 'parcel__change-destination') {
        new ParcelController().renderParcelEditDestinationFormComponent();
      } else if (event.target.id === 'parcel__cancel') {
        new ParcelController().cancelParcel(new Parcel());
      }
    } catch (error) {
      alert(`Could not handle click: ${error.message}`);
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

/* global document: true */
export const elements = {
  container: document.querySelector('.container'),
  pageHeader: document.querySelector('.header'),
  mainContent: document.querySelector('.main'),
  footer: document.querySelector('.footer'),
  loginNavLink: document.querySelector('#signin__nav-link'),
  signupNavLink: document.querySelector('#signup__nav-link'),

  signupForm: document.querySelector('.signup__form'),
  authFormContainer: document.getElementsByClassName('.parcels__auth-form')[0],
  signupInputFirstName: document.getElementById('firstName'),
  signupInputLastName: document.getElementById('lastName'),
  signupInputOtherNames: document.getElementById('otherNames'),
  signupInputEmail: document.getElementById('emailSignup'),
  signupInputPassword1: document.getElementById('password1'),
  signupInputPassword2: document.getElementById('password2'),
  signupInputUsername: document.getElementById('username'),
  signupInputisAdmin: document.getElementById('checkAdmin'),


  loginForm: document.querySelector('.login__form'),
  loginInputEmail: document.getElementById('emailLogin'),
  loginInputPassword: document.getElementById('password'),
  signupBtn: document.getElementById('login__signup-btn'),

  loginNavBtn: document.getElementById('login-btn'),
  signuvNabBtn: document.getElementById('signup-btn'),

  userParcels: document.getElementById('user__all-parcels'),
};

export const clearResults = () => {
  elements.mainContent.innerHTML = '';
};

export const clearMainContent = () => {
  elements.mainContent.innerHTML = '';
};
export const clearPageHeader = () => {
  elements.pageHeader.innerHTML = '';
};
export const homePageView = () => {
  const markup = `
     
    <nav class="navigation__nav">
      <ul class="navigation__list">
          <li><a href="#" class="navigation__link" id="home">Home</a></li>
          <li><a href="#" class="navigation__link" id="signup__nav-link" >Sign Up</a></li>
          <li><a href="#" class="navigation__link" id="signin__nav-link">Login</a></li>              
      </ul>
    </nav>
    <div class="header__text-box">
        <h1 class="header__heading-primary">
          <span class="header__heading-primary-main">SENDIT</span>
          <span class="header__heading-primary-sub">is a courier service that helps users deliver parcels to different destinations</span>
        </h1>
        <a class="btn btn-white" href="https://boiling-earth-75235.herokuapp.com" target="_blank">Learn More</a>
    </div>
    <div class="parcels__auth-form"></div>
  `;


  elements.pageHeader.insertAdjacentHTML('afterbegin', markup);
};


export const clearContainer = () => {
  document.querySelector('.container').innerHTML = '';
};

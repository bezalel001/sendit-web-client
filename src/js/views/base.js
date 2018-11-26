export const elements = {
  mainContent: document.querySelector('.main'),
  signupForm: document.getElementsByClassName('signup__form'),
  signupInputFirstName: document.getElementById('firstName'),
  signupInputLastName: document.getElementById('lastName'),
  signupInputOtherNames: document.getElementById('otherNames'),
  signupInputEmail: document.getElementById('emailSignup'),
  signupInputPassword1: document.getElementById('password1'),
  signupInputPassword2: document.getElementById('password2'),
  signupInputUsername: document.getElementById('username'),
  signupInputisAdmin: document.getElementById('checkAdmin'),

  loginForm: document.getElementsByClassName('login__form'),
  loginInputEmail: document.getElementById('emailLogin'),
  loginInputPassword: document.getElementById('password'),
  signupBtn: document.getElementById('login__signup-btn')
};

export const clearResults = () => {
  elements.mainContent.innerHTML = '';
}
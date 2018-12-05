import { elements } from './base';

export const getSignUpUserData = () => {

  const userinfo = {};
  userinfo.firstName = document.getElementById('firstName').value;
  userinfo.lastName = document.getElementById('lastName').value;
  if (document.getElementById('otherNames')) {
    userinfo.otherNames = document.getElementById('otherNames').value;
  }

  userinfo.username = document.getElementById('username').value;
  userinfo.email = document.getElementById('emailSignup').value;
  userinfo.password1 = document.getElementById('password1').value;
  userinfo.password2 = document.getElementById('password2').value;
  userinfo.isAdmin = false;

  return userinfo;
};


export const getLoginUserData = () => {

  const userinfo = {};
  userinfo.email = document.getElementById('emailLogin').value;
  userinfo.password = document.getElementById('password').value;

  console.log('Userinfo: ', userinfo);

  return userinfo;
};

export const renderSignupForm = () => {
  const markup = ` 
  <form action="#" class="form signup__form" autocomplete="off">
      
      <div class="form__group">
          <input type="text" class="form__input" placeholder="First name" id="firstName" required>
          <label for="firstName" class="form__label">First name</label>
      </div>
     <div class="form__group">
          <input type="text" class="form__input" placeholder="Last name" id="lastName" required>
          <label for="lastName" class="form__label">Last name</label>
      </div>
     
     <div class="form__group">
          <input type="text" class="form__input" placeholder="Username" id="username" required>
          <label for="username" class="form__label">Username</label>
      </div>

      <div class="form__group">
          <input type="email" class="form__input" placeholder="Email address" id="emailSignup" required>
          <label for="emailSignup" class="form__label">Email address</label>
      </div>
     <div class="form__group">
          <input type="password" class="form__input" placeholder="Password" id="password1" required>
          <label for="password1" class="form__label">Password</label>
      </div>
     <div class="form__group">
          <input type="password" class="form__input" placeholder="Confirm password" id="password2" required>
          <label for="password2" class="form__label">Confirm password</label>
      </div>          

      <div class="form__group">
      <button type="submit" class="btn btn-auth" id="signup__form">Create Account</button>
      </div>
    </form>`;
  document.getElementsByClassName('parcels__auth-form')[0].insertAdjacentHTML('afterbegin', markup);
};

export const renderLoginForm = () => {
  const markup = `
    <form action="#" class="form login__form" autocomplete="off">
    
      <div class="form__group">
          <input type="email" class="form__input" placeholder="Email address" id="emailLogin" required>
          <label for="emailLogin" class="form__label">Email address</label>
      </div>
      <div class="form__group">
          <input type="password" class="form__input" placeholder="Password" id="password" required>
          <label for="password" class="form__label">Password</label>
      </div>
         

      <div class="form__group">
      
      <button type="submit" class="btn btn-auth" id="login__form">Login</button>
      </div>
    </form>`;
  document.querySelector('.parcels__auth-form').insertAdjacentHTML('afterbegin', markup);
};


export const clearAuthForm = () => {
  document.querySelector('.parcels__auth-form').innerHTML = '';
};

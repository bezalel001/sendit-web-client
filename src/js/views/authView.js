import { elements } from './base';

export const getSignUpUserData = () => {

  let userinfo = {};
  userinfo.firstName = document.getElementById('firstName').value;
  userinfo.lastName = document.getElementById('lastName').value;
  userinfo.otherNames = document.getElementById('otherNames').value;
  userinfo.username = document.getElementById('username').value;
  userinfo.email = document.getElementById('emailSignup').value;
  userinfo.password1 = document.getElementById('password1').value;
  userinfo.password2 = document.getElementById('password2').value;
  userinfo.isAdmin = document.getElementById('checkAdmin').value;

  return userinfo;
}


export const getLoginUserData = () => {

  const userinfo = {};
  userinfo.email = document.getElementById('emailLogin').value;
  userinfo.password = document.getElementById('password').value;

  console.log('Userinfo: ', userinfo)

  return userinfo;
}

export const renderSignupForm = (element) => {
  const markup = `
  <h2>Sign up</h2>
  <form class="signup__form">
  <div class="signup__form-field">
      <label for="firstName">First name</label>
      <input type="text" class="signup__form-control" id="firstName"  placeholder="First name">							
  </div>
  <div class="signup__form-field">
      <label for="lastName">Last name</label>
      <input type="text" class="signup__form-control" id="lastName" placeholder="Last name">
  </div>
  <div class="signup__form-field">
      <label for="otherNames">Other names</label>
      <input type="text" class="signup__form-control" id="otherNames" placeholder="Other names">
  </div>
  <div class="signup__form-field">
      <label for="emailSignup">Email address</label>
      <input type="email" class="signup__form-control" id="emailSignup" placeholder="Enter email">
  </div>
  <div class="signup__form-field">
      <label for="username">Username</label>
      <input type="text" class="signup__form-control" id="username" placeholder="Username">
  </div>
  <div class="signup__form-field">
      <label for="password1">Password</label>
      <input type="password" class="signup__form-control" id="password1" placeholder="Password">
  </div>
  <div class="signup__form-field">
      <label for="password2">Re-enter Password</label>
      <input type="password" class="signup__form-control" id="password2" placeholder="Password">
  </div>
  <div class="signup__form-field">
      <input type="checkbox" class="signup__form-check-input" id="checkAdmin">
      <label class="signup__form-check-label" for="checkAdmin">Admin?</label>
  </div>
  <button type="submit" class="btn signup__btn">Create Account</button>
</form>
`;
   element.insertAdjacentHTML('afterbegin', markup);
};

export const renderLoginForm = (element) => {
  const markup = ` 
  <div > 
    <h2>Login</h2>
    <form class="login__form">
      <div class="login__form-field">					
      <div class="login__form-field">
          <label for="emailLogin">Email address</label>
          <input type="email" class="login__form-control" id="emailLogin" placeholder="Enter email">
      </div>

      <div class="login__form-field">
          <label for="password">Password</label>
          <input type="password" class="login__form-control" id="password" placeholder="Password">
      </div>

      <button type="submit" class="btn login__btn">Log in</button>
    </form>    
  </div>
  <div class="signup__btn">
    <a class="btn" type="button" id="login__signup-btn" href="#">Register</a>
    </div>
  `;
   element.insertAdjacentHTML('afterbegin', markup);
}



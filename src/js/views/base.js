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
  signupBtn: document.getElementById('login__signup-btn'),

  loginNavBtn: document.getElementById('login-btn'),
  signuvNabBtn: document.getElementById('signup-btn'),

  userParcels: document.getElementById('user__all-parcels')
};

export const clearResults = () => {
  elements.mainContent.innerHTML = '';
}

export const homePage = () => {
  const markup = `
    <div class="home">
      <h1>SENDIT</h1>
      <p>SendIT is a courier service that helps users deliver parcels to different destinations</p>
      <ul>
        <li><a href="#"  id="login-btn" >Login</a></l>
        <li><a href="#" id="signup-btn">Signup</a></l>
      </ul> 
    </div>
    `;
  elements.mainContent.insertAdjacentHTML('afterbegin', markup);
}
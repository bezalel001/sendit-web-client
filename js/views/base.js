export const elements = {
  pageHeader: document.querySelector('.header'),
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

  userParcels: document.getElementById('user__all-parcels'),
};

export const clearResults = () => {
  elements.mainContent.innerHTML = '';
};

export const homePage = () => {
  const markup = `   
          
    <nav class="navigation__nav">
          <ul class="navigation__list">
              <li><a  href="#" class="navigation__link">Home</a></li>
              <li><a href="#" class="navigation__link" id="signup-btn" >Sign Up</a></li>
              <li><a href="#" class="navigation__link" id="login-btn">Login</a></li>              
          </ul>
    </nav>
    <div class="header__text-box">
        <h1 class="header__heading-primary">
            <span class="header__heading-primary-main">SENDIT</span>
            <span class="header__heading-primary-sub">is a courier service that helps users deliver parcels to different destinations</span>
        </h1>
        <a class="btn btn-white btn-animated" href="https://boiling-earth-75235.herokuapp.com/">Learn More</a>
    </div>
    <div class="parcels__auth-form">
   
    </div>

    `;
  elements.pageHeader.insertAdjacentHTML('afterbegin', markup);
};

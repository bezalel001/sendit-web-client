import AuthController from './controllers/auth';

export default class App {
  constructor(element){
    this.signIn = new AuthController(element)
    this.signUp = new AuthController(element);
  }

  initPage() {
    this.signIn.renderLoginComponent();
    //this.signUp.renderSignUpComponent();
  }
}



// import { elements } from './views/base';
// import Auth from './models/Auth';
// import * as authView from './views/authView';
// import { isNullOrUndefined } from 'util';


// const state = {};


// const handleSignUp = async () =>{
//   const userData = authView.getSignUpUserData();

//   const {firstName, lastName, otherNames, email, password1, password2, username, isAdmin} = userData;

//   if (!firstName || !lastName || !email || !password1 || !password2 || !username || !isAdmin) {
//     alert('Missing data!')
//   }
//   if (password1 !== password2){
//     alert('Password does not match!')
//   }
//   // New Auth object. add to state
  
//   console.log('Signup data(UserData): ', userData)

//   this.state.account = new Auth(userData);

//   // Create account
//   await this.state.account.createUser();

//   // Render the login page
// }

// // elements.signupForm.addEventListener('submit', e => {
// //   e.preventDefault();
// //   handleSignUp();
// // });

// const handleLogin = async () => {
//   const userData = authView.getLoginUserData();
//   const { email, password } = userData;
//   if(!email || !password) {
//     alert('Missing email or password!');
//   }
//   // Keep track of the currently logged user
//   this.state.authUser = new Auth(userData);

//   // login user
//   await this.state.authUser.loginUser();
  

//   // redirect user to profile

// }

// if(elements.loginForm === isNullOrUndefined){
//   authView.renderLoginForm();
// }

// elements.loginForm.addEventListener('submit', e => {
//   e.preventDefault();
//   handleLogin();
// });







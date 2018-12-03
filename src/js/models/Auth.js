import { EventEmitter } from 'events';

export default class Auth extends EventEmitter {
  constructor(userInfo) {
    super();
    this.userInfo = userInfo;
    this.URL = 'https://boiling-earth-75235.herokuapp.com';
  }

  async createUser() {
    const {
 firstName, lastName, otherNames, email, password1, username, isAdmin 
} = this.userInfo;

    const password = password1;

    try {
      const result = await fetch(`${this.URL}/auth/signup`, {
        method: 'post',
        body: JSON.stringify({
          firstName,
          lastName,
          otherNames,
          email,
          password,
          username,
          isAdmin,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const data = await result.json();

      console.log('Data: ', data.data);
      console.log('Status: ', data.status);
      console.log('Message: ', data.message);

    } catch (error) {
      alert(`Registration error ${error}`);
    }
  }

  async loginUser() {
    const { email, password } = this.userInfo;
    console.log('Email: ', email);
    console.log('Password', password);
    try {
      const result = await fetch(`${this.URL}/auth/login`, {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const user = await result.json();
      const token = user.token;
      if (token) {
        localStorage.setItem('token', token);
      }
      console.log('user.data: ', user.data);
      console.log('user token: ', token);
      localStorage.setItem('userId', user.data.user_id);
      return user.data;

    } catch (error) {
      alert('Could not login');
    }
  }
}

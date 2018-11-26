export default class User {
  constructor(){
    this.URL = 'http://localhost:3000';
  }

  async getUserWithId(id) {
    try {
      const result = await fetch(`${this.URL}/api/v1/users/${id}`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });
      const user = await result.json();
      return user.data;
    } catch (error) {
      alert('Could not get user', error);
    }


  }

  async getUsers() {
    try {
      const results = await fetch(`${this.URL}/api/v1/users`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });
      const users = await results.json();
    
      return users.data;
    } catch (error) {
      alert('Could not retrieve users');
    }
  }
}
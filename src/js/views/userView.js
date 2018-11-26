import { elements } from './base';



export const renderUser = (user) => {
  if (user.other_names === null){
    user.other_names = '';
  }
  const markup = `
  <div class="user__user-detail">
    <h1>${user.first_name} ${user.other_names} ${user.last_name}</h1>
    <p>Username: <strong>${user.username}</strong></p>
    <p>Email: <strong>${user.email}</strong></p>
    <p>Admnin?: <strong>${user.is_admin}</strong></p>
  </div>`;

  
  elements.mainContent.insertAdjacentHTML('afterbegin', markup);
}

export const renderUserList = (users) => {
  users.forEach(renderUser);    
}
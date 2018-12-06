/* global document */
import { elements } from './base';

export const renderUser = (user) => {
  if (user.other_names === null) {
    user.other_names = '';
  }
  const markup = `
  <div class="user__user-detail">
    <h1>${user.first_name} ${user.other_names} ${user.last_name}</h1>
    <p>Username: <strong>${user.username}</strong></p>
    <p>Email: <strong>${user.email}</strong></p>
    <p>Admnin?: <strong>${user.is_admin}</strong></p>
    <div class="user__parcels">

    </div>
    <div class="parcel__btn">
    <a class="btn" type="button" id="parcel__create-btn" href="#">Create Parcel</a>
    </div>
  </div>`;

  elements.mainContent.insertAdjacentHTML('afterbegin', markup);
};

export const renderUserList = (users) => {
  users.forEach(renderUser);
};

export const renderUserProfile = (user) => {
  if (user.other_names === null) {
    user.other_names = '';
  }
  const markup = `
      <header class="header user__profile-header">
      <div class="header__text-box user__profile-info">
        <h1 class="header__heading-primary">
            <span class="header__heading-primary-main">${user.first_name} ${user.last_name}</span>

        </h1>
        <p><strong>EMAIL: </strong>${user.email}</p>
        <p><strong>USERNAME: </strong>${user.username}</p>
        <p><strong>ADMIN?: </strong>${user.is_admin}</p>
        
      </div>

    </header>    
    <main class="main">
      <section id="user_parcels-info clearfix">
      <a class="user__parcels signout" id="signout">Sign out</a>
        <div class="user__parcel-nav">
        
          <ul class="user__parcels-nav-heading">
            <li><a class="user__parcels" id="user__all-parcels">All Parcels</a></li>
            <li><a class="user__parcels" id="user__delivered-parcels">Delivered Parcels</a></li>
            <li><a class="user__parcels" id="user__in-transit-parcels">Parcels in Transit</a></li>
            <li><a class="user__parcels" id="user__create-parcel">Create New Parcel +</a></li>
          </ul>
          
        </div>
        <div class="user__parcel-content-info">
        

            
          
        </div>
      </section>
    </main>`;

  elements.container.insertAdjacentHTML('afterbegin', markup);
};

export const clearParcelForm = () => {
  document.getElementById('user__parcel-form').innerHTML = '';
};


export const clearUserParcelContainer = () => {
  document.querySelector('.user__parcel-content-info').innerHTML = '';
};

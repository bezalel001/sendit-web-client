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
    <div class="user__parcels">

    </div>
    <div class="parcel__btn">
    <a class="btn" type="button" id="parcel__create-btn" href="#">Create Parcel</a>
    </div>
  </div>
  
  `;

  
  elements.mainContent.insertAdjacentHTML('afterbegin', markup);
}

export const renderUserList = (users) => {
  users.forEach(renderUser);    
}

export const renderUserProfile = (user) => {
  if (user.other_names === null){
    user.other_names = '';
  }
  const markup = `
  <div class="user__user-detail">
    <h1>${user.first_name} ${user.other_names} ${user.last_name}</h1>
    <p>Username: <strong>${user.username}</strong></p>
    <p>Email: <strong>${user.email}</strong></p>
    <p>Admnin?: <strong>${user.is_admin}</strong></p>
    <div id="user__parcels"></div>
    <a class="btn" type="button" id="parcel__create-btn" href="#">Create Parcel</a>
    <div id="user__parcel-form"></div>
    <a class="btn" type="button" id="parcel__all-btn" href="#">All Parcels</a>
    <div id="user__all-parcels"></div>
    <a class="btn" type="button" id="parcel__delivered-btn" href="#">Delivered Parcels</a>
    <div id="user__delivered-parcels"></div>
    <a class="btn" type="button" id="parcel__transiting-btn" href="#">Parcels in transit</a>
    <div id="user__transiting-parcels"></div>
  </div>`;
  
  elements.mainContent.insertAdjacentHTML('afterbegin', markup);
}

export const clearParcelForm = () => {
  document.getElementById('user__parcel-form').innerHTML = '';
}


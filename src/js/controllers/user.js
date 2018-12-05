/* global alert document */
import User from '../models/User';
import * as userView from '../views/userView';

import ParcelController from './parcel';
import * as parcelView from '../views/parcelView';


export default class UserController {
  constructor() {
    this.user = new User();
    this.userId = -10;
    this.parcelController = new ParcelController();
  }

  async getUserData(id) {
    try {
      const user = await this.user.getUserWithId(id);
      console.log('get userdata: ', user);
      this.userId = user.user_id;

      userView.clearContainer();
      userView.renderUserProfile(user);
      // this.addNewParcelEventListener();
      // this.addUserParcelListEventListener();
      // //this.addParcelListItemClickEventListener();
    } catch (error) {
      alert(`Could not display user profile. Error: ${error.message}`);
    }
  }

  addNewParcelEventListener() {
    document.getElementById('parcel__create-btn').addEventListener('click', (e) => {
      e.preventDefault();
      parcelView.renderParcelDeliveryOrderForm(document.getElementById('user__parcel-form'));
      this.addCreateParcelEventlistener();
    });
  }

  addUserParcelListEventListener() {
    document.getElementById('parcel__all-btn').addEventListener('click', (e) => {
      e.preventDefault();
      this.parcelController.getParcelsBySpecificUser(this.userId);
      console.log('add parcellistitemclick eventlistener');
      this.addParcelListItemClickEventListener();
    });
  }

  addCreateParcelEventlistener() {
    console.log(' Called: addCreateParcelEventlistener()');
    console.log(' Check parcel__create-order button', document.getElementById('parcel__create-order'));
    document.getElementsByClassName('parcel__form-create')[0].addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Eventlistener added');
      this.parcelController.createParcel();
      userView.clearParcelForm();
    });
  }

  addParcelListItemClickEventListener() {
    console.log('Called: addParcelListItemClickEventListener()');
    const parcels = document.getElementsByClassName('parcel__title');
    console.log('Page title length', parcels.length);
    console.log('First id', parcels[0].id);
    console.log('2nd id', parcels[1].id);
    console.log('3rd id', parcels[2].id);
    console.log('4th id', parcels[3].id);
    if (parcels.length > 0) {
      for (let i = 0; i < parcels.length; i++) {
        parcels[i].addEventListener('click', (e) => {
          e.preventDefault();
          const parcelId = e.target.id;
          this.parcelController.getParcel(parcelId);
          console.log('You clicked parcel with id: ', parcelId);
        });
      }
    }
  }

  async getUsers() {
    const users = await this.user.getUsers();
    userView.renderUserList(users);
  }
}

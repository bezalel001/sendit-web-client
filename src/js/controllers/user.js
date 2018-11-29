import User from '../models/User';
import * as userView from '../views/userView';
import {clearResults} from '../views/base'
import ParcelController from '../controllers/parcel';
import * as parcelView from '../views/parcelView';


export default class UserController {
  constructor(){
    this.user = new User();
    this.userId = -10;
    this.parcelController = new ParcelController();
  }

  async getUserData(id) {
    const user = await this.user.getUserWithId(id);
    console.log('get userdata: ', user)
    this.userId = user.user_id;

    clearResults();
    userView.renderUserProfile(user);
    this.addNewParcelEventListener();
    this.addUserParcelListEventListener();
    
  }

  addNewParcelEventListener(){
    document.getElementById('parcel__create-btn').addEventListener('click', e => {
      e.preventDefault();      
      parcelView.renderParcelDeliveryOrderForm(document.getElementById('user__parcel-form'));
      this.addCreateParcelEventlistener();
    });
    
  }

  addUserParcelListEventListener() {
    document.getElementById('parcel__all-btn').addEventListener('click', e => {
      e.preventDefault();      
      this.parcelController.getParcelsBySpecificUser(this.userId);
    });
  }

  addCreateParcelEventlistener(){
    console.log(' Called: addCreateParcelEventlistener()');
    console.log(' Check parcel__create-order button', document.getElementById('parcel__create-order'));
    document.getElementsByClassName('parcel__form-create')[0].addEventListener('submit', e => {
      e.preventDefault();
      console.log('Eventlistener added');      
      this.parcelController.createParcel();
      userView.clearParcelForm();
      
    });
  }


  async getUsers() {
    const users = await this.user.getUsers();
    userView.renderUserList(users);
  }
}
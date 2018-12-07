import Parcel from '../models/Parcel';
import * as parcelView from '../views/parcelView';
import { elements, clearResults } from '../views/base';
import * as userView from '../views/userView';

export default class ParcelController {
  constructor() {
    this.parcel = new Parcel();
  }

  renderParcelFormComponent() {
    userView.clearUserParcelContainer();
    parcelView.renderParcelDeliveryOrderForm();
  }

  renderActivateParcelFormComponent() {
    userView.clearUserParcelContainer();
    parcelView.renderActivateParcelForm();
  }

  renderParcelEditStatusFormComponent() {
    userView.clearUserParcelContainer();
    parcelView.renderEditParcelStatusForm();
  }

  renderParcelEditLocationFormComponent() {
    userView.clearUserParcelContainer();
    parcelView.renderEditParcelLocationForm();
  }

  renderParcelEditDestinationFormComponent() {
    userView.clearUserParcelContainer();
    parcelView.renderEditParcelDestinationForm();
  }


  // Create parcel delivery order
  async createParcel() {
    console.log('Create parcelcontroller called');
    const parcel = parcelView.getParcelCreateValues();
    console.log('Parcel: ', parcel);
    try {
      const newParcel = await this.parcel.createParcel(parcel);
      console.log('New parcel: ', newParcel);
      userView.clearParcelForm();
      parcelView.renderParcelOrderByASpecificUser(newParcel);
    } catch (error) {
      alert(`Parcel create error === ${error}`);
    }
  }



  // Activate parcel
  async activateParcel(parcel) {

    try {
    //  const  parcel = await this.parcel.activateParcel(parcel);
    //  parcelView.renderParcelOrderByASpecificUser(parcel);
    } catch (error) {
      alert(`Could not activate parcel: ${error.message}`);
    }
  }

  // Get all parcels in the app
  async getParcels() {

    try {
      const parcels = await this.parcel.getParcels();
      userView.clearUserParcelContainer();
      parcelView.parcelList();

    } catch (error) {
      alert(`Could not get parcels====${error}`);
    }
  }

  // Get a specific parcel delivery order
  async getParcel(parcelId) {
    try {
      // const parcelDetail = await this.parcel.getParcel(parcelId);
      userView.clearUserParcelContainer();
      parcelView.renderParcelDetail();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }

  // Get a specific parcel delivery order
  async getParcelBySpecificUser(req, res) {

    try {

    } catch (error) {

    }
  }

  // Cancel a specific parcel delivery order
  async cancelParcel() {

    try {
      console.log('Parcel cancel');
    } catch (error) {
      alert('Could not cancel this parcel');
    }
  }

  // Change the destination of a specific parcel delivery order.
  async changeParcelDestination(req, res) {


    try {

    } catch (error) {

    }
  }

  // Fetch all parcel delivery order by a specific user.
  async getParcelsBySpecificUser(userId) {

    try {
      const parcels = await this.parcel.getParcelsBySpecificUser(userId);
      console.log('User parcels: ', parcels);
      parcelView.renderParcelsOrderByASpecificUser(parcels, document.getElementById('user__all-parcels'));
    } catch (error) {
      alert(`Could not get parcels for user -- ${error}`);
    }
  }

  // Change the status of a specific parcel delivery order.
  // Only the Admin is allowed to access this endpoint.
  async changeParcelStatus(req, res) {


    try {

    } catch (error) {

    }
  }

  // Change the present location of a specific parcel delivery order.
  // Only the Admin is allowed to access this endpoint.
  async changeParcelCurrentLocation(req, res) {

    try {

    } catch (error) {

    }
  }

  // delete a parcel delivery order
  async deleteParcel(req, res) {
    try {

    } catch (error) {

    }
  }
}

export default class Parcel {
  constructor(parcel) {
    this.parcel = parcel;
    this.URL = 'http://localhost:3000';
  }



  // Create parcel delivery order
  async createParcel() {
    const { sender, receiver } = this.parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels`, {
        method: 'post',
        body: JSON.stringify({
          sender,
          receiver
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });
      const parcel = await result.json();
      console.log('Parcel status: ', parcel.status);
      console.log('Parcel data: ', parcel.data);
      console.log('Parcel message: ', parcel.parcel);
      return parcel.data;
    } catch (error) {
      alert(`Could not create parcel -- ${error}`)
    }
  }

  // Activate parcel
  async activateParcel() {
    const {parcelId, placed_by, weight, weightMetric, currentLocation, status } = this.parcel;
    const userId = placed_by;
    try {
     const result = await fetch(`${this.URL}/api/v1/users/${userId}/parcels/${placed_by}`, {
       method: 'patch',
       body: JSON.stringify({
         weight,
         weightMetric,
         currentLocation,
         status
       }),
       headers: {
         Accept: 'application/json',
         Authorization: localStorage.getItem('token')
       }
     });
     const parcel = await result.json();
     console.log('Activate parcel status: ', parcel.status);
     console.log('Activate parcel data: ', parcel.data);
     console.log('Activate parcel message: ', parcel.message);
    
     return parcel.data;
    } catch (error) {
      alert(`Could not active this parcel ${error}`)
    }
  }

  // Get all parcels in the app
  async getParcels() {

    try {
      const results = await fetch(`${this.URL}/parcels`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });      
      const parcel = await results.json()

      return parcel.data;
    } catch (error) {
      alert(`Could not get Parcels--- ${error}`)
    }
  }

  // Get a specific parcel delivery order
  async getParcel() {
    const { parcelId } = this.parcel;
    try {
      const result = fetch(`${this.URL}/parcels/${parcelId}`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });
      const parcel = await result.json();

      return parcel.data;
    } catch (error) {
      alert(`Could not get parcel--- ${error}`);
    }
  }

  // Get a specific parcel delivery order
  async getParcelBySpecificUser() {
    const {parcelId, placed_by } = this.parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/users/${placed_by}/parcels/${parcelId}`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });
      const parcel = await result.json();

      return parcel.data;
    } catch (error) {
      alert(`Could not retrieve parcel order by the user --- ${error}`);
    }
  }

  // Cancel a specific parcel delivery order
  async cancelParcel() {
    const {active} = this.parcel;
    
    try {
      const { parcelId } = await fetch(`${this.URL}/api/v1/parcels/:parcelId/cancel`, {
        method: 'patch',
        body: JSON.stringify({
          active
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });

      const parcel = result.json();
      return parcel.data;
    } catch (error) {
      
    }
  }

  // Change the destination of a specific parcel delivery order.
  async changeParcelDestination() {
    const {parcelId, receiver} = this.parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/${parcelId}/destination`, {
        method: 'patch',
        body: JSON.stringify({
          receiver
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });
      const parcel = await result.json();
      return parcel.data;
    } catch (error) {
      alert(`Could not change parcel destination ==== ${error}`);
    }
  }

  // Fetch all parcel delivery order by a specific user.
  async getParcelsBySpecificUser() {
    const {placed_by} = this.parcel;
    try {
      const results = await fetch(`${this.URL}/api/v1/users/${placed_by}/parcels`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });
      const parcels = result.json();
      return parcels.data;
    } catch (error) {
      alert(`Could not retrieve parcels for this user == ${error}`)
    }
  }

  // Change the status of a specific parcel delivery order.
  // Only the Admin is allowed to access this endpoint.
  async changeParcelStatus() {
    const { placed_by, status } = this.parcel;

    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/:parcelId/status`, {
        method: 'patch',
        body: JSON.stringify({status}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });
      const parcel = result.json();
      return parcel.data;      
    } catch (error) {
      alert(`Could not change parcel status ---${error}`);
    }
  }

  // Change the present location of a specific parcel delivery order.
  // Only the Admin is allowed to access this endpoint.
  async changeParcelCurrentLocation() {
    const {placed_by, currentLocation } = this.parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/${placed_by}/currentLocation`, {
        method: 'patch',
        body: JSON.stringify({currentLocation}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });
      const parcel = await result.json();
      return parcel.data;
    } catch (error) {
      
    }
  }

  // delete a parcel delivery order
  async deleteParcel() {
    const parcel = this.parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/:parcelId`, {
        method: 'delete',
        body: JSON.stringify(parcel),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });
    } catch (error) {
      alert(`Could not delete this parcel ---- ${error}`)
    }
  }

}
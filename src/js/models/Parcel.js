export default class Parcel {
  constructor() {

    this.URL = 'https://boiling-earth-75235.herokuapp.com';
  }


  // Create parcel delivery order
  async createParcel(parcel) {
    const { sender, receiver } = parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels`, {
        method: 'post',
        body: JSON.stringify({
          sender,
          receiver,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcel = await result.json();
      console.log('Parcel status: ', parcel.status);
      console.log('Parcel data: ', parcel.data);
      console.log('Parcel message: ', parcel.parcel);
      return parcel.data;
    } catch (error) {
      alert(`Could not create parcel -- ${error}`);
    }
  }

  // Activate parcel
  async activateParcel(parcel) {
    const {
      parcelId, placed_by, weight, weightMetric, currentLocation, status,
    } = parcel;
    const userId = placed_by;
    try {
      const result = await fetch(`${this.URL}/api/v1/users/${userId}/parcels/${parcelId}`, {
        method: 'patch',
        body: JSON.stringify({
          weight,
          weightMetric,
          currentLocation,
          status,
        }),
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcel = await result.json();
      console.log('Activate parcel status: ', parcel.status);
      console.log('Activate parcel data: ', parcel.data);
      console.log('Activate parcel message: ', parcel.message);

      return parcel.data;
    } catch (error) {
      alert(`Could not active this parcel ${error}`);
    }
  }

  // Get all parcels in the app
  async getParcels() {

    try {
      const results = await fetch(`${this.URL}/api/v1/parcels`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcels = await results.json();
      console.log('Pacels: ', parcels.data);
      return parcels.data;
    } catch (error) {
      alert(`Could not get Parcels--- ${errdor}`);
    }
  }

  // Get a specific parcel delivery order
  async getParcel(parcelId) {
    // const { parcelId } = parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/${parcelId}`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcel = await result.json();
      console.log('Parcel: ', parcel);
      return parcel.data;
    } catch (error) {
      alert(`Could not get parcel--- ${error}`);
    }
  }

  // Get a specific parcel delivery order
  async getParcelBySpecificUser(parcel) {
    const { parcelId, placed_by } = parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/users/${placed_by}/parcels/${parcelId}`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcel = await result.json();

      return parcel.data;
    } catch (error) {
      alert(`Could not retrieve parcel order by the user --- ${error}`);
    }
  }

  // Cancel a specific parcel delivery order
  async cancelParcel(parcel) {
    const { active } = parcel;

    try {
      const { parcelId } = await fetch(`${this.URL}/api/v1/parcels/:parcelId/cancel`, {
        method: 'patch',
        body: JSON.stringify({
          active,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });

      const parcel = result.json();
      return parcel.data;
    } catch (error) {

    }
  }

  // Change the destination of a specific parcel delivery order.
  async changeParcelDestination(parcel) {
    const { parcelId, receiver } = parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/${parcelId}/destination`, {
        method: 'patch',
        body: JSON.stringify({
          receiver,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcel = await result.json();
      return parcel.data;
    } catch (error) {
      alert(`Could not change parcel destination ==== ${error}`);
    }
  }

  // Fetch all parcel delivery order by a specific user.
  async getParcelsBySpecificUser(userId) {
    const placed_by = userId;
    try {
      const results = await fetch(`${this.URL}/api/v1/users/${placed_by}/parcels`, {
        headers: {
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcels = await results.json();
      console.log('Parcels message: ', parcels);
      return parcels.data;
    } catch (error) {
      alert(`Could not retrieve parcels for this user == ${error.message}`);
    }
  }

  // Change the status of a specific parcel delivery order.
  // Only the Admin is allowed to access this endpoint.
  async changeParcelStatus(parcel) {
    const { parcelId, status } = parcel;

    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/${parcelId}/status`, {
        method: 'patch',
        body: JSON.stringify({ status }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcel = result.json();
      return parcel.data;
    } catch (error) {
      alert(`Could not change parcel status ---${error}`);
    }
  }

  // Change the present location of a specific parcel delivery order.
  // Only the Admin is allowed to access this endpoint.
  async changeParcelCurrentLocation(parcel) {
    const { currentLocation, parcelId } = parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/${parcelId}/currentLocation`, {
        method: 'patch',
        body: JSON.stringify({ currentLocation }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const parcel = await result.json();
      return parcel.data;
    } catch (error) {

    }
  }

  // delete a parcel delivery order
  async deleteParcel(parcel) {
    const { parcelId } = parcel;
    try {
      const result = await fetch(`${this.URL}/api/v1/parcels/${parcelId}`, {
        method: 'delete',
        body: JSON.stringify(parcel),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
    } catch (error) {
      alert(`Could not delete this parcel ---- ${error}`);
    }
  }

}

/* global document */
export const getParcelCreateValues = () => {
  const parcel = {};
  console.log('Sender: ', document.getElementById('sender'));
  console.log('Receiver: ', document.getElementById('receiver'));
  parcel.sender = document.getElementById('sender').value;
  parcel.receiver = document.getElementById('receiver').value;
  return parcel;
};

export const parcelActivateValues = () => {
  const parcel = {};
  parcel.weight = document.getElementById('weight').value;
  parcel.weightMetric = document.getElementById('weightMetric').value;
  parcel.currentLocation = document.getElementById('currentLocation').value;
  const status = document.getElementsByName('status');
  let checked;

  for (let i = 0; i < status.length; i += 1) {
    if (status[i].checked) {
      checked = status[i].value;
    }
  }
  parcel.status = checked;

  return parcel;
};

export const renderParcelOrder = (parcel, position) => {
  const markup = `
  <div class="parcel__order-detail">
    <h2>Parcel</h2>
    <p>Weight: <strong>${parcel.weight}</strong></p>
    <p>Weight metric: <strong>${parcel.weight_metric}</strong></p>
    <p>sender:<strong>${parcel.sender}</strong></p>
    <p>receiver: <strong>${parcel.receiver}</strong></p>
    <p>Current Location: <strong>${parcel.current_location}</strong></p>
    <p>status: <strong>${parcel.status}</strong></p>
    <p>Sent on: <strong>${parcel.sent_on}</strong></p>
    <p>Delivered on: <strong>${parcel.delivered_on}</strong></p>
  </div> `;
  position.insertAdjacentHTML('afterbegin', markup);
};

export const renderParcelOrders = (parcels) => {
  parcels.forEach(parcel);
};

export const renderParcelOrderByASpecificUser = (parcel, position) => {
  const markup = `<p><a href="#" class="parcel__title" id="${parcel.parcelId}">sender:<strong>${parcel.sender}</strong></a></p>`;
  // const markup = `
  // <div class="parcel__order-detail">
  //   <h2>Parcel</h2>
  //   <div style="visibilty:hidden">
  //   <p>Weight: <strong>${parcel.weight}</strong></p>
  //   <p>Weight metric: <strong>${parcel.weight_metric}</strong></p>
  //   <p>sender:<strong>${parcel.sender}</strong></p>
  //   <p>receiver: <strong>${parcel.receiver}</strong></p>
  //   <p>Current Location: <strong>${parcel.current_location}</strong></p>
  //   <p>status: <strong>${parcel.status}</strong></p>
  //   <p>Sent on: <strong>${parcel.sent_on}</strong></p>
  //   <p>Delivered on: <strong>${parcel.delivered_on}</strong></p>
  //   <a class="btn" type="button" id="parcel__activate-btn" href="#">Activate Parcel</a>
  //   </div>
  // </div> `;
  position.insertAdjacentHTML('afterbegin', markup);
};


export const renderParcelsOrderByASpecificUser = (parcels, position) => {
  parcels.forEach((parcel) => {
    renderParcelOrderByASpecificUser(parcel, position);
  });
};


export const renderParcelDeliveryOrderForm = () => {
  const markup = ` 
    <div class="parcel__form">
      <form action="#" class="form" autocomplete="off">      
        <div class="form__group">
            <input type="text" class="form__input" placeholder="Sender's Address Line 1" id="sender-1" required>
            <label for="sender-1" class="form__label">Sender's Address Line 1</label>
        </div>
        <div class="form__group">
            <input type="text" class="form__input" placeholder="Sender's Address Line 2" id="sender-2" required>
            <label for="sender-2" class="form__label">Sender's Address Line 2</label>
        </div>
        <div class="form__group">
            <input type="text" class="form__input" placeholder="Receiver's Address Line 1" id="receiver-1" required>
            <label for="receiver-1" class="form__label">Receiver's Address Line 1</label>
        </div>
        <div class="form__group">
            <input type="text" class="form__input" placeholder="Receiver's Address Line 2" id="receiver-2" required>
            <label for="receiver-2" class="form__label">Receiver's Address Line 2</label>
        </div>
        <div class="form__group">
        <button type="submit" class="btn btn-auth" id="signup__form">Send Parcel</button>
        </div>
      </form>
    </div> `;
  document.querySelector('.user__parcel-content-info').insertAdjacentHTML('afterbegin', markup);
};


export const activateParcelDeliveryOrder = (element) => {
  const markup = `
  <h2>Parcel Delivery Order</h2>
  <form class="parcel__form">

  <div class="parcel__form-field">
      <label for="sender">Sender's address</label>
      <textarea class="parcel__form-control" id="sender" rows="4"></textarea>			
  </div>
  <div class="parcel__form-field">
      <label for="receiver">Receiver's address</label>
      <textarea class="parcel__form-control" id="receiver" rows="4"></textarea>			
  </div>  
  
  <div class="parcel__form-field">
      <label for="weight">Last name</label>
      <input type="text" class="parcel__form-control" id="weight" placeholder="Weight">
  </div>
  <div class="parcel__form-field">
      <label for="weightMetric">Other names</label>
      <input type="text" class="parcel__form-control" id="weightMetric" placeholder="Weight metric">
  </div>
  <div class="parcel__form-field">
      <label for="currentLocation">Current location</label>
      <input type="text" class="parcel__form-control" id="currentLocation" placeholder="Current location">
  </div>
  <div class="parcel__form-check">
  <input class="parcel__form-check-input" type="radio" name="status" id="placed" value="placed">
  <label class="parcel__form-check-label" for="placed">
    Placed
  </label>
</div>
<div class="parcel__form-check">
  <input class="parcel__form-check-input" type="radio" name="status" id="transiting" value="transiting">
  <label class="parcel__form-check-label" for="transiting">
    Transiting
  </label>
</div>
<div class="parcel__form-check">
  <input class="parcel__form-check-input" type="radio" name="status" id="delivered" value="delivered">
  <label class="parcel__form-check-label" for="delivered">
    Disabled radio
  </label>
</div>  
  <button type="submit" class="btn parcel__btn">Activate Parcel</button>
</form>
`;
  element.insertAdjacentHTML('afterbegin', markup);
};


// const markupParcelDetail = `
// <div class="parcel__order-detail">
//   <h2>Parcel</h2>
//   <p>Weight: <strong>${parcel.weight}</strong></p>
//   <p>Weight metric: <strong>${parcel.weight_metric}</strong></p>
//   <p>sender:<strong>${parcel.sender}</strong></p>
//   <p>receiver: <strong>${parcel.receiver}</strong></p>
//   <p>Current Location: <strong>${parcel.current_location}</strong></p>
//   <p>status: <strong>${parcel.status}</strong></p>
//   <p>Sent on: <strong>${parcel.sent_on}</strong></p>
//   <p>Delivered on: <strong>${parcel.delivered_on}</strong></p>
//   <a class="btn" type="button" id="parcel__activate-btn" href="#">Activate Parcel</a>
// </div> `;


export const parcelList = (parcels) => {
  const markup = `
        <div class="parcel__list">
          <div class="parcel__list-item clearfix" id="parcel-0">
            <div class="item__description">
              <a href="#">Physics Textbook by Higgs</a>
            </div>   
          </div>
          <div class="parcel__list-item clearfix" id="parcel-0">
            <div class="item__description">
              <a href="#">Algorithms &amp; Data </a>
            </div>   
          </div>
          <div class="parcel__list-item clearfix" id="parcel-1">
            <div class="item__description">
              <a href="#">Mathematical Physics</a>
            </div>   
          </div>
          <div class="parcel__list-item clearfix" id="parcel-2">
            <div class="item__description">
              <a href="#">Modern Control Theory</a>
            </div>   
          </div>
          <div class="parcel__list-item clearfix" id="parcel-3">
            <div class="item__description">
              <a href="#">Mathematical Modelling</a>
            </div>   
          </div>            
        </div> `;
  document.querySelector('.user__parcel-content-info').insertAdjacentHTML('afterbegin', markup);
};

export const renderPacelOrder = (parcel) => {
  markup = `
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
  elements.mainContent.insertAdjacentHTML('afterbegin', markup);
}

export const renderPacelOrders = (parcels) => {
  parcels.forEach(parcel);
}

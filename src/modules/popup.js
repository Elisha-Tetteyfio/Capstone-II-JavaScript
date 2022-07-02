import getData from './getData.js';

const popup = document.getElementById('popup');

export const closePopup = () => {
  document.querySelector('.popup-container').style.display = 'none';
};

export const displayPopup = () => {
  document.querySelector('.popup-container').style.display = 'block';
};

export const buildPopup = async () => {
  const result = await getData();
  console.log(result.data);
  let popupHTML = '';
  for (let i = 0; i < result.data.length; i += 1) {
    popupHTML = `
      <div class="d-none popup-container container-fluid bg-light d-flex flex-column align-items-center justify-content-center">
      <div class="popup-wrapper border border-2 border-dark rounded p-3 d-flex flex-column justify-content-center align-items-center w-75 mx-auto">
        <p class="popup-close-button fw-bolder">X</p>
        <div id="popup-header">
          <img src="https://www.artic.edu/iiif/2/${result.data[i].image_id}/full/200,/0/default.jpg" alt="image" />
          <h3 class="popup-title mt-2">${result.data[i].title}</h3>
        </div>
        <div class="item-details">
          <ul class="details-list list-unstyled d-md-flex flex-wrap">
            <li class="col-sm-12 col-md-6">
              <span class="fw-bold">Artist:</span><span> ${result.data[i].artist_title}</span>
            </li>
            <li class="col-sm-12 col-md-6">
              <span class="fw-bold">Date:</span><span> ${result.data[i].date_display}</span>
            </li>
            <li class="col-sm-12 col-md-6">
              <span class="fw-bold">Place of Origin:</span
              ><span> ${result.data[i].place_of_origin}</span>
            </li>
            <li class="col-sm-12 col-md-6">
              <span class="fw-bold">Classification:</span><span> ${result.data[i].classification_title}</span>
            </li>
          </ul>
        </div>
      </div>
    </div> 
      `;

    popup.innerHTML += popupHTML;
  }
};

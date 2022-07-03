import getData from './getData.js';
import { showComment, listenForFormSubmission } from './comments.js';

export const popup = document.getElementById('popup');

export const closePopup = () => {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.style.display = 'none';
  popup.innerHTML = '';
};

export const closeModal = () => {
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-close-button')) {
      closePopup();
    }
  });
};

export const displayPopup = () => {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.style.display = 'block';
  popupContainer.style.position = 'fixed';
};

export const buildPopup = async (id) => {
  const result = await getData();
  const popupItem = result.data.find((items) => items.id === id);
  let popupHTML = '';
  popupHTML = `
      <div class="popup-container container-fluid bg-light d-flex flex-column align-items-center justify-content-center">
      <div class="popup-wrapper position-relative border border-2 border-dark rounded p-3 d-flex flex-column justify-content-center align-items-center w-75 mx-auto">
        <p class="popup-close-button fw-bolder">X</p>
        <div class="popup-header text-center">
          <img src="https://www.artic.edu/iiif/2/${popupItem.image_id}/full/200,/0/default.jpg" alt="image" />
          <h3 class="popup-title mt-1 fs-3 fw-bold">${popupItem.title}</h3>
        </div>
        <div class="item-details">
          <ul class="details-list list-unstyled d-md-flex flex-wrap fs-5">
            <li class="col-sm-12 col-md-6">
              <span class="fw-bold">Artist:</span><span> ${popupItem.artist_title}</span>
            </li>
            <li class="col-sm-12 col-md-6">
              <span class="fw-bold">Date:</span><span> ${popupItem.date_display}</span>
            </li>
            <li class="col-sm-12 col-md-6">
              <span class="fw-bold">Place of Origin:</span
              ><span> ${popupItem.place_of_origin}</span>
            </li>
            <li class="col-sm-12 col-md-6">
              <span class="fw-bold">Classification:</span><span> ${popupItem.classification_title}</span>
            </li>
          </ul>
        </div>
        <div class="comments mt-1">
        <h4 class="comments-header text-center fw-bold fs-5">Comments</h4>
        <ul class="comments-list list-unstyled">
          <!-- <li>
            <span class="date">2-17-1967</span
            ><span class="author"> Picasso:</span
            ><span class="comment"> really nice piece</span>
          </li>
          <li>
            <span class="date">2-17-1967</span
            ><span class="author"> Mackavelli:</span
            ><span class="comment"> it has come to life</span>
          </li> -->
        </ul>
      </div>
      <div id="input-fields" class="input-field mt-1 w-100">
        <h4 class="form-header text-center fw-bold fs-5">Leave a Comment</h4>
        <form action="" class="comment-form d-flex flex-column gap-2">
          <input
            type="text"
            placeholder="Enter your name here"
            class="mx-auto col-md-5 border border-2 border-dark rounded p-1 name-input"
            name="name-input"
          />
          <textarea
            placeholder="Type comment here"
            class="mx-auto col-md-5 border border-2 border-dark rounded p-1 comment-input"
            name="comment-input"
          ></textarea>
          <button
            type="submit"
            class="p-2 btn-danger border border-none rounded comment-btn fw-bold mx-auto"
          >
            Comment
          </button>
        </form>
      </div>
      </div>
    </div> 
      `;

  popup.innerHTML += popupHTML;
  listenForFormSubmission(id);
  await showComment(id);
};

import getData from './getData.js';
import like from '../assets/like.svg';

export const items = document.querySelector('#items');
export const getArt = async () => {
  const result = await getData();
  let artHTML = '';
  result.data.forEach((element) => {
    artHTML
    += `<li class="artElement">
      <div class="imgDiv">
        <img src="https://www.artic.edu/iiif/2/${element.image_id}/full/200,/0/default.jpg" alt="${element.title}">
      </div>
      <div class="infoDiv">
        <div class="artTitle"> ${element.title} </div>
        <div>
          <div class="like"><img src="${like}" alt="like"></div>
          <div>5 like(s)</div>
        </div>
      </div>
      <button type="button">Comments</button>
    </li>`;
  });
  items.innerHTML = artHTML;
};
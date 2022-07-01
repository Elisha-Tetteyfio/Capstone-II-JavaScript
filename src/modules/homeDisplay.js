import { getData, getLikes } from './getData.js';
// import like from '../assets/like.svg';

export const items = document.querySelector('#items');
export const getArt = async () => {
  const result = await getData();
  const allLikes = await getLikes();
  let artHTML = '';
  result.data.forEach((element) => {
    if (allLikes[`${element.image_id}`] === undefined) { allLikes[element.image_id] = { likes: 0 }; }
    artHTML
    += `<li class="artElement">
      <div class="imgDiv">
        <img src="https://www.artic.edu/iiif/2/${element.image_id}/full/200,/0/default.jpg" alt="${element.title}">
      </div>
      <div class="infoDiv">
        <div class="artTitle"> ${element.title} </div>
        <div>
          <div>${allLikes[`${element.image_id}`].likes} like(s)</div>
        </div>
      </div>
      <button type="button">Comments</button>
    </li>`;
  });
  items.innerHTML = artHTML;
};
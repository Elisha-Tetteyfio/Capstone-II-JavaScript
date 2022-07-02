import { getData, getLikes } from './getData.js';
import like from '../assets/like.svg';

export const items = document.querySelector('#items');
export const getArt = async () => {
  const result = await getData();
  const allLikes = await getLikes();
  let artHTML = '';
  result.data.forEach((element) => {
    if (allLikes[`${element.image_id}`] === undefined) { allLikes.push({ item_id: element.image_id, likes: 0 }); }

    const index = allLikes.findIndex((obj) => obj.item_id === element.image_id);

    artHTML
    += `<li class="artElement">
      <div class="imgDiv">
        <img src="https://www.artic.edu/iiif/2/${element.image_id}/full/200,/0/default.jpg" alt="${element.title}">
      </div>
      <div class="infoDiv">
        <div class="artTitle"> ${element.title} </div>
        <div>
          <div> <img src="${like}" alt="like" id="${element.image_id}Like" class="like"> </div>
          <div> ${allLikes[index].likes}  </div>
        </div>
      </div>
      <button type="button">Comments</button>
    </li>`;
  });
  items.innerHTML = artHTML;
  return (allLikes);
};
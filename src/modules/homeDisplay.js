import { getData, getLikes } from './getData.js';
import like from '../assets/like.svg';
import { buildPopup, displayPopup } from './popup.js';

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
        <p class="artTitle">${element.title}</p>
        <div>
          <div> <img src="${like}" alt="like" id="${element.image_id}Like" class="like"> </div>
          <div> ${allLikes[index].likes}  </div>
        </div>
      </div>
      <button class="comment-btn" type="button">Comments</button>
    </li>`;
  });
  items.innerHTML = artHTML;

  const activateCommentBtn = async () => {
    const result = await getData();
    const commentBtns = document.querySelectorAll('.comment-btn');
    commentBtns.forEach((button) => {
      button.addEventListener('click', async () => {
        const Details = button.parentElement.firstChild.nextSibling;
        const artworkTitle = Details.nextSibling.nextSibling.firstChild.nextSibling.textContent;
        const targetArt = result.data.find((items) => items.title === artworkTitle);

        const { id } = targetArt;

        if (id) {
          await buildPopup(id);
          displayPopup();
        }
      });
    });
  };

  activateCommentBtn();
  return (allLikes);
};
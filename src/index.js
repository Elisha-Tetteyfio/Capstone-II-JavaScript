// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import './main.scss';
import Logo from './assets/art-logo.png';

import getData from './modules/getData.js';
import { buildPopup, closeModal, displayPopup } from './modules/popup.js';

import { getArt } from './modules/homeDisplay.js';
import {
  getBtn,
} from './modules/addLike.js';


const homeLink = document.querySelector('#homeLink');
const logo = `<img src="${Logo}" alt="o" id="logo"></img>`;
homeLink.innerHTML += logo;


const items = document.querySelector('#items');
const getArt = async () => {
  const result = await getData();

  result.data.forEach((element) => {
    const listItem = document.createElement('li');

    const itemImage = document.createElement('img');
    itemImage.setAttribute('src', `https://www.artic.edu/iiif/2/${element.image_id}/full/200,/0/default.jpg`);
    itemImage.setAttribute('alt', 'image of artwork');

    const productTitle = document.createElement('p');
    productTitle.classList.add('fw-bold');
    productTitle.innerHTML = `${element.title}`;

    listItem.appendChild(itemImage);
    listItem.appendChild(productTitle);

    const likesWrapper = document.createElement('div');

    const likeIcon = document.createElement('i');

    const likesText = document.createElement('p');
    likesText.innerHTML = '5 Likes';

    likesWrapper.appendChild(likeIcon);
    likesWrapper.appendChild(likesText);

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-btn');
    commentButton.setAttribute('type', 'button');
    commentButton.innerHTML = 'Comment';

    listItem.appendChild(likesWrapper);
    listItem.appendChild(commentButton);
    items.appendChild(listItem);
  });

  const activateCommentBtn = async () => {
    const result = await getData();
    const commentBtns = document.querySelectorAll('.comment-btn');
    commentBtns.forEach((button) => {
      button.addEventListener('click', async () => {
        const artworkTitle = button.parentElement.firstChild.nextSibling.textContent;
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
  closeModal();
};

getArt();
getBtn();


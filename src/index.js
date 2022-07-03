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

const Buildpage = async () => {
  getArt();

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
Buildpage();
getBtn();

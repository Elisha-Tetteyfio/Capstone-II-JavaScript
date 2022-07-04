import './style.css';
import './main.scss';
import Logo from './assets/art-logo.png';

import { closeModal } from './modules/popup.js';

import { getArt } from './modules/homeDisplay.js';
import { getBtn } from './modules/addLike.js';
import { count } from './modules/itemsCounter.js';

const homeLink = document.querySelector('#homeLink');
const logo = `<img src="${Logo}" alt="o" id="logo"></img>`;
homeLink.innerHTML += logo;

const Buildpage = async () => {
  getArt();
  closeModal();
};

Buildpage();
getBtn();
count();
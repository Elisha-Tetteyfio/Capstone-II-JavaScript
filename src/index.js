// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import './main.scss';
import Logo from './assets/art-logo.png';

const homeLink = document.querySelector('#homeLink');
const logo = `<img src="${Logo}" alt="o" id="logo"></img>`;
homeLink.innerHTML += logo;

const addup = () => {
  const a = 2;
  const b = 2;

  return a + b;
};

module.exports = addup;
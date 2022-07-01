// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import './main.scss';
import Logo from './assets/art-logo.png';
import getData from './modules/getData.js';

const homeLink = document.querySelector('#homeLink');
const logo = `<img src="${Logo}" alt="o" id="logo"></img>`;
homeLink.innerHTML += logo;

const items = document.querySelector('#items');
const getArt = async () => {
  const result = await getData();
  let artHTML = '';
  result.data.forEach((element) => {
    artHTML
      += `<li>
        <img src="https://www.artic.edu/iiif/2/${element.image_id}/full/200,/0/default.jpg" alt="img1">
        <div> ${element.title} </div>
        <div>
            <i></i>
            <div>5 likes</div>
        </div>
        <button type="button">Comments</button>
    </li>`;
  });
  items.innerHTML = artHTML;
};

getArt();

const addup = () => {
  const a = 2;
  const b = 2;

  return a + b;
};

module.exports = addup;
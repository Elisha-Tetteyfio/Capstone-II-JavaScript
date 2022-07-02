import { getData } from './getData.js';

export const add = 0;
export const count = async () => {
  const total = document.getElementById('totalArts');
  const result = await getData();
  let counter = 0;

  result.data.forEach(() => {
    counter += 1;
  });
  total.innerHTML += `(${counter})`;
};
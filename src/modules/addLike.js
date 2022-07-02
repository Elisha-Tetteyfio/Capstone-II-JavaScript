import { getArt } from './homeDisplay.js';

const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6MkPjjBjFG5Jhh37x3c8/likes';

export const likeFn = async (id) => {
  const data = { item_id: id };
  try {
    const response = await fetch(likesURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }); return await response.json();
  } catch (error) {
    return false;
  }
};

export const getBtn = async () => {
  await getArt();
  const likeBtn = document.querySelectorAll('.like');
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id.split('Like')[0]; // This line is to return the actual ID removing the appended 'Like' at the end

      likeFn(id);

      setTimeout(() => window.location.reload(), 300);
    });
  });
};

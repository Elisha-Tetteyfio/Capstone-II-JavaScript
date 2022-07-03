const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6MkPjjBjFG5Jhh37x3c8/comments';

const addComments = (commentData) => {
  const commentsList = document.querySelector('.comments-list');
  const listItem = document.createElement('li');
  listItem.innerHTML = ` <li>
      <span class="date">${commentData.creation_date}</span
      ><span class="author">${commentData.username}:</span
      ><span class="comment">${commentData.comment}</span>
    </li>`;
  commentsList.appendChild(listItem);
};

export const showComment = async (artID) => {
  const result = await fetch(`${baseUrl}?item_id=${artID}`, {
    method: 'GET',
  });
  let data = [];
  if (result.ok) {
    data = await result.json();
  }
  data.forEach((comment) => {
    addComments(comment);
  });
};

export const listenForFormSubmission = (id) => {
  const commentForm = document.querySelector('.comment-form');
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: e.target.elements['name-input'].value,
        comment: e.target.elements['comment-input'].value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response.text();
    if (result === 'Created') {
      addComments({
        creation_date: new Date().toISOString().substring(0, 10),
        username: e.target.elements['name-input'].value,
        comment: e.target.elements['comment-input'].value,
      });
      e.target.reset();
    }
  });
};

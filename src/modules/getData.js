const url = 'https://api.artic.edu/api/v1/artworks?page=10&limit=100';
const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6MkPjjBjFG5Jhh37x3c8/likes'

export async function getData() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return false;
  }
}

export async function getLikes() {
  try {
    const response = await fetch(likesURL);
    return await response.json();
  } catch (error) {
    return false;
  }
}

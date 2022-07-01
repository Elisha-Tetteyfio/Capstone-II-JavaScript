const url = 'https://api.artic.edu/api/v1/artworks?page=10&limit=100';

export default async function getData() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return false;
  }
}

const API_KEY = '5a591a24c1bcef1d547ab9097511afec';
const BASE_URL = 'https://api.themoviedb.org/3';

async function sendRequest(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error(error.status_message);
  }
}

async function fetchTrendingMovies() {
  return sendRequest(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

async function fetchFullFilmDetails(id) {
  return sendRequest(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
}

async function fetchFilmByName(name) {
  return sendRequest(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`,
  );
}

async function getFilmCredits(id) {
  return sendRequest(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

async function getFilmReviews(id) {
  return sendRequest(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}

const API = {
  fetchTrendingMovies,
  fetchFullFilmDetails,
  fetchFilmByName,
  getFilmCredits,
  getFilmReviews,
};

export default API;

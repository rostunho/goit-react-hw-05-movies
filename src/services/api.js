const API_KEY = '5a591a24c1bcef1d547ab9097511afec';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.status_message);
  }
}

async function fetchFullFilmDetails(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.status_message);
  }
}

async function fetchFilmByName(name) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.status_message);
  }
}

async function getFilmCredits(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.status_message);
  }
}

async function getFilmReviews(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.status_message);
  }
}

const API = {
  fetchTrendingMovies,
  fetchFullFilmDetails,
  fetchFilmByName,
  getFilmCredits,
  getFilmReviews,
};

export default API;

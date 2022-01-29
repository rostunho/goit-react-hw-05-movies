const API_KEY = '5a591a24c1bcef1d547ab9097511afec';
const BASE_URL = 'https://api.themoviedb.org/';

async function fetchTrendingMovie() {
  try {
    const response = await fetch(
      `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.status_message);
  }
}

const API = {
  fetchTrendingMovie,
};

export default API;

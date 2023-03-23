const baseURL = process.env.MOVIE_API;
const photosImages = process.env.MOVIE_API;

const urls = {
  movies: '/discover/movie',
  search: '/search/movie',
  genres: '/genre/movie/list',
  movie: '/discover/movie'
};

export {
  baseURL,
  urls,
  photosImages
};

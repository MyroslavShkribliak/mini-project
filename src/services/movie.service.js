import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    getAll: (page) => axiosService.get(`${urls.movies}?page=${page}`),
    searchMovie: (movie) => axiosService.get(`${urls.search}?query=${movie}`),
    getGenrebadge: () => axiosService.get(urls.genres),
    searchGenreBadge: (genre) => axiosService.get(`${urls.movies}?&with_genres=${genre}`),
    getMovie: (id) => axiosService.get(`${urls.movie}/${id}`)
};

export {
    movieService
};
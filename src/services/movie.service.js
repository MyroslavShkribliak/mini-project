import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    // getAll: (page=2) => axiosService.get(urls.movie, {params:{page}}),
    getAll: (movie) => axiosService.post(urls.movie, movie),
}

export {
    movieService
}
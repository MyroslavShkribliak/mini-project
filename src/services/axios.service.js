import axios from "axios";

import { baseURL } from '../configs';


const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWY1NjE2ZDVhZGNmY2VjNjZjNjUxYzdjMTQ5MGEwMyIsInN1YiI6IjYzNDlhOTVhNTAxY2YyMDA5MTY1MjVmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4RrgCqikTvicap6uX7wsiDfORhrBy20maOLtOPEg2Y`
    }
});

export {
    axiosService
}

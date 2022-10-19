import axios from "axios";
import {baseURL} from "../configs";
import {authService} from "./auth.service";

const axiosService = axios.create({baseURL});
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWY1NjE2ZDVhZGNmY2VjNjZjNjUxYzdjMTQ5MGEwMyIsInN1YiI6IjYzNDlhOTVhNTAxY2YyMDA5MTY1MjVmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4RrgCqikTvicap6uX7wsiDfORhrBy20maOLtOPEg2Y'
axiosService.interceptors.request.use((config) => {
    const access = authService.getAccessToken();

    if (access) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export {
    axiosService
}


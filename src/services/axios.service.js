import axios from "axios";

import {baseURL} from "../configs";
import {APIKEY} from "./movieapikey.service";


const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${APIKEY}`
    }
});

export {
    axiosService
}
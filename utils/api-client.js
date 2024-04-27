import axios from "axios";
import {
    SERVER_URL
} from "../constants";

const API = axios.create({
    baseURL: SERVER_URL['development'],
    timeout: 12000,
    withCredentials: true
});

export default API;
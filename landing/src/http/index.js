import axios from "axios";

const $host = axios.create({
    baseURL: "http://localhost:5000", // Нужно загнать в конфиг фаил это римерно process.env.REACT_APP_API_URL
})

export {
    $host
}
import axios, {AxiosRequestConfig} from "axios";

const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://rapidapi.p.rapidapi.com/weather",
    params: {
        q: "Pelotas, Brasil",
        units: '"metric" or "imperial"'
    },
    headers: {
        "x-rapidapi-key": "072955421fmsh5cb0500004a41dep13f166jsn38f2f22d84e7",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
}


export default options;
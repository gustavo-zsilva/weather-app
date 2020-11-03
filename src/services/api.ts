import {AxiosRequestConfig} from "axios";

const api: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/weather',
    params: {
        q: 'Pelotas,Brasil',
        id: '2172797',
        lang: 'null',
        units: '"metric" or "imperial"',
        mode: 'xml, html'
    },
    headers: {
        'x-rapidapi-key': '072955421fmsh5cb0500004a41dep13f166jsn38f2f22d84e7',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
}

export default api;
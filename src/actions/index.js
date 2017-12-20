import axios from 'axios';

const API_KEY = '9a0a217ea15e0ee4d102d85d33c4629c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FECTH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`;
    const request = axios.get(url);

    // console.log('Request',request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
import axios from 'axios';

const API_KEY = '41245c5567203b8ec21ea92e91d3f27e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// could do const ROOT_URL = 'const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // request returns a promise/ this does an ajax request to back end api. it is asynchronous.
  // point of redux promise is to clean up our code. 

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

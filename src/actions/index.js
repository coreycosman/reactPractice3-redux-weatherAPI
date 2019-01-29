import axios from 'axios';

const API_KEY = 'a7fce1678d46b6ee0509abeeb0eb5585';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request =  axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

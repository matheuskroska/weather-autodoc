export const ApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_WEATHER_API_HOST,
  },
}

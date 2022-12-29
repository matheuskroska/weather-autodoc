import { setLoader } from '../features/loader/loaderSlice'
import { getCity, getWeather } from '../services/api'
import { addWeather } from '../services/database'

/**
 * It takes a location as an argument, and returns a promise that resolves to an array of random
 * cities.
 * @param location - The location to search for.
 */

const useRandomCities = async (dispatch, location) => {
  try {
    dispatch(
      setLoader({ loading: true, error: false, message: '', name: 'batch' }),
    );
    const cities = [];
    for (const city of location) {
      cities.push(await getCity(city));
    }

    const randomCities = [];
    for (const city of cities) {
      randomCities.push(
        city.options[Math.floor(Math.random() * city.options.length)],
      );
    }

    const weather = [];
    for (const city of randomCities) {
      weather.push(await getWeather(city));
    }

    const promiseAddWeather = [];
    for (const item of weather) {
      promiseAddWeather.push(addWeather(item));
    }
    await Promise.all(promiseAddWeather);
    dispatch(setLoader({ loading: false, error: false, message: '', name: '' }));
  } catch (error) {
    throw error;
  }
};

export const useBatchWeather = async (dispatch) => {
  useRandomCities(dispatch, [
    'Brazil',
    'Germany',
    'France',
    'Spain',
    'Argentina',
    'Italy',
    'England',
    'Portugal',
    'USA',
    'Canada',
    'China',
    'Japan',
    'Russia',
  ]);
};

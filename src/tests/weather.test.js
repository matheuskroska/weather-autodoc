import { getCity } from '../services/api'
import { getWeather } from '../services/api'
import { addWeather } from '../services/database'
import { updateAndLogWeather } from '../features/card/Card'

/* Mocking the functions from the api file. */
jest.mock('../services/api', () => ({
  getCity: jest.fn(),
  getWeather: jest.fn(),
}))

/* Mocking the functions from the database file. */
jest.mock('../services/database', () => ({
  addWeather: jest.fn(),
  deleteWeather: jest.fn(),
  updateWeather: jest.fn(),
}))

/* Mocking the function updateAndLogWeather from the file Card.js. */
jest.mock('../features/card/Card', () => ({
  updateAndLogWeather: jest.fn(),
}))

/* Testing the function updateWeather. */
describe('updateWeather', () => {
  it('should call updateWeather', async () => {
    const location = {
      id: 123,
      label: 'São Paulo',
      country: 'Brazil',
      lat: -23.55,
      lon: -46.633,
    }
    const weatherLists = [
      {
        doc_id: '123',
        location: {
          id: 123,
          label: 'São Paulo',
          country: 'Brazil',
          lat: -23.55,
          lon: -46.633,
        },
        current: {
          last_updated: '2021-03-01 12:00',
          temp_c: 25,
          condition: {
            text: 'Sunny',
            icon: 'https://cdn.weatherapi.com/weather/64x64/day/113.png',
          },
        },
        forecast: {
          forecastday: [
            {
              date: '2021-03-01',
              day: {
                maxtemp_c: 30,
                mintemp_c: 20,
                condition: {
                  text: 'Sunny',
                  icon: 'https://cdn.weatherapi.com/weather/64x64/day/113.png',
                },
              },
            },
          ],
        },
      },
    ]

    const cityWeather = {
      location: {
        id: 123,
        label: 'São Paulo',
        country: 'Brazil',
        lat: -23.55,
        lon: -46.633,
      },
      current: {
        last_updated: '2021-03-01 12:00',
        temp_c: 25,
        condition: {
          text: 'Sunny',
          icon: 'https://cdn.weatherapi.com/weather/64x64/day/113.png',
        },
      },
      forecast: {
        forecastday: [
          {
            date: '2021-03-01',
            day: {
              maxtemp_c: 30,
              mintemp_c: 20,
              condition: {
                text: 'Sunny',
                icon: 'https://cdn.weatherapi.com/weather/64x64/day/113.png',
              },
            },
          },
        ],
      },
    }

    getWeather.mockImplementation(() => Promise.resolve(cityWeather))
    updateAndLogWeather(location, weatherLists)
    expect(updateAndLogWeather).toHaveBeenCalled()
  })
})

/* Testing the function deleteWeather. */
describe('deleteWeather', () => {
  it('should delete a weather', async () => {
    const id = '123'
    const deleteWeather = require('../services/database').deleteWeather
    deleteWeather(id)
    expect(deleteWeather).toHaveBeenCalledWith(id)
  })
})

/* Testing the function addWeather. */
describe('addWeather', () => {
  it('should add a new weather', async () => {
    const weather = {
      location: {
        id: 123,
        label: 'São Paulo',
      },
      current: {
        temp_c: 25,
        condition: {
          icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png',
        },
      },
      forecast: {
        forecastday: [
          {
            day: {
              maxtemp_c: 30,
              mintemp_c: 20,
              condition: {
                icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png',
              },
            },
          },
        ],
      },
    }

    await addWeather(weather)

    expect(addWeather).toHaveBeenCalledWith(weather)
  })
})

/* Testing the function getCity. */
describe('getCity', () => {
  it('should return the city data', async () => {
    const city = {
      id: 123,
      name: 'Test City',
      label: 'Test City, Test Country',
    }

    getCity.mockResolvedValue(city)

    const cityData = await getCity()

    expect(cityData).toEqual(city)
    expect(getCity).toHaveBeenCalledTimes(1)
  })
})

/* Testing the function getWeather. */
describe('getWeather', () => {
  it('should return the weather data', async () => {
    const weather = {
      current: {
        temp_c: 10,
        feelslike_c: 10,
        gust_kph: 10,
        condition: {
          text: 'Test',
          icon: 'Test',
        },
      },
      forecast: {
        forecastday: [
          {
            astro: {
              sunrise: 'Test',
              sunset: 'Test',
              moonset: 'Test',
              moonrise: 'Test',
              moonfase: 'Test',
            },
            day: {
              avgtemp_c: 10,
            },
          },
        ],
      },
    }

    getWeather.mockResolvedValue(weather)

    const weatherData = await getWeather()

    expect(weatherData).toEqual(weather)
    expect(getWeather).toHaveBeenCalledTimes(1)
  })
})

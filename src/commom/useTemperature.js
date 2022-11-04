/**
 * It takes a list of objects, and returns a list of objects that have the highest or lowest
 * temperature.
 * @param list - an array of objects
 * @param operation - a function that takes in a list of numbers and returns a number
 * @returns The cities with the highest and lowest temperatures.
 */
export const useTemperature = (list, operation) => {
  let cities = list.filter(
    (thing, index, self) =>
      index === self.findIndex((t) => t.location.name === thing.location.name),
  )
  return cities.filter(
    (item) =>
      item.current.temp_c ===
      operation(...list.map((item) => item.current.temp_c, 0)),
  )
}

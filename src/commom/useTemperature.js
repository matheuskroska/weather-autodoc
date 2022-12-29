/**
 * It takes a list of objects, and returns a list of objects that have the highest or lowest
 * temperature.
 * @param list - an array of objects
 * @param operation - a function that takes in a list of numbers and returns a number
 * @returns The cities with the highest and lowest temperatures.
 */
export const useTemperature = (list, operation) => {
  // Obtenha os valores únicos da temperatura
  const uniqueValues = list
    .map((item) => item.current.temp_c)
    .filter((value, index, self) => self.indexOf(value) === index);

  // Encontre o valor mínimo ou máximo de acordo com a operação
  const temperature = operation(...uniqueValues);

  // Encontre as cidades com a temperatura mínima ou máxima
  const cities = list.filter((item) => item.current.temp_c === temperature);

  return cities;
}

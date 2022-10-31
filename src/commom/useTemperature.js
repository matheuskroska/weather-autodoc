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

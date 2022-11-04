/**
 * It takes a date in the format of a string and returns a date in the format of a string.
 * @param date - The date to be converted.
 * @returns A function that takes a date and returns a string.
 */

const LANG = 'pt-BR'
const DATE_OPTIONS = {
  weekday: 'short',
}

export const convertDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleString(LANG, {
    weekday: DATE_OPTIONS.weekday,
  })
}

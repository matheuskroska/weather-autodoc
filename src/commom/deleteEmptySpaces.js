/**
 * This function takes a string as an argument and returns the same string with all the spaces removed.
 * @param string - The string to be modified.
 * @returns The string with all the spaces removed.
 */
export const deleteEmptySpaces = (string) => {
  return string.replace(/ /g, '')
}

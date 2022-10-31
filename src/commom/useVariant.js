/**
 * Iterate through the variants object and return the variant that matches the variant prop, otherwise
 * return the default variant.
 * @param variant - string
 * @param variants - Record<string, FlattenSimpleInterpolation>
 * @returns A function that takes two arguments and returns a FlattenSimpleInterpolation
 */

const DEFAULT_VARIANT = 'common'

export const useVariant = (variant, variants) => {
  for (const [key, value] of Object.entries(variants)) {
    if (key === variant) {
      return value
    }
  }
  return variants[DEFAULT_VARIANT]
}

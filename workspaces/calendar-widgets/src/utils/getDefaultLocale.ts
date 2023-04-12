/** Types */
import { StringOrNullUndefined } from "../commonTypes";

/**
 * Gets the user's default locale, optionally overridden or using a fallback.
 *
 * @param {string|null|undefined} [overrideLocale] - The locale to use instead of the user's default locale. Optional.
 * @param {string|null|undefined} [fallbackLocale] - The locale to use if the user's default locale is not available and no override is provided. Optional.
 * @returns {string} The determined locale value.
 * @throws {TypeError} If either `overrideLocale` or `fallbackLocale` is provided and not a string or `null`.
 */
export const getDefaultLocale = (
  overrideLocale: StringOrNullUndefined = undefined,
  fallbackLocale: StringOrNullUndefined = undefined
): string => {
  if (overrideLocale !== undefined && overrideLocale !== null && typeof overrideLocale !== 'string') {
    throw new TypeError('The override locale must be a string, undefined or null.');
  }

  if (fallbackLocale !== undefined && fallbackLocale !== null && typeof fallbackLocale !== 'string') {
    throw new TypeError('The fallback locale must be a string, undefined or null.');
  }

  let userLocale: string = navigator.language;

  if (overrideLocale !== undefined && overrideLocale !== null) {
    userLocale = overrideLocale;
  } else if (!userLocale && fallbackLocale !== undefined && fallbackLocale !== null) {
    userLocale = fallbackLocale;
  }

  return userLocale;
};
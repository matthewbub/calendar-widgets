/**
 * Generates a concatenated string of input classes that evaluate to `true`.
 *
 * @param {...(string | undefined | null | false)} classes - The input classes to concatenate.
 * @returns {string} The concatenated string of input classes that evaluate to `true`.
 */
export function cl(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(' ');
}

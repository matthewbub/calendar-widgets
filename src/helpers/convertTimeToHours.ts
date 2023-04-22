export function convertTimeToHours(timeStr: string) {
  const pattern = /^(\d+)(h|m)$/; // regex pattern to match hours and minutes
  const match = pattern.exec(timeStr); // try to match the input string

  if (match) {
    const value = parseInt(match[1]); // extract the numeric value from the match
    const unit = match[2]; // extract the unit (h or m) from the match

    let result;
    if (unit === 'h') {
      result = value; // if it's hours, return the value as is
    } else {
      result = value / 60; // if it's minutes, convert to hours (by dividing by 60)
    }

    // round the result to the nearest quarter
    result = Math.round(result * 4) / 4;

    return result;
  } else {
    throw new TypeError(`Invalid time string: ${timeStr}, Time string should match pattern /^(\d+)(h|m)$/`); // if no match, throw an error
  }
}
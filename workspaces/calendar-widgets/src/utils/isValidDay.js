export const isValidDay = (day) => {
  if (typeof day === 'number' && !isNaN(day) && day >= 1 && day <= 31) {
    return true;
  }
  return false;
}
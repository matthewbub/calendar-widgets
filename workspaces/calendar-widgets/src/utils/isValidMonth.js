export const isValidMonth = (month) => {
  if (typeof month === 'number' && !isNaN(month) && month >= 1 && month <= 12) {
    return true;
  }
  return false;
};
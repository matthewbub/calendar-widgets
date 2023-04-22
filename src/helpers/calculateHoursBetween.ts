const calculateHoursBetween = (startRow: string, endRow: string) => {
  const startRowTime = parseTime(startRow).getTime();
  const endRowTime = parseTime(endRow).getTime();

  return (endRowTime - startRowTime) / (1000 * 60 * 60);
};

const parseTime = (timeString: string) => {
  const match = timeString.match(/(\d{1,2}):?(\d{2})?(am|pm)/i);
  if (!match) {
    throw new Error(`Invalid time string: ${timeString}`);
  }
  const [_, hour, minute = '00', meridiem] = match;

  const hourNumber = parseInt(hour);
  const minuteNumber = minute ? parseInt(minute) : 0;
  const isPM = meridiem.toLowerCase() === 'pm';

  const hour24 = isPM && hourNumber !== 12 ? hourNumber + 12 : hourNumber === 12 && !isPM ? 0 : hourNumber;

  return new Date(0, 0, 0, hour24, minuteNumber);
};

export {
  calculateHoursBetween
};
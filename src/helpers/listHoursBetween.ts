const listHoursBetween = (startRow: string, endRow: string) => {
  const startRowTime = parseTime(startRow);
  const endRowTime = parseTime(endRow);

  if (endRowTime <= startRowTime) {
    throw new Error('Invalid time range: end time must be after start time');
  }

  const hoursBetween = [];
  let currentHour = startRowTime;

  while (currentHour <= endRowTime) {
    hoursBetween.push(formatTime(currentHour));
    currentHour = new Date(currentHour.getTime() + 60 * 60 * 1000);
  }

  return hoursBetween;
};

const parseTime = (timeString: string) => {
  const match = timeString.match(/(\d{1,2}):?(\d{2})?(am|pm)/i);
  if (!match) {
    throw new Error(`Invalid time string: ${timeString}`);
  }
  const [_, hour, minute = '00', meridiem] = match;

  const hourNumber = parseInt(hour);
  const minuteNumber = parseInt(minute);
  const isPM = meridiem.toLowerCase() === 'pm';

  const hour24 = isPM && hourNumber !== 12 ? hourNumber + 12 : hourNumber === 12 && !isPM ? 0 : hourNumber;

  return new Date(0, 0, 0, hour24, minuteNumber);
};

const formatTime = (time: Date) => {
  const hour = time.getHours();
  const minute = time.getMinutes();
  const meridiem = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour % 12 || 12;

  return `${hour12}:${minute.toString().padStart(2, '0')}${meridiem}`;
};

export {
  listHoursBetween
};

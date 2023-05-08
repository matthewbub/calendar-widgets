import { magicNumber } from './magicNumber';

const parseTime = (timeString: string) => {
  const match = timeString.match(/(\d{1,2}):?(\d{2})?(am|pm)/i);
  if (!match) {
    throw new Error(`Invalid time string: ${timeString}`);
  }
  // eslint-disable-next-line no-unused-vars
  const [_, hour, minute = '00', meridiem] = match;

  const hourNumber = parseInt(hour);
  const minuteNumber = parseInt(minute);
  const isPM = meridiem.toLowerCase() === 'pm';

  const hour24 = isPM && hourNumber !== magicNumber('12') ? hourNumber + magicNumber('12') : hourNumber === magicNumber('12') && !isPM ? magicNumber('0') : hourNumber;

  return new Date(magicNumber('0'), magicNumber('0'), magicNumber('0'), hour24, minuteNumber);
};

const formatTime = (time: Date) => {
  const hour = time.getHours();
  const minute = time.getMinutes();
  const meridiem = hour >= magicNumber('12') ? 'pm' : 'am';
  const hour12 = hour % magicNumber('12') || magicNumber('12');

  return `${hour12}:${minute.toString().padStart(magicNumber('2'), '0')}${meridiem}`;
};

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
    currentHour = new Date(currentHour.getTime() + magicNumber('60') * magicNumber('60') * magicNumber('1000'));
  }

  return hoursBetween;
};

export {
  listHoursBetween
};

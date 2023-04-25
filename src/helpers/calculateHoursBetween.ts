import { magicNumber } from './magicNumber';

const parseTime = (timeString: string) => {
  const match = timeString.match(/(\d{1,2}):?(\d{2})?(am|pm)/i);
  if (!match) {
    throw new Error(`Invalid time string: ${timeString}`);
  }

  // eslint-disable-next-line no-unused-vars
  const [_, hour, minute = '00', meridiem] = match;

  const hourNumber = parseInt(hour);
  const minuteNumber = minute ? parseInt(minute) : magicNumber('0');
  const isPM = meridiem.toLowerCase() === 'pm';

  const hour24 = isPM && hourNumber !== magicNumber('12') ? hourNumber + magicNumber('12') : hourNumber === magicNumber('12') && !isPM ? magicNumber('0') : hourNumber;

  return new Date(magicNumber('0'), magicNumber('0'), magicNumber('0'), hour24, minuteNumber);
};

const calculateHoursBetween = (startRow: string, endRow: string) => {
  const startRowTime = parseTime(startRow).getTime();
  const endRowTime = parseTime(endRow).getTime();

  return (endRowTime - startRowTime) / (magicNumber('1000') * magicNumber('60') * magicNumber('60'));
};

export {
  calculateHoursBetween
};

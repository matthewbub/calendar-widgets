/** Dependencies */
import {formatDate} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('formatDate', () => {
  it('should format a date in the default locale', () => {
    const formattedDate = formatDate(4, 8, 2023);
    expect(formattedDate).to.equal('04/08/2023');
  });

  it('should format a date in a custom locale (fr-FR)', () => {
    const formattedDate = formatDate(4, 8, 2023, 'fr-FR');
    expect(formattedDate).to.equal('08/04/2023');
  });

  it('should format a date in a custom locale (de-DE)', () => {
    const formattedDate = formatDate(4, 8, 2023, 'de-DE');
    expect(formattedDate).to.equal('08.04.2023');
  });

  it('should format a date in a custom locale (ja-JP)', () => {
    const formattedDate = formatDate(4, 8, 2023, 'ja-JP');
    expect(formattedDate).to.equal('2023/04/08');
  });
});
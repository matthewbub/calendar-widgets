/** Dependencies */
import {getDefaultLocale} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('getDefaultLocale', () => {
  before(() => {
    global.navigator = {
      language: 'en-US'
    };
  });

  after(() => {
    global.navigator = undefined;
  });

  it('should return the user\'s default locale if no arguments are provided', () => {
    const userLocale = getDefaultLocale(null, null);
    expect(userLocale).to.equal('en-US');
  });
  
  it('should return the override locale if provided', () => {
    const userLocale = getDefaultLocale('fr-FR', null);
    expect(userLocale).to.equal('fr-FR');
  });
  
  it('should return the fallback locale if the default and override locales are not available', () => {
    global.navigator.language = undefined;
    const userLocale = getDefaultLocale(null, 'en-GB');
    expect(userLocale).to.equal('en-GB');
  });

  it('should use the navigator object to get the user locale', () => {
    global.navigator.language = 'fr-FR';
    const userLocale = getDefaultLocale(null, null);
    expect(userLocale).to.equal('fr-FR');
  });

  it('should throw a TypeError if the override locale is not a string or null', () => {
    expect(() => getDefaultLocale(123)).to.throw(TypeError);
    expect(() => getDefaultLocale(true)).to.throw(TypeError);
  });
  
  it('should throw a TypeError if the fallback locale is not a string or null', () => {
    expect(() => getDefaultLocale(null, 123)).to.throw(TypeError);
    expect(() => getDefaultLocale(null, true)).to.throw(TypeError);
  });
});
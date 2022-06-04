/** Dependencies */
const {calendar} = require('@whilethiscompiles/calendar');
const chai = require('chai');

/** Configurations */
const expect = chai.expect;

describe('calendar', () => {
  it('should return january as the first key entry', () => {
    const nineteen99 = Object.keys(calendar(1999))[0];
    expect(nineteen99).to.equal('january');
  });

  it('should return 12 keys', () => {
    const nineteen99 = Object.keys(calendar(1999)).length;
    expect(nineteen99).to.equal(12);
  });

  it('should return an Error message if user does not enter valid year length', () => {
    const nineteen99 = calendar(199);
    expect(nineteen99).to.deep.equal({
      "error": {
        "body": "invalid argument passed to `calendar('YYYY')`"
      }
    });
  });

  it('should return an Error message if user does not enter valid number', () => {
    const nineteen99 = calendar('test');
    expect(nineteen99).to.deep.equal({
      "error": {
        "body": "invalid argument passed to `calendar('YYYY')`"
      }
    });
  });
});
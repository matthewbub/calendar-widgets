/** Dependencies */
const {calendar} = require('@whilethiscompiles/calendar');
const chai = require("chai");
/** Configurations */
const expect = chai.expect;

describe("calendar", () => {
  it("should return january as the first key entry", () => {
    const nineteen99 = Object.keys(calendar(1999))[0];
    expect(nineteen99).to.equal('january');
  });

  it("should return 12 keys", () => {
    const nineteen99 = Object.keys(calendar(1999)).length;
    expect(nineteen99).to.equal(12);
  });

  

});
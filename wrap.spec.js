
const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns string if string length is less than maxLength', () => {
    expect(wrap("hello", 10)).to.equal("hello");
  })
});

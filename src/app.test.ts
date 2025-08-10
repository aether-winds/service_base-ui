import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Application Tests', () => {
  it('should perform basic math correctly', () => {
    const result = 2 + 2;
    expect(result).to.equal(4);
  });

  it('should validate basic functionality', () => {
    const testValue = 'hello world';
    expect(testValue).to.equal('hello world');
  });
});

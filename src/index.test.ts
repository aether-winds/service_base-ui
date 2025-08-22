import {expect} from 'chai';
import {describe, it} from 'mocha';
import app from './index';

describe('app', () => {
  it('should be an express application', () => {
    expect(app).to.be.a('function');
    expect(app.listen).to.be.a('function');
    expect(app.use).to.be.a('function');
  });
});

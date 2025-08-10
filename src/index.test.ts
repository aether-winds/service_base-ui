import {describe, it} from 'mocha';
import {expect} from 'chai';
import app from './index';

describe('Express Application Tests', () => {
  it('should receive a express application', () => {
    // Verify that the exported app is an Express application
    expect(app).to.be.a('function');
    expect(app.listen).to.be.a('function');
    expect(app.use).to.be.a('function');
    expect(app.get).to.be.a('function');
    expect(app.post).to.be.a('function');
  });
});

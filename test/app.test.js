const request = require('supertest');
const app = require('../app');

describe('app', () => {
  it('should server html on index', (done) => {
    request(app).get('/').expect('Content-Type', /html/).expect(200, done);
  });
});

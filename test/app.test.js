const {app} = require('../dist/server');
const chai = require('chai');
const chaiHttp = require('chai-http');

const {expect} = chai;
chai.use(chaiHttp);

describe('Server', () => {
  it('returns not found', done => {
    chai
      .request(app)
      .get('/')
      .end((_, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
  it('responds to ping with pong', done => {
    chai
      .request(app)
      .get('/ping')
      .end((_, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.eq('pong');
        done();
      });
  });
});

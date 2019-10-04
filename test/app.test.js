const {app} = require('../dist/server');
const chai = require('chai');
const chaiHttp = require('chai-http');

const {expect} = chai;
chai.use(chaiHttp);

describe('Server!', () => {
  it('returns not found', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

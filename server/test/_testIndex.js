const chai = require('chai');
const chaiHttp = require('chai-http');
const { setUpServer } = require('../src/server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Travel API', () => {
  let server;
  let request;
  beforeEach(() => {
    server = setUpServer();
    request = chai.request(server).keepOpen();
  });

  afterEach(() => {
    request.close();
  });

  describe('GET / data', () => {
    it('データベースの全データを返す', async () => {
      const res = await request.get('/data');
      expect(res).to.have.status(200);
      expect(res.body.length).to.be.equal(4);
    });
  });
});

const mocha = require('mocha')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const controller = require('../controllers/controller.api.memo')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

describe('#multiple', () => {
  it('it should return the multiple value of a & b params', () => {
    assert.equal(10, controller.multiple(5, 2))
  })
})

describe('#getAllMemos', () => {
  it('it should return all list of memos in databases', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/memos')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
  })
})

describe('#addNewMemo', () => {
  it('it should add new memo', (done) => {
    chai.request('http://localhost:3000')
      .post('/api/memos')
      .send({
        "content" : "content from testing"
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        // console.log(res.body.content);
        res.body.content.should.equal("content from testing")
        done()
      })
  })
})

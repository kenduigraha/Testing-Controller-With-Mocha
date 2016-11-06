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

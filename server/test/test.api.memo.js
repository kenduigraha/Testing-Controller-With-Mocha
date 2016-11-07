const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

/*
  * will test GET /api/memos
  * should return (200) status code
  ** must be in format JSON
*/
describe('#getAllMemos', () => {
  it('it should return all list of memos in databases', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/memos')
      .end((err, res) => {
        res.should.be.json
        res.should.have.status(200)
        done()
      })
  })
})
/*
  * will test POST /api/memos
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (POST)
*/
describe('#addNewMemo', () => {
  it('it should add new memo', (done) => {
    chai.request('http://localhost:3000')
      .post('/api/memos')
      .send({
        "content" : "content from testing"
      })
      .end((err, res) => {
        res.should.be.json
        res.should.have.status(200)
        // console.log(res.body.content);
        res.body.content.should.equal("content from testing")
        done()
      })
  })
})
/*
  * will test PUT /api/memos/:id
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (PUT)
*/
describe('#updateAMemo', () => {
  /*
    * will update the value data of index in database
    * change the res.body index to test
    * make sure there's data in database on specific index
  */
  let index = 0
  it('it should update a specific memo', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/memos')
      .end((err, res) => {
        // console.log(res.body[0]._id);
        chai.request('http://localhost:3000')
          .put('/api/memos/'+res.body[index]._id)
          .send({
            "content" : "new content from testing"
          })
          .end((err, respond) => {
            // console.log(respond.body);
            respond.should.have.status(200);
            respond.should.be.json;
            respond.body.content.should.equal("new content from testing")
            done()
          })
      })
  })
})
/*
  * will test DELETE /api/memos
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that deleted (DELETE)
*/
describe('#deleteAMemo', () => {
  /*
    * will delete the value data of index in database
    * change the res.body index to test
    * make sure there's data in database on specific index
  */
  let index = 0
  it('it should delete a specific memo from database', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/memos')
      .end((err, res) => {
        console.log(res.body[index].content);
        chai.request('http://localhost:3000')
          .delete('/api/memos/'+res.body[index]._id)
          .end((err, del_res) => {
            del_res.should.have.status(200);
            del_res.should.be.json;
            del_res.body.content.should.equal(res.body[index].content)
            done()
          })
      })
  })
})

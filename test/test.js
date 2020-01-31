var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);

describe('APPLICATION REQUESTS', () => {
    it('The welcome page SHOULD respond with 200', (done) => {
        chai.request(server).get('/').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })
    })

    it('The Welcome Page Should be of Type text/html', (done) => {
        chai.request(server).get('/users').end((err, result) => {
            result.should.have.html
            done(err)
        })
    })
})
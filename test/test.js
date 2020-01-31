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

describe('API TESTS', () => {
    it('Should respond with 200', (done) => {
        chai.request(server).get('/api/V1').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })
    })
    it('Should be of type JSON', (done) => {
        chai.request(server).get('/api/v1').end((err, result) => {
            result.should.have.json
            done(err)
        })
    })

})

describe('API AUTH LINKS', () => {
    it('Login should accept post requests', done => {
        chai.request(server).post('/api/v1/login').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })

    })

    it('Register should accept post requests', done => {
        chai.request(server).post('/api/v1/register').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })

    })

    it('Password Reset should accept post requests', done => {
        chai.request(server).post('/api/v1/password/reset').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })

    })
})

describe('API POSTS', () => {
    it('Should accept a get request for all posts', done => {
        chai.request(server).post('/api/v1/posts').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })

    })

    it('Should accept a get request for a particular post', done => {
        chai.request(server).post('/api/v1/posts/slug').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })

    })
})
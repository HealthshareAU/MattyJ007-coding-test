const request = require('supertest');
const expect = require('chai').expect;


describe('test server', function () {
    let server;

    beforeEach(function () {
        server = require('./server.js');
    });

    afterEach(function () {
        server.close();
    });

    it('responds to /api/home/', (done) => {
        request(server).get('/api/home/').expect(200, done);
    });

    it('404 other urls', (done) => {
        request(server).get('/should404').expect(404, done);
    });

    it('returns a user', (done) => {
        const user = {
            firstName: 'Jimmy',
            email: 'jimmy@gmail.com',
            password: 'iamnotfondoficecream1234',
        };
        request(server).get('/api/get-user/2').expect(200).end((err, res) => {
            if (err) return done(err);
            expect(res.body.user.firstName).to.equal(user.firstName);
            expect(res.body.user.email).to.equal(user.email);
            expect(res.body.user.password).to.equal(user.password);
            done();
        });
    });

    it('does not return user if user does not exist', (done) => {
        request(server)
            .get('/api/get-user/1')
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                expect(Object.keys(res.body).length).to.equal(1);
                done();
            });
    });

    it('posts a user', (done) => {
        const user = {
            firstName: 'Timmy',
            email: 'Timmy@gmail.com',
            password: 'password123',
        };
        request(server).post(
            '/api/users/'
        ).type('application/json').send(user).expect(200).end((err, res) => {
            if (err) return done(err);
            expect(res.body.message).to.equal('User created successfully');
            done();
        });
    });

    it('returns 400 for invalid user data - missing firstName', (done) => {
        const invalidUser = {
            firstName: '',
            email: 'valid@gmail.com',
            password: 'long-enough-password',
        };
        request(server)
            .post('/api/users/')
            .type('application/json')
            .send(invalidUser)
            .expect(400, done);
    });

  it('returns 400 for invalid user data - invalid email', (done) => {
      const invalidUser = {
          firstName: 'Test',
          email: 'invalid-email',
          password: 'long-enough-password',
      };
      request(server)
          .post('/api/users/')
          .type('application/json')
          .send(invalidUser)
          .expect(400, done);
    });

    it('returns 400 for invalid user data - short password', (done) => {
      const invalidUser = {
          firstName: 'Test',
          email: 'valid@gmail.com',
          password: 'short',
      };
      request(server)
          .post('/api/users/')
          .type('application/json')
          .send(invalidUser)
          .expect(400, done);
    });
});

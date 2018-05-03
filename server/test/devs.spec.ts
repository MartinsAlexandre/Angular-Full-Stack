import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import devModel from '../models/devModel';

const should = chai.use(chaiHttp).should();

describe('devs', () => {

  beforeEach((done) => {
    devModel.remove({}, (err) => {
      done();
    });
  });

  describe('Backend tests for devs', () => {

    it('should get all the devs', (done) => {
      chai.request(app)
        .get('/api/devs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get devs count', (done) => {
      chai.request(app)
        .get('/api/devs/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new dev', (done) => {
      const newDev = new devModel({ name: 'Fluffy', weight: 4, age: 2 });
      chai.request(app)
        .post('/api/dev')
        .send(newDev)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('name');
          res.body.should.have.a.property('weight');
          res.body.should.have.a.property('age');
          done();
        });
    });

    it('should get a dev by its id', (done) => {
      const newDev = new devModel({ name: 'dev', weight: 2, age: 4 });
      newDev.save((error, newdev) => {
        chai.request(app)
          .get(`/api/dev/${newdev.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('weight');
            res.body.should.have.property('age');
            res.body.should.have.property('_id').eql(newdev.id);
            done();
          });
      });
    });

    it('should update a dev by its id', (done) => {
      const newDev = new devModel({ name: 'dev', weight: 2, age: 4 });
      newDev.save((error, newdev) => {
        chai.request(app)
          .put(`/api/dev/${newdev.id}`)
          .send({ weight: 5 })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a dev by its id', (done) => {
      const newDev = new devModel({ name: 'dev', weight: 2, age: 4 });
      newDev.save((error, newdev) => {
        chai.request(app)
          .delete(`/api/dev/${newdev.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});



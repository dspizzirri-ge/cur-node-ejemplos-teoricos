const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../src/tdd');

chai.use(chaiHttp);
chai.should();

describe('Pruebas HTTP', ()=>{
    describe('GET /', ()=>{
        it('deberia obtener todos los alumnos', (done)=>{
           chai.request(app)
            .get('/')
            .end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a({});
                done();
            });
        });
    });
});
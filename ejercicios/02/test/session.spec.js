const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Sessiones', () => {

    it('Inicio de session', (done) => {

        chai.request(app)
            .post('/session/login')
            .send({ username: "spizzirri", password: 123456 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res).to.have.cookie('MELI');
                expect(res.body).to.have.property('role');
                expect(res.body.role).to.equals('admin');
                done();
            });
    });

    it('Cierre de session exitoso', (done) => {

        const agent = chai.request.agent(app);

        agent.post('/session/login')
            .send({ username: "spizzirri", password: 123456 })
            .then(function (res) {
                agent.get('/session/logout')
                    .then(function (res2) {
                        expect(res2.body.msj).to.equals('Session destruida');
                        expect(res2).to.have.status(200);
                        done();
                    })
            })
    });
});
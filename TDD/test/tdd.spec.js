const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../src/tdd');

chai.use(chaiHttp);
let expect = chai.expect;

describe('Pruebas HTTP', () => {
    describe('GET /', () => {
        it('No deberia obtener datos', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(JSON.stringify(res.body)).to.equal("{}");
                    done();
                });
        });

        it("Deberia obtener los alumnos de la materia 'Algebra' de la catedra '2190'", (done) => {
            chai.request(app)
                .get('/materia/algebra/2190')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('materia').to.be.equal('algebra');
                    expect(res.body).to.have.property('curso').to.be.equal('2190');
                    expect(res.body).to.have.property('horasSemanales').to.not.be.NaN;
                    expect(res.body).to.have.property('horasSemanales').to.be.least(1);
                    expect(res.body).to.have.property('profesorTitular').to.not.be.null;
                    done();
                });
        });
    });
});
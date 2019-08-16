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

        it("", () => {

            expect(4).to.be.a('number');
            expect(4).not.to.be.a('string');
            expect(2000).to.have.least(1900);
            expect(2000).to.equal(2000);

            expect(function () { }).to.not.throw();
            expect({ a: 1 }).to.not.have.property('b');
            expect([1, 2]).to.be.an('array').that.does.not.include(3);
            expect(2).to.equal(2); // Recommended
            expect(2).to.not.equal(1); // Not recommended
            expect({ a: { b: ['x', 'y'] } }).to.have.nested.property('a.b[1]');
            expect({ a: { b: ['x', 'y'] } }).to.nested.include({ 'a.b[1]': 'y' })

        });
    });
});
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('CRUD a la base de datos', () => {

    it('Debe traer un array con 6 elementos', (done) => {

        chai.request(app)
            .get('/resultados')
            .end((err, res) => {
                expect(res.body.rows.length).equals(6);
                done();
            });
    });

});
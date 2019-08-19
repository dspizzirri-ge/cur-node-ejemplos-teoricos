const chai = require('chai');
const chaiSpies = require('chai-spies');
const { checkCookie } = require('../middlewares/checkuser');

chai.use(chaiSpies);
const expect = chai.expect;

describe('Validacion de session por cookie', () => {

    it('debe ejecutarse la funcion next() cuando el rol es "admin"', () => {

        const req = { session: { role: "admin" } }
        const res = {};
        const next = function () { }
        const spy = chai.spy(next);

        checkCookie(req, res, next);

        expect(spy).to.have.been.called;
    });


    it('debe retornar un mensaje de error y el codigo 401 si el rol no es "admin"', () => {

        const req = { session: { role: "guest" } };
        const res = { status: function (cod) { }, json: function (json) { } };
        const next = function () { };
        const spy = chai.spy(res.status);

        checkCookie(req, res, next);

        expect(spy).to.have.been.called;
    });
});
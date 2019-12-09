const assert = require('assert')
const Math = require('./math')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Math class', function () {
    let value = 1;
    this.beforeEach(function () {
        value = 1;
    })

    const math = new Math();
    it('sum two numbers', function (done) {
        this.timeout(3000)
        math.sum(3, 4, (value) => { expect(value).to.equal(7); done() })
        //math.sum(3, 4, (value) => { assert.equal(value, 7); done(); })

    })

    it('mult tow numbers', function () {
        expect(math.mult(value, 3)).to.equal(3)
    })

    it('objeto', function () {
        const obj = { name: 'alexandre jose' }
        const obj2 = { name: 'alexandre jose' }
        const obj3 = obj
        expect(obj).to.deep.equal(obj2)
        expect(obj).to.equal(obj3)
        expect(obj).to.have.property('name').equal('alexandre jose')
    })

    it.only('Calls', function () {
        const req = {}
        const res = {
            load: sinon.spy()
        }

        math.printSum(req, res, 5, 5)
        expect(res.load.args[0][0]).to.equal('index')
        expect(res.load.calledOnce).to.be.true
    })

    //retorna somente um teste
    // it.only('test', function () {
    //     assert.equal(math.test(), 'test')
    // })
})
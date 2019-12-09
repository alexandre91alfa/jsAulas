const assert = require('assert')
const Math = require('./math')

describe('Math class', function () {
    it('sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000)
        math.sum(3, 4, (value) => { assert.equal(value, 7); done(); })
    })
})
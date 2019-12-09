class Math {

    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 200)
    }

    mult(a, b) {
        return a * b
    }

    test() {
        return 'test'
    }

    printSum(req, res, a, b) {
        res.load('index', a + b)
    }
}

module.exports = Math


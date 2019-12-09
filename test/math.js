class Math {

    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 2000)
    }
}

module.exports = Math


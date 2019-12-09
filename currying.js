function soma(a) {
    return function (b) {
        return a + b
    }
}

const sum = soma(2);

console.log(sum(2))
console.log(sum(3))
console.log(sum(4))
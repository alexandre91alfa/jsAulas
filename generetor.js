function* hello() {
    console.log('hello')
    yield
    console.log('from')
    yield
    console.log('function')
}

const it = hello()

hello()
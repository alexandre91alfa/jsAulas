function fn() {
    log('acima')

    function log(value) {
        console.log(value)
    }

    log('abaixo')
}

fn();
const { Console } = require('console');

const assert = require('assert').strict;

function abs(value) {
    for (let item of array){
        if (item<0){
            item=item*(-1)
        }
    console.log("valor absoluto: "+ item)
    }
}

assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)
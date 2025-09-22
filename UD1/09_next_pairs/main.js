const assert = require('assert').strict;
let ParInferior=0
let ParSuperior=0
function nextPairs(value) {
    if (value % 2 === 1) {
        return [value-1, value+1]
    } else {
        return [value-2, value+2]
    }
    }
    


}

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])
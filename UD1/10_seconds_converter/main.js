const assert = require('assert').strict;
let horas = 0
let minutos = 0 
function toHoursMinutesSeconds(value) {
    if (value<=3600){
        horas++
    } else if (value<=60){
        minutos++
    }
    return value
    
}
console.log(horas+':'+minutos+':'+value+':')
assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:20:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:20:5")
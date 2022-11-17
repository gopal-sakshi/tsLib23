var decrypt23 = require('./encrypt_decrypt/decrypt23');
var encrypt23 = require('./encrypt_decrypt/encrypt23');
var encode_decode = require('./encrypt_decrypt/encode_decode');
var mathsUtil = require('./maths23/math_util23');
var mathsMisc = require('./maths23/math_misc23');
// // APPROACH I
// const entryFile_to_libr99 = {
//     decrypt23,
//     encrypt23,
//     encode_decode,
//     mathsUtil
// }
// module.exports = entryFile_to_libr99

// APPROACH II 
module.exports = {
    decrypt23,
    encrypt23,
    encode_decode,
    mathsUtil,
    mathsMisc
}

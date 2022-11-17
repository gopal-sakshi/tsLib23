// export const encodeBase64 = (data:string) => {
//     return Buffer.from(data).toString('base64');
// }
// export const decodeBase64 = (data:string) => {
//     return Buffer.from(data, 'base64').toString('ascii');
// }


function encodeBase64 (data:string):string {
    return Buffer.from(data).toString('base64');
}
function decodeBase64 (data:string):string {
    return Buffer.from(data, 'base64').toString('ascii');
}

module.exports = {
    encodeBase64,
    decodeBase64
}
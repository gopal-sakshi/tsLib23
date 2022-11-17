// APPROACH I  ==========> using export function            // not working

// export function generateRandom(min:number, max:number) {
//     return ((Math.random() * (max-min)) + min);
// }

// export const randomZeroToOne = () => Math.random()


// APPROACH II ====> reverting to module.exports
function generateRandom(min:number, max:number) {
    return ((Math.random() * (max-min)) + min);
}

const randomZeroToOne = () => Math.random()

module.exports = {
    generateRandom,
    randomZeroToOne
}

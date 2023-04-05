// const index23 = require('./lib_compiledJs/entryFile_to_libr99');
// console.log(index23.encrypt23('gopal'));
/****************************************************************************/
var movie23 = {
    title: "baahubali",
    hero: "prabhas"
}
/****************************************************************************/
const arr23 = (n1, n2) => n1 * n2;
arr23(4,5);
/****************************************************************************/
class Person23 {
    constructor(param1, param2, param3) { this.firstName = param1; this.lastName = param2; this.age = param3 };
    firstName; lastName; age;
    getFullName1 = function firstLast() {
        return this.firstName + this.lastName
    }
    getFullName2 = (salutation) => salutation + this.firstName + this.lastName;
}

const p1 = new Person23('Karim', "Benz", 33);
console.log(p1.getFullName1());
console.log(p1.getFullName2('Mr '));
/****************************************************************************/
function encrypt(input:string) {
    console.log(input);
    var encryptedInput = btoa(input);
    console.log(encryptedInput);
    return encryptedInput;
}

module.exports = encrypt
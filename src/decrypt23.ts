function decrypt(input:string) {
    console.log(input);
    var decryptedInput = atob(input);
    console.log(decryptedInput);
    return decryptedInput;
}

module.exports = decrypt
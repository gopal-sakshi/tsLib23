function decrypt(input:string) {    
    var decryptedInput = atob(input);    
    return decryptedInput;
}

module.exports = decrypt
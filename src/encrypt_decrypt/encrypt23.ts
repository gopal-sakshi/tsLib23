function encrypt(input:string) {    
    var encryptedInput = btoa(input);    
    return encryptedInput;
}

module.exports = encrypt
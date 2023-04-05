exports.printDivisors = (num1:number) => {
    console.log('testing babel console plugin');
    var divisors = [];
    for (var i=1; i<=num1; i++) {
        if (num1 % i == 0) divisors.push(i);
    }
    return divisors;
}

exports.decimalToHex = (num1:number) => num1.toString(16);

// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
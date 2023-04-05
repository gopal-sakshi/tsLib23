// No type checking in babel
const myCoolString : string = 9;                // babel wont throw ERROR, but tsc does

/****************************************************************************************************/
// old versions of babel dont support const enums because
    // TypeScript by default compiles an entire project at once, 
    // while Babel only compiles one file at a time.
/****************************************************************************************************/

// Babel excels at custom transformations
    // plenty of plugins --> optimize code, strip unused imports/constants
    // see babel console plugin (dist_babel23/maths23/math_misc23.js)
/****************************************************************************************************/

// It depends on "target" property in tsconfig; 
    // if set to es5, it tsc transpiles arrowFns
    // it set to ESNext, it will retain arrowFns & other ES6 features
var checkIfTscUsesArrow = (str1:string, str2:string) => str1 + str2;
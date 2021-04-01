// Problem 1 - JavaScript literals
let numericalLiteral = 5;
let stringLiteral = 'This is the value of the string literal.';
let stringTemplateLiteral = `This is string
template
literal.`;
let booleanLiteral = true;
let objectLiteral = {
    testProperty: 'test'
};
let objectLiteralAsArray = [1,2,'test',true]; // Array is also an object.


// Problem 2 - Quoted text
let quotedText = 'Trying to quote "part" of a string.';

// Problem 3 - Typeof variables
typeof(numericalLiteral); // returns type 'number'
typeof(stringLiteral); // returns type 'string'
typeof(stringTemplateLiteral); // returns type 'string'
typeof(booleanLiteral); // returns type 'boolean'
typeof(objectLiteral); // returns type 'object'
typeof(objectLiteralAsArray); // returns type 'object'

// Problem 4 - Typeof null
let undefinedVariable; // = let undefinedVariable = undefined. Undefined is a type in js, every variable is considered 'undefined' before it's assigned a value.
let nullVariable = null; // null if checked returns type object, but technically is of type 'null'.
typeof(undefinedVariable); // returns type 'undefined'
typeof(nullVariable); // returns type 'object'

// Problem 5 - Parsing numbers
let str1234 = '1234';
parseInt(str1234); // returns the string as the number type 1234.
parseFloat(str1234); // returns the string as the number type 1234.
Number(str1234); // returns the string as the number type 1234.
+str1234; // returns the string as the number type 1234.
str1234 | 0; // returns the string as the number type 1234.

let str1238abc = '1238abc';
parseInt(str1238abc); // returns the number 1238.
parseFloat(str1238abc); // returns the number 1238.
Number(str1238abc); // returns NaN.
+str1238abc; // returns NaN.
str1238abc | 0; // returns 0 as number.

let str0dot15 = '0.15';
parseInt(str0dot15); // returns 0 as number.
parseFloat(str0dot15); // returns the number 0.15.
Number(str0dot15); // returns the number 0.15.
+str0dot15; // returns the number 0.15.
str0dot15 | 0; // returns 0 as number.

let str3dot14ivan = '3.14ivan';
parseInt(str3dot14ivan); // returns 3 as number.
parseFloat(str3dot14ivan); // returns the number 3.14.
Number(str3dot14ivan); // returns NaN.
+str3dot14ivan; // returns NaN.
str3dot14ivan | 0; // returns 0 as number.

let strInfinity = 'Infinity';
parseInt(strInfinity); // returns NaN.
parseFloat(strInfinity); // returns Infinity as number.
Number(strInfinity); // returns Infinity as number.
+strInfinity; // returns Infinity as number.
strInfinity | 0; // returns 0 as number.

let str9s = '99999999999999999999';
parseInt(str9s); // returns the number 100000000000000000000.
parseFloat(str9s); // returns the number 100000000000000000000.
Number(str9s); // returns the number 100000000000000000000.
+str9s; // returns the number 100000000000000000000.
str9s | 0; // returns the number 1661992960.
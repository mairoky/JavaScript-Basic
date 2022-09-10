// variable declaration
/*
Data Type:
    Primitive
        String
        Number
        Boolean
        Undefined
        Null
    Non-pritive
        Array
        Object
*/
// string
var fullName = 'Mark Rieon';
console.log(fullName);
// number
var age = 30;
console.log(age);
// boolean
var isStudent = false;
console.log(isStudent);
// undefined
var job;
console.log(job);
job = 'Full Stack Developer';
console.log(job);

/*
Variable Naming Convension
    1. can’t use a number as the first character, first character must be a letter or an underscore (_)
    2. can’t use any other characters, including spaces, symbols, and punctuation marks
    3. variable names are case sensitive
    4. can’t use one of JavaScript’s reserved words as a variable name
*/

// variable mutation
age = 35;
console.log(age);
age = 'thirty one';
console.log(age);
// Type Coercion
var firstName = 'Mark';
var lastName = 'Hardy';
var isSingle = true;
console.log(firstName + ' ' + lastName + ' ' + age + ' years old.' + ' Is he single: ' + isSingle);


// boolean logic
/*
AND -> && => true if all are true
OR -> || => true if one is true
NOT -> ! => inverts true/false value
*/

var age = 30;
if(age <= 13){
    console.log('Boy!');
} else if (age >= 14 && age <= 20) {
    console.log('Teenager!');
} else if(age >= 21 && age <= 30) {
    console.log('Young Man!');
} else {
    console.log('Man!');
}
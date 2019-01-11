//
var LOANAMET=parseInt(prompt("Enter your outstanding loan amount"));
var NUMMONTHS=parseInt(prompt('How many months do you want it paid?'));
var payments= Math.round(LOANAMET/NUMMONTHS);
console.log("To pay of a loan of "+LOANAMET+ " it will take "+NUMMONTHS +" months");
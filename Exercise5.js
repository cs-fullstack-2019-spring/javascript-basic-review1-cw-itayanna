// tells how much you have to pay a month for the loan
var LOANAMET=parseInt(prompt("Enter your outstanding loan amount"));
var NUMMONTHS=parseInt(prompt('How many months do you want it paid?'));
var payments= Math.round(LOANAMET/NUMMONTHS);
console.log("To pay off a loan of "+LOANAMET+ " in "+NUMMONTHS +" months, you will need to pay "+payments+" dollars every month");
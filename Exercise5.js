// tells how much you have to pay a month for the loan
do {
    var LOANAMET=parseInt(prompt("Enter your outstanding loan amount"));
}while (isNaN(LOANAMET));
do {
    var NUMMONTHS=parseInt(prompt('How many months do you want it paid?'));
}while (isNaN(NUMMONTHS));

var payments= Math.round(LOANAMET/NUMMONTHS);
console.log("To pay off a loan of "+LOANAMET+ " in "+NUMMONTHS +" months, you will need to pay "+payments+" dollars every month");
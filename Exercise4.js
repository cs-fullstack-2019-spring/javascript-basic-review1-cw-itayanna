// converts temp into celcius

do {
    var FTEMP=parseInt(prompt("what is the Fahrenheit Temp?"));
}while (isNaN(FTEMP));
var CTEMP =parseInt(Math.round((FTEMP - 32) * 5 / 9));
console.log(FTEMP+' Fahrenheit = '+CTEMP+" in Celcius");



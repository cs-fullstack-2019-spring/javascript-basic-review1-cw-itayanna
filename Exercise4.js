// converts temp into celcius
var FTEMP=parseInt(prompt("what is the Fahrenheit Temp?"));
var CTEMP =parseInt(Math.round((FTEMP - 32) * 5 / 9));
console.log(FTEMP+' Fahrenheit = '+CTEMP+" in Celcius");

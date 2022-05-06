//Simple Calculator Program.
let operator = prompt("Enter an operator either +,-,*,/ or %");
let n1 = Number(prompt("Enter first number"));
let n2 = Number(prompt("Enter second number"));
let result;
if (operator === '+') {
   console.log(result = n1 + n2);   
}
else if (operator === '-') {
   console.log(result = n1 - n2);
}
else if(operator === '*'){
   console.log(result = n1 * n2);
}
else if (operator === '/') {
     console.log(result = n1 / n2);
}
else if (operator === '%') {
    console.log(result = n1 % n2);
}
else {
    console.log('Refresh the page and enter the valid operator');
}
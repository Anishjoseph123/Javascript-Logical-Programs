//5.  To find whether a given three digit number is an Armstrong Number or not.

let sum = 0;
let num = Number(prompt("Enter a three digit number"));      //147
let temp = num;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}
if (sum === num) {
    console.log(`${num} is an Armstrong Number`);
}
else {
    console.log(`${num} is not an Armstrong Number`);   ///147 is not an Armstrong number.
}

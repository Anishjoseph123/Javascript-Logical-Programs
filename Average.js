//To find average of the numbers present in an array.

let arr = [10, 20, 55, 35];
let avg;
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}
avg = sum / arr.length;
console.log(avg);
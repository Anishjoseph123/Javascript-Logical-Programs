let array = [12, 2, 34, 13, 11, 9, 4, 18];
for (let i = 1; i < array.length; i++){
    for (let j = 0; j < i; j++){
        if (array[i] < array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);

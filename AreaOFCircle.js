//3. Area of a Circle. A=π*r*r

 let radius = Number(prompt("Enter the value of radius")); //1
 let area = Math.round(Math.PI * Math.pow(radius, 2));
console.log(`The Area of the given Circle is:${area}`);

//The Area of the given Circle is:12.566370614359172(without using Math.round()).
//The Area of the given Circle is:50(By using Math.round())

//2. Alphabetical order

function AlphabeticalOrder(str) {
  console.log(str.split("").sort().join(""));
}
AlphabeticalOrder("Fish");
//Output:
//split("")->["F","i","s","h"]
//sort()->["F","h","i","s"]
//join()->Fhis

//7. Converting an Array into an Object.
let array = [
    ["id",1],["name","anish"],["salary",2000]
]
console.log(Object.fromEntries(array)); // object: id:1,name:"anish",salary:2000
                                //OR 
                                
let emp = {
    ename: "James",
    eid:23444
}
console.log(Object.assign({}, emp));
 console.log({...emp});

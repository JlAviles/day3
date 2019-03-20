//first iteration, this is wrong because we don't want to name each object (imagine an API fetch with 3000 results!!!)

const bob = { name: "Bob", age: 17 };
const susy = { name: "Susy", age: 18 };
const ted = { name: "Ted", age: 18 };
const sarah = { name: "Sarah", age: 20 };
const bill = { name: "Bill", age: 19 };

//second iteration, correctly done!!

var names = [
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
]

console.log(names[1]["name"])
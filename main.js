import HashMap from "./HashMap.js";


const test = HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('moon', 'silver')
test.set('sasd', 'silver')

// console.log(test.buckets);
// test.clear();
// console.log(test.has('apple'));
console.log(test.entries())

// console.log(test.length())

// console.log(test.toString())
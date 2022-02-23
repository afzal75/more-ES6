// 1. let and const
const hubby = 'Cricket';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';

// default parameter & spread operators
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3.template string
const myNotes = `I am mojnu of ${hubby}`;

// 4.array function
function square (x){
    return x * x;
}
const square = x => x * x;
console.log(square(8));
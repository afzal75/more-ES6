// declare variable based on the name of an object property

const myObject = {x: 2, y: 50, z: 600, a: 25, b: 68};
const {x, b} = myObject;
// console.log(x, b);

// destructuring array

const [p, q] = [45, 37];
// console.log(p, q);


const [best, faltu] = [99, 20];
// console.log(best, faltu);

const {sky, color, money} = {sky: 'blue', soil: 'matti', color: 'money', money: 500};


// chaining 

const company = {
    name: 'GP', 
    ceo: {id: 1, name: 'ajmol', food: 'fucka'},
    web: {
        work: 'website development', 
        employee: 22, 
        framwork: 'react',
        tech: {
            first: 'html', 
            second: 'css', 
            third: 'js'
        }
}
};

console.log(company.web.tech.third);
console.log(company?.backend?.tech.third);
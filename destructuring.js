const fish = {id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555', address: 'chandpur', dress: 'silver'};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const {phone, price, dress, id} = fish;

// console.log(phone,price);
// console.log(phone,dress);
// console.log(phone,id);
// console.log(phone);
// console.log(phone,price);



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

// const work = company.web.work;
// const framwork = company.web.framwork;

// shortcut way

const {work, framwork} = company. web;
const {food} = company. ceo;
const {second, third} = company.web.tech;
console.log(work, framwork, food, second, third);
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);


const products = [
    {name: 'water bottole', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 3, color: 'white'}
];
const productsName = products.map(product => product.name);
const productsPrice = products.map(productPrice => productPrice.price);
// products.map(products => console.log(products));
products.forEach(products => console.log(products));
// console.log(productsName);
// console.log(productsPrice);
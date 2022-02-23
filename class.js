class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD'
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSesson(){
        console.log(this.name, 'start a support sesson');
    }
}

const aamir = new Support('Amir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
aamir.startSesson();
salman.startSesson();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman);
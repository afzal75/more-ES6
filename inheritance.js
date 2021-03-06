class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD'
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}



class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime = time;
    }
    startSesson(){
        console.log(this.name, 'start a support sesson');
    }
}


class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine', student);
    }
}


class NeptuneDev extends TeamMember{
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor){
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'Release app version', version);
    }
}

const aamir = new Support('Amir Khan', 'BD', 11);
const salman = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SRK Khan', 'Dubai', 9);
const akshay = new Support('Akshay Kumar', 'Dubai', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev ('Ash', 'Mumbai', 'Android Studio');

ash.releaseApp('1.4.5');
console.log(ash);


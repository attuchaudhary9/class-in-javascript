
//parent class
class Person {
    constructor(_name,_age){
        this.name =  _name;
        this.age = _age;
    }
    describe (){
        return console.log(`Name is ${this.name} and age is ${this.age}`);
    }
}

//child class 

class Programmer extends Person {
    constructor(_name,_age,_yearsOfExperience){
        super(_name,_age,);

        this.yearsOfExperience = _yearsOfExperience;
     }

     describeProgrammer (){
         return console.log(`Programmer is ${this.name} and he has ${this.yearsOfExperience}`)
     }
}


const programmerOne = new Programmer('Atif',23,2);

programmerOne.describe()
programmerOne.describeProgrammer()

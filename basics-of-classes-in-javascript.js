class Demo{
    constructor(_name,_age){
        //a constructor is called once at a object life cycle
        console.log('Constructor is called');
        this.age = _name;             /** variable initialization */
        this.name = _name;
    }

    //method creations 
    getInfo(){
      return  console.log('Name is: '+ this.name + ' you age is: '+ this.age);
    }
}



const newDemo = new Demo('Atif Ali',23);

// newDemo.getInfo()

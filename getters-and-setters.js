class Square {
    
    
    constructor (_width){
        this.num = 0
        this.width = _width;
        this.height = _width;
    }


    //get area of the square
    get area (){
        this.num = this.num +1;
        return this.width * this.height;
    }

    get howManyTimesGetCalled (){
        return this.num;
    }
    // set area
    set area (area){
        this.width = Math.sqrt(area);     /** Math.sqrt convert square of a number into a number like 625 convert into 25 */
        this.height = this.width;
    }
}


//---------------------------------------------------------------------------------
const sqr1 = new Square (4);

console.log(sqr1.area)
console.log(sqr1.area)

console.log(sqr1.howManyTimesGetCalled)
//---------------------------------------------------------------------------------
console.log('Square two')
const sqr2 = new Square (2);

console.log(sqr2.area)
console.log(sqr2.area)


console.log(sqr2.howManyTimesGetCalled)

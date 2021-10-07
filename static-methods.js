class Square {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static isValidWidthAndHeightForSquare(width, height){
        return width === height;
    }
}

const res = Square.isValidWidthAndHeightForSquare(4,5)

console.log(res);
/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

class Circle {
    constructor (number, r){
        this.number = number;
       
        //should store radius
        this.r = number;

        //should handle invalid radius
        if (this.r <= 0) {
            throw new Error ("Invalid radius")
        }
    }
        
    //should calculate perimeter
    getPerimeter (number){
        return this.number*2*Math.PI;
    }
        
    // should calculate ares
    getArea(number){
        return Math.pow(this.number, 2) * Math.PI;
    }

}

module.exports = Circle;
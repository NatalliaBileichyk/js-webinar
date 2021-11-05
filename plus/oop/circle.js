/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

class Circle {
    constructor (r){
        //should store radius
        this.r = r;

        //should handle invalid radius
        if (this.r <= 0) {
            throw new Error ("Invalid radius")
        }
    }
        
    //should calculate perimeter
    getPerimeter (){
        return this.r*2*Math.PI;
    }
        
    // should calculate ares
    getArea(){
        return Math.pow(this.r, 2) * Math.PI;
    }

}

module.exports = Circle;
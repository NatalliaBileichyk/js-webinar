/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */

function properties (o) {
    // should handle if parameter is not object

    // if (typeof o !== "object") {return 0} - doesn't work. WHY?
    // if (!o) {return 0}
    if (!Object.keys(o)) {
        return 0
    }

    // should return properties of the object
    return Object.keys(o);
    
}
module.exports = properties;
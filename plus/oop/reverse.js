/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */
git
function reverse(o) {
    // it("should handle if not object is passed")
    if (typeof o !== "object") {
        throw new Error ("No object is passed")
    }
    
    // it("should not modify original object")
    const newObject = Object.assign({}, o);
    
    // it("should reverse object")
    // it("should handle duplicate")
    const objectEntries = Object.entries(newObject);     
    const reverseKeyValue = objectEntries.map(([key, value]) => [value, key]);

    return Object.fromEntries(reverseKeyValue)
}

module.exports = reverse;
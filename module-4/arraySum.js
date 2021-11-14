/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum (elements){
    if (!Array.isArray(elements) || elements.length === 0) {
        return 0
    }
    
    return elements.reduce((sum, el) =>{
        if (typeof el === 'number') {
            return sum + el}
        if (Array.isArray(el)){
            return sum + arraySum (el)
        } 
         return sum
       
    }, 0)
}
module.exports = arraySum;
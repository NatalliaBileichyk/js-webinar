/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum (elements){
    let sum = 0;

    for (let i in elements){ 
        if (typeof elements[i] == 'number'){
            sum += elements[i]
        } 
        
        if (typeof elements[i] == 'object'){
            sum += arraySum (elements[i])
        } else {
            sum
        }
    }
        
    return sum;
}

module.exports = arraySum;
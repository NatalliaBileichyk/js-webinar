/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */
function arrayEqual (first, second){

    if (first.length !== second.length) { 
        console.warn (`The length is not equal: first array is ${first.length}, second array is ${second.length}`)
        return false
    }
     
    for (let i = 0; i < first.length; i++){
        
        if (typeof first[i] !== "object" && typeof second[i] !== "object" ){
                if (first[i]!== second[i]){
                    console.warn("first["+ [i] + "]: " + first[i] + " is not equal to " + "second[" + [i] + "]: " + second[i])
                    return false                                      
                }                
        } else {
            if (typeof first[i] == "object" && typeof second[i] == "object" ){
                return arrayEqual(first[i], second[i]);
            } else {
                console.warn ("Arrays are different: only one array contains nested array")
                return false
            }
            
        }     
        
    }

    console.log ("First Array is equal to Second")
    return true

} 

module.exports = arrayEqual;
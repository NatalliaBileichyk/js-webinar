/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString (strings){
    let longest = "";
        
    if (typeof strings === "object") {
        let newArray = strings.filter(el => typeof el === 'string' || typeof el === 'object');
            
            for (let i in newArray){
                if (typeof newArray[i] === 'object'){
                   longestString(newArray[i])
                }
                
                if (longest.length < newArray[i].length){
                    longest = newArray[i]
                } else if (longest.length === newArray[i].length){
                    let sortArray = [longest, newArray[i]];
                    longest = sortArray.sort()[0];
                } else {
                    longest = longest
                }
            }
    } else {
        longest = ""
    }
    
    return longest;
}

module.exports = longestString;
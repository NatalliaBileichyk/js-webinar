/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
const arrayEqual = require('./arrayEqual.js');

function arraySorted (items, ignore){
    let regexp = new RegExp( ((ignore === undefined) ? "": "[" + ignore + "]*") + "\\s*", "g")
    let modifiedArray = []

    if (!Array.isArray(items)){
       return false
    }

    for (let i in items){
        if (Array.isArray(items[i])){
            arraySorted (items[i], ignore)
        }

        if (typeof items[i] === "string"){        
           modifiedArray[i] = items[i].replace(regexp, "").split("")
                                      .filter(el => (el !== ""))
                                      .join("")
                                      .toLowerCase()
        } else {modifiedArray[i] = items[i]}
        
    }
             
    let secondArray = modifiedArray.slice().sort(); 
    return arrayEqual(modifiedArray, secondArray)

}
module.exports = arraySorted;
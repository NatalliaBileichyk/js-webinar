/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

function romanToDec (roman){
    let romDecEqual = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    if (typeof roman !== "string"){
        throw new Error (`Roman is a ${typeof roman}, not a string`)
    }

    let sum = 0;
    let newArray = roman.toUpperCase().split('');

        for (let el = 0; el < newArray.length; el++ ) {
 
            let currentNumber = romDecEqual[roman[el]];
            let nextNumber = romDecEqual[roman[el+1]];
            
            if (typeof currentNumber === "undefined"){
               throw new Error ("It's doesn't have an Arabic (decimal) equivalent")
            } 
           
            if (typeof nextNumber === "undefined" || currentNumber >= nextNumber){
                sum += currentNumber;
            } else {
                sum -= currentNumber
            }
        }

    return sum
}

module.exports = romanToDec;
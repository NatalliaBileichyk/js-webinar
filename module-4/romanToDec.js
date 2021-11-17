/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */
roman1 = "X"
roman2 = "XIV"
roman3 = "CD"
roman4 = "CMXVI"
roman5 = true
roman6 = "X1"

console.log(`roman1 = "X" = 10:      ${romanToDec (roman1)}`);
console.log(`roman2 = "XIV" = 14:    ${romanToDec (roman2)}`);
console.log(`roman3 = "CD" = 400:    ${romanToDec (roman3)}`);
console.log(`roman4 = "CMXVI" = 916: ${romanToDec (roman4)}`);
console.log(`roman5 = "true" = Error:${romanToDec (roman5)}`);
console.log(`roman6 = "X1" = Error:  ${romanToDec (roman6)}`);

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
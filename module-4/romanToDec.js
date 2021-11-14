/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

// Variant 1 if it's needed to return a sum
// roman1 = "X"
// roman2 = "XVII"
// function romanToDec (roman){
//     if (typeof roman !== "string"){
//         throw new Error ("It doesn't have an Arabic (decimal) equivalent")
//     }

//     return roman.split('')
//                 .reduce((sum, el) => {                                                            
//                     if (el === "I" ||  el === "i"){
//                         return sum +  1
//                     }
//                     if (el === "V" ||  el === "v"){
//                         return sum +  5
//                     }
//                     if (el === "X" ||  el === "x"){
//                         return sum +  10
//                     }
//                     if (el === "L" ||  el === "l"){
//                         return sum + 50
//                     } 
//                     if (el === "D" ||  el === "d"){
//                         return sum + 500
//                     }
//                     if (el === "M" ||  el === "m"){
//                         return sum + 1000
//                     } else {
//                         throw new Error ("It doesn't have an Arabic (decimal) equivalent")
//                     }                    
//                 }, 0)              
// }

// console.log(romanToDec (roman1));
// console.log(romanToDec (roman2));


// Variant 2 if it's needed ONLY to change a number
roman1 = "X"
roman2 = "XVII"

function romanToDec (roman){
    if (typeof roman !== "string"){
        throw new Error ("It doesn't have an Arabic (decimal) equivalent")
    }

    return roman.split('')
                .map(el => {                                                            
                    if (el === "I" ||  el === "i"){
                        return el = 1
                    }
                    if (el === "V" ||  el === "v"){
                        return el = 5
                    }
                    if (el === "X" ||  el === "x"){
                        return el =  10
                    }
                    if (el === "L" ||  el === "l"){
                        return el = 50
                    } 
                    if (el === "D" ||  el === "d"){
                        return el = 500
                    }
                    if (el === "M" ||  el === "m"){
                        return el = 1000
                    } else {
                        throw new Error ("It doesn't have an Arabic (decimal) equivalent")
                    }
                })
                .join("")            
}

console.log(romanToDec (roman1));
console.log(romanToDec (roman2));
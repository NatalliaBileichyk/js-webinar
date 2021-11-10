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
   if (roman === "I" ||  roman === "i"){
       return 1
   } 
   if (roman === "V" ||  roman === "v"){
       return 5
   } 
   if (roman === "X" ||  roman === "x"){
       return 10
   }
   if (roman === "L" ||  roman === "l"){
       return 50
   } 
   if (roman === "D" ||  roman === "d"){
       return 500
   } 
   if (roman === "M" ||  roman === "m"){
       return 1000
   } 
      
   throw new Error ("It doesn't have Arabic (decimal) equivalent")
}

module.exports = romanToDec;
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase (toConvert) {
    console.log (typeof toConvert)
    if (typeof toConvert !== "string"){
        return ""
    }
    
    return toConvert.split(/\s/g)                                  
                    .map(el => el.split("")
                           .map(el => el.match(/[A-Za-z0-9]/g))
                           .join("")
                    )
                    .filter(el => el != "")
                    .map((el, i) => {
                        if (!i) {
                         return el.toLowerCase()
                        } 
                        return el[0].toUpperCase() + el.slice(1).toLowerCase()
                    })
                    .join("");
}

module.exports = toCamelCase;
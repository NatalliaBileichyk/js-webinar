/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
function sleep (sec){
    
    return new Promise((resolve, reject) => {
       
        if (typeof sec == "number"){                     
            if (sec > 0 && sec <= 10){ 
                setTimeout(() => {resolve (sec)}, sec * 1000)
            } else {
                setTimeout(() => {resolve (10)}, 10 * 1000)
            }
        } else {
            throw new Error("parameter is not correct")
        }
 
    }
    )

}

module.exports = sleep;
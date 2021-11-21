//https://www.hackerrank.com/challenges/funny-string/problem

function funnyString(s) {
    let arrayFromString = s.split("");
    let reversedArrayFromString = s.split("").reverse();
    
    let difference1 = new Array();
    for (let i = 0; i < arrayFromString.length-1; i++){         
        difference1[i] = Math.abs(arrayFromString[i].charCodeAt() - arrayFromString[i+1].charCodeAt())
    }

    let difference2 = new Array();
    for (let j = 0; j < reversedArrayFromString.length-1; j++){
        difference2[j] = Math.abs(reversedArrayFromString[j].charCodeAt() - reversedArrayFromString[j+1].charCodeAt())
    }

    let funnyCompare = 0;
    for (let z = 0; z < difference1.length; z++){
        (difference1[z] !== difference2[z]) ? funnyCompare = 1 : funnyCompare = funnyCompare
    }

    return (funnyCompare === 0) ? "Funny" : "Not Funny"
}
//https://www.hackerrank.com/challenges/reduced-string/

function superReducedString(s) {
    let arrayFromString = s.split("");
    
    for (let i = 0; i < arrayFromString.length; i++){
        if (arrayFromString[i] === arrayFromString[i+1]){
            arrayFromString.splice(i, 2);
            i = -1;
        }
    }
    
    if (arrayFromString.length != 0) {
        return arrayFromString.join("")
    } else {
        return "Empty String"
    }
}
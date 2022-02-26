// https://www.hackerrank.com/challenges/detect-the-email-addresses/problem?isFullScreen=true


// all cases are passed on the www.hackerrank.com except Test Case 1, but I see in output (expected from hackerrank) is not as required

function processData(input) {
    let regex = new RegExp('\\w+(\\.\\w+)*@\\w+(\\.\\w+)*', 'g');
    let matches = input.match(regex);
    let sortedArray = matches.sort((a,b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
    let uniqueEmails = sortedArray.filter((value, index) => sortedArray.indexOf(value) === index);

    let stringFromArray = uniqueEmails.join(';');

    return console.log(stringFromArray);
} 

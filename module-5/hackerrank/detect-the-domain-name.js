//https://www.hackerrank.com/challenges/detect-the-domain-name/problem?isFullScreen=true

function processData(input) {
    let regex = new RegExp('(?:htt(p|ps))\\:\\/\\/[a-zA-Z0-9\-]+(\\.[a-zA-Z0-9\-]+)+', 'gi');
    let matches = input.match(regex);
    
    let regexForDelete = new RegExp('(?:htt(p|ps))\\:\\/\\/((www|ww2)\\.)?', 'g');
    let stringFromArray = matches.join(';')
                                 .replace(regexForDelete, '');

    let arrayDomens = stringFromArray.split(';')                                     
                                     .sort((a,b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
    
    let uniqueValues = arrayDomens.filter((value, index) => arrayDomens.indexOf(value) === index)
                                  .join(';');
    
    return console.log(uniqueValues);
} 
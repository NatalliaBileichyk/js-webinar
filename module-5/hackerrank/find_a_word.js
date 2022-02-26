//https://www.hackerrank.com/challenges/find-a-word/problem?isFullScreen=true

function processData(input) {
    const arrayLines = input.split('\n');
    const lines = Number(arrayLines[0]);
    
    let result = 0  
    for (let i = lines + 2; i < arrayLines.length; i++) {
        let findWord = arrayLines[i].trim();
        
        if (findWord.search('/\w+/')){
            let regex = new RegExp(`(^|\\W)${findWord}(\\W|$)`, 'gi');
            let resultForSentence = 0;
            for (let x = 1; x <= lines; x++){
                let whereFindWord = arrayLines[x];
                let matches = whereFindWord.match(regex);
                (matches != null) ? resultForSentence += matches.length : resultForSentence
            }
            result += resultForSentence;        
        }
        
    }
    console.log(result);
}

let text = "1\n foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.\n 3\n foo\n bar\n foo\n";
let text1 = "3\n foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.\nfoo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.\nfoo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.\n 3\n foo\n bar\n foo\n";
processData (text);
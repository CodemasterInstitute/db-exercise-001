
function render() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (var i = 0; i < alphabet.length; i++) {
        var isVowel = false;
        
        for (var ii = 0; ii < vowels.length; ii++) {
            
            if (alphabet[i] === vowels[ii]) {
                isVowel = true;
            }
            
        }
        
        var line = alphabet[i];
        
        if (isVowel === true) {
            line = line + ' (VOWEL)';
        } else {
            line = line + ' (consonant)';
        }
        
        outputLine(line);
    }
    
}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}
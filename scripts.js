
var render = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (var i = 0; i < alphabet.length; i++) {        
        var line = alphabet[i];
        
        outputLine(line);
    }
    
}

var outputLine = function(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}
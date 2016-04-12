//declaring variable object render with a function as the content of the variable
var render = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var vowels = ['a', 'e', 'i', 'o', 'u'];


    //outer loop to go through alphabet
    for (var i = 0; i < alphabet.length; i++) {  
           
        // inner loop for vowels
        for(var j=0; j<vowels.length; j+=1){
            //checking to see if alphabet[index] equivalent to vowels[index]            
            if( alphabet[i] === vowels[j]){
                alphabet[i] = alphabet[i]+ '(VOWEL)'; //adding the word Vowel in brackets to a vowel
            }
        }    
        //value sent to outputLine function-variable 
       outputLine(alphabet[i]); 
        
    }
    
}

//declaring functions for html output
function outputLine(line) {
    //manipulating the DOM of the browser
    
    var output = document.getElementById('output'); //finding the element to be manipulated
        
    var currentHtml = output.innerHTML; //assigning current text value of element 
    
    var newHtml = currentHtml + line + '<br />'; //creating new text value for element
    
    output.innerHTML = newHtml; //writing the new text.
    
}

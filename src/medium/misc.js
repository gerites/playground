// Longest substring with no repeating characters  


let findLongestSubstring = (string) => {
    let individualWords = string.split(' ');
    let longestSubstring = individualWords[0];
    individualWords.map(word => {
        if(!wordWithoutRepeatingChars(word) && word.length > longestSubstring.length) {
            longestSubstring = word;
        } 
    })
    return longestSubstring;
}

let wordWithoutRepeatingChars = (word) => {
    return word.split('').some(function(v,i,a){
      return a.lastIndexOf(v)!=i;
    });
}
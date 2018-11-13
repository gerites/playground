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


// largest number formed by an array of numbers (numbers can be broken down to digits)


let largestNumber = (array) => {
    let combinedString = array.join('').split('');
    for(let i=0; i<combinedString.length; i++) {
		let maxValue = combinedString[i];
		for(let j=i; j<combinedString.length; j++) {
			if(combinedString[j] > combinedString[i]) {
				maxValue = combinedString[j];
				combinedString[j] = combinedString[i];
				combinedString[i] = maxValue; 
            }
		}
    }
return combinedString.join('');
}

// largest number formed by an array of numbers (numbers should not be broken down to digits)

let largestNumber = (array) => array.sort(function(a, b){
    if (`${a}${b}` > `${b}${a}`) {return -1;}
    if (`${a}${b}` < `${b}${a}`) {return 1;}
    return 0;
}).join('');


//First non-repeating character in a string

let firstNonRepeatingCharacter = (string) => {
    for(let i=0; i<string.length; i++) {
        if(!string.slice(i+1).includes(string[i])) {
            return string[i];
        }
    }
}
function firstWord(s) {
    // If the input string is empty or does not contain any space, return the entire string
    if (!s || !s.includes(" ")) {
        return s;
    }
    
    // Split the string by space and return the first element (first word)
    return s.split(' ')[0];
}

// Prompting user for input
const s = prompt("Enter String:");
alert(firstWord(s));

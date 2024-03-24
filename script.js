function firstWord(s) {
  // If the input string is empty or doesn't contain any space, return the entire string
  if (s === '' || !s.includes(' ')) {
      return s;
  }
  
  // Find the index of the first space
  const spaceIndex = s.indexOf(' ');
  
  // Return the substring from the beginning up to the first space
  return s.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

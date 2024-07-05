// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function isAnagram(str1, str2) {
  const cleanStr1 = str1
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const cleanStr2 = str2
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return cleanStr1 === cleanStr2;
}

//Example of anagrams
console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots"));

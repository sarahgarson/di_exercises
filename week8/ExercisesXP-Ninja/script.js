// Exercise 1 : Merge Words

// Instructions

//1. Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'.

//2. When the function is called without any arguments return a string where all words have been merged into a sentence.

// - For example
// mergeWords('There')('is')('no')('spoon.')();
// should return 'There is no spoon.'

function mergeWords(string) {
  return function next(nextString) {
    if (nextString === undefined) {
      return string;
    } else {
      return mergeWords(string + " " + nextString);
    }
  };
}
console.log(mergeWords("Hello")());
console.log(mergeWords("There")("is")("no")("spoon.")());

//3. Below is a verbose JavaScript solution, turn this into a currying function.

const mergeWords = (string) => (nextString) => {
  if (nextString === undefined) {
    return string;
  } else {
    return mergeWords(string + " " + nextString);
  }
};

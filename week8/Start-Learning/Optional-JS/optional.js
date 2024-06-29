// Question 1:

// Clean the room function:

// Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, into individual array that is ordered.

// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// function cleanRoom(arr) {
//   // Sort the array in ascending order
//   arr.sort((a, b) => a - b);

//   // Initialize an empty result array
//   const result = [];

//   // Iterate through the sorted array
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     const group = [current];

//     // Collect identical elements into a group
//     while (arr[i + 1] === current) {
//       group.push(arr[++i]);
//     }

//     // Push the group into the result array
//     result.push(group.length === 1 ? group[0] : group);
//   }

//   return result;
// }

// // Test the function
// const input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
// console.log(cleanRoom(input)); // Output: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// function cleanRoom(arr) {
//   // Separate numbers and strings
//   const numbers = arr.filter((item) => typeof item === "number");
//   const strings = arr.filter((item) => typeof item === "string");

//   // Helper function to organize array into groups
//   const organizeArray = (array) => {
//     array.sort((a, b) => a - b);
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//       const current = array[i];
//       const group = [current];
//       while (array[i + 1] === current) {
//         group.push(array[++i]);
//       }
//       result.push(group.length === 1 ? group[0] : group);
//     }
//     return result;
//   };

//   // Organize both numbers and strings separately
//   const organizedNumbers = organizeArray(numbers);
//   const organizedStrings = organizeArray(strings);

//   return [organizedNumbers, organizedStrings].filter(
//     (array) => array.length > 0
//   );
// }

// // Test the function
// const input = [1, "2", "3", 2];
// console.log(cleanRoom(input)); // Output: [[1, 2], ["2", "3"]]

// const input2 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
// console.log(cleanRoom(input2)); // Output: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

//------------------------------------------------------------------------//

// Question 2:
// Write a javascript function that takes an array of numbers and a target number.

// The function should find two different numbers in the array that, when added together, give the target number.

// For example: answer([1,2,3], 4) should return [1,3]

function findNumbersForTarget(numbers, target) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(numbers[i], numbers[j]);
        return result;
      }
    }
  }

  return result;
}

console.log(findNumbersForTarget([1, 2, 3], 4));

//------------------------------------------------------------------------//

// Question 3:

// Write a function that converts HEX to RGB.

// Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function convertColor(color) {
  if (color.includes("#")) {
    // HEX to RGB conversion
    color = color.replace("#", "");
    //parseInt(..., 16) converts the extracted substring from HEX (base 16) to an integer.
    const r = parseInt(color.substring(0, 2), 16);
    //color.substring(2, 4) extracts the third and fourth characters of the color string, which represent the green component in a HEX color value.
    const g = parseInt(color.substring(2, 4), 16);
    //color.substring(4, 6) extracts the fifth and sixth characters of the color string, which represent the blue component in a HEX color value.
    const b = parseInt(color.substring(4, 6), 16);
    return `RGB(${r}, ${g}, ${b})`;
  } else if (color.toLowerCase().includes("rgb")) {
    // RGB to HEX conversion
    const rgbValues = color.match(/\d+/g);
    const hex = rgbValues
      .map((value) => {
        const hexValue = Number(value).toString(16);
        return hexValue.length === 1 ? "0" + hexValue : hexValue;
      })
      .join("");
    return `#${hex.toUpperCase()}`;
  } else {
    return "Invalid color format. Please enter HEX or RGB color format.";
  }
}

console.log(convertColor("#FFA500"));
console.log(convertColor("RGB(70, 130, 180)"));

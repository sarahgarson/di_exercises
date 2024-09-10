"use strict";
// Function to get input value and update output
function updateOutput() {
    const nameInput = document.getElementById('nameInput');
    const output = document.getElementById('output');
    if (output) {
        output.textContent = `Hello, ${nameInput.value}!`;
    }
    nameInput.value = '';
}
// Event listener for submit button
const submitButton = document.getElementById('submitButton');
if (submitButton) {
    submitButton.addEventListener('click', updateOutput);
}
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
};
// TypeScript now treats these as readonly
console.log(config.apiUrl);
console.log(config.timeout);

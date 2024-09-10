//here we have a union type for id
type ID = string | number;

// and the function to display the ID
function displayID(id: ID) {
    console.log(`The ID is: ${id}`);
}

// putting into use the union type :)
let id1: ID = "ABC123";
let id2: ID = 456789;

displayID(id1);
displayID(id2);

// and one more function to process the ID
function processID(id: ID) {
    if (typeof id === "string") {
        console.log(`Processing string ID: ${id.toUpperCase()}`);
    } else {
        console.log(`Processing numeric ID: ${id.toFixed(2)}`);
    }
}

processID(id1);
processID(id2);

// This should just work fine
let flexibleID: ID = "XYZ789";
console.log(`Flexible ID: ${flexibleID}`);

flexibleID = 101112;
console.log(`Flexible ID changed: ${flexibleID}`);



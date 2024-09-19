"use strict";
// Type guard for Manager
function isManager(employee) {
    return employee.manageTeam !== undefined;
}
// Type guard for Developer
function isDeveloper(employee) {
    return employee.programmingLanguages !== undefined;
}
// Function to describe an employee (im not sure if its completely right)
function describeEmployee(employee) {
    let description = `${employee.name} is ${employee.age} years old and works in the ${employee.department} department as a ${employee.position}.`;
    if (isManager(employee)) {
        description += ` They ${employee.manageTeam ? 'manage a team' : 'do not manage a team'}.`;
    }
    else if (isDeveloper(employee)) {
        description += ` They are proficient in ${employee.programmingLanguages.join(', ')}.`;
    }
    return description;
}
//some examples here to check it out
const manager = {
    name: "Alice",
    age: 35,
    position: "Project Manager",
    department: "IT",
    manageTeam: true
};
const developer = {
    name: "Bob",
    age: 28,
    position: "Software Developer",
    department: "Engineering",
    programmingLanguages: ["TypeScript", "JavaScript", "Python"]
};
console.log(describeEmployee(manager));
console.log(describeEmployee(developer));

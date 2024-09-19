// Person type
type Person = {
  name: string;
  age: number;
};

// Job type
type Job = {
  position: string;
  department: string;
};

// Employee type that extends Person and Job :)
type Employee = Person & Job;

// Defining here more specific job types
type Manager = Employee & { manageTeam: boolean };
type Developer = Employee & { programmingLanguages: string[] };

// Type guard for Manager
function isManager(employee: Employee): employee is Manager {
  return (employee as Manager).manageTeam !== undefined;
}

// Type guard for Developer
function isDeveloper(employee: Employee): employee is Developer {
  return (employee as Developer).programmingLanguages !== undefined;
}

// Function to describe an employee (im not sure if its completely right)
function describeEmployee(employee: Employee): string {
  let description = `${employee.name} is ${employee.age} years old and works in the ${employee.department} department as a ${employee.position}.`;

  if (isManager(employee)) {
    description += ` They ${employee.manageTeam ? 'manage a team' : 'do not manage a team'}.`;
  } else if (isDeveloper(employee)) {
    description += ` They are proficient in ${employee.programmingLanguages.join(', ')}.`;
  }

  return description;
}

//some examples here to check it out
const manager: Manager = {
  name: "Alice",
  age: 35,
  position: "Project Manager",
  department: "IT",
  manageTeam: true
};

const developer: Developer = {
  name: "Bob",
  age: 28,
  position: "Software Developer",
  department: "Engineering",
  programmingLanguages: ["TypeScript", "JavaScript", "Python"]
};


console.log(describeEmployee(manager));
console.log(describeEmployee(developer));


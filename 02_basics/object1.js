
const employee = {
    name: "Mayuri",
    Id: 1234,
    salary: 80000,
    Position: "Developer",
    // sym: "!@#$",
    loged_in: true
}
// console.log(employee.name);
console.log(employee.salary);    //this is print the object but this is not the correct way
console.log(employee["Id"]);    // this is correct
console.log(employee["Position"]);
// console.log(typeof employee["sym"]);
console.log(employee["loged_in"]);

employee.salary = 100000;  // this is how use can chnge the value of object key
console.log(employee["salary"])
Object.freeze(employee)  // after use oc freeze you cannot change the value of object
employee.salary = 90000;
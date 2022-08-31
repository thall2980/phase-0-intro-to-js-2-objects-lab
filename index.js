// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "Aiken Ave",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {
        ...employee,
        "name": "Sam", 
        "streetAddress": "11 Broadway" }
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const deleteFromEmployeeByKey = {...employee}
    delete deleteFromEmployeeByKey.name
    return deleteFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}
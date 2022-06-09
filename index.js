// Write your solution in this file!

let employee = {
  name: "Brian",
  streetAddress: "Nairobi, Ruiru"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  let newEmployee = {...employee, name: "Sam", streetAddress: "11 Broadway"} 
  return newEmployee
}


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
  employee[key] = value
  return employee
}



function deleteFromEmployeeByKey(employee, key){
  let newEmployee = {...employee};
  delete newEmployee[key]
  return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
 delete employee[key];
 return employee
}

// Write your solution in this file!
const employee = {
     name:"kevin",
     address:"Nairobi"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
     const updatedEmployee = {...employee};
     updatedEmployee[key] = value;

     return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee
}

 function deleteFromEmployeeByKey(employee, key){
      const deletedEmployee = { ...employee };
      delete deletedEmployee[key];

      return deletedEmployee;
 }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}




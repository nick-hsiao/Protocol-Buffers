const Schema = require('./employees_pb.js');
const fs = require('fs');

const emp1 = new Schema.Employee();
emp1.setEmpId(24);
emp1.setFName('Nick');
emp1.setLName('Hsiao');
emp1.setSalary(100000);

const emp2 = new Schema.Employee();
emp2.setEmpId(24);
emp2.setFName('Terry');
emp2.setLName('Yen');
emp2.setSalary(90000);

const emp3 = new Schema.Employee();
emp3.setEmpId(24);
emp3.setFName('Ben');
emp3.setLName('Kuang');
emp3.setSalary(100000);

const employee_list = new Schema.Employees();
employee_list.addEmployees(emp1)
employee_list.addEmployees(emp2)
employee_list.addEmployees(emp3)

const output = employee_list.serializeBinary()
fs.writeFileSync('binary_output_emp',output)

const deserialization = Schema.Employees.deserializeBinary(output)
console.log(deserialization)

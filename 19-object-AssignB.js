
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(22, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(22, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(22, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(22, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(22, "Mahesh", "HR", 85000, "Infy");

console.log(`====================Add all the created emp objects inside the array=====================================================================`);
console.log(`------------------1. Employee name working in 'TSC' with name and company name-----------------------------------------------------------`);

const array = [emp_anil, emp_radha, emp_rishi, emp_viny, emp_sonali, emp_monika, emp_mahi];
for (const element of array) {
    if (element.emp_company == "TCS") {
        console.log(`Employees working in TCS -> Employee Names  : ${element.emp_name}, Company Name  : ${element.emp_company}`);
    }
}

console.log(` `);
console.log(`------------------2. 'Finance department Employees', department and employee name--------------------------------------------------------`);
for (const element of array) {
    if (element.emp_dept == "Finance") {
        console.log(`Finance department empl  -> Department Name : ${element.emp_dept}, Employee Name : ${element.emp_name}`);
    }
}

console.log(` `);
console.log(`------------------3. Employees whose name starts with "R" Complete details---------------------------------------------------------------`);
for (const element of array) {
    if (element.emp_name.startsWith("R")) {
        console.log(`Employees Start with 'R' -> EmployeeName : ${element.emp_name}, EmployeeId : ${element.emp_id}, EmployeeDept: ${element.emp_dept}, EmployeeSalary: ${element.emp_salary}, EmployeeCompany: ${element.emp_company}`);
    }
}

console.log(` `);
console.log(`------------------4. Employee salary greater than 75000 (name,salary,company)------------------------------------------------------------`);
for (const element of array) {
    if (element.emp_salary > 75000) {
        console.log(`Employee with salary>75k -> EmployeeName : ${element.emp_name}, Employee Salary: ${element.emp_salary}, EmployeeCompany: ${element.emp_company}`);
        
    }
}

console.log(` `);
console.log(`------------------5. Employee salary greater than 50000 $ "IT dept(complete details)-----------------------------------------------------`);
for (const element of array) {
    if (element.emp_salary >= 50000 && element.emp_dept=="IT") {
        console.log(`Employee Details  are    -> EmployeeName : ${element.emp_name}, EmployeeId : ${element.emp_id}, EmployeeDept: ${element.emp_dept}, EmployeeSalary: ${element.emp_salary}, EmployeeCompany: ${element.emp_company}`);
        
    }
}

console.log(` `);
console.log(`------------------6. Employee salary greater than 75000 (name,salary,company)------------------------------------------------------------`);
for (const element of array) {
    if(element.emp_company=="Infy"){
        console.log(`Employee Details  are    -> EmployeeName : ${element.emp_name}, EmployeeId : ${element.emp_id}, EmployeeDept: ${element.emp_dept}, EmployeeSalary: ${element.emp_salary}, EmployeeCompany: ${element.emp_company}`);
    }
}

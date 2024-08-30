class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "It", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`===========Sort the array employees in Descending order of EmpIDs and log id,name,dept==============`);
const arrayId = arrayEmployee.sort((n1,n2)=>{
    return n1.emp_id>n2.emp_id ? -1 : 1;
})
arrayId.forEach((element) => {
    console.log(`Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}`);  
});

console.log(` `);
console.log(`===========Sort the array employees in Ascending order of EmpDept amd log ID,dept,company===========`);
const arraydept = arrayEmployee.sort((n1,n2)=>{
    return n1.emp_dept>n2.emp_dept ? 1 : -1;
})
arraydept.forEach((element) => {
    console.log(`Employee Department: ${element.emp_dept}, Employee Id: ${element.emp_id}, Employee Company: ${element.emp_company}`);   
});

console.log(` `);
console.log(`===========Sort the array employees in Descending order of EmpSalary amd log Name,salary,company====`);
const arraySalary = arrayEmployee.sort((n1,n2)=>{
    return n1.emp_salary>n2.emp_salary ? -1 : 1;
})
arraySalary.forEach((element) => {
    console.log(`Employee Name: ${element.emp_name}, Employee Salary: ${element.emp_salary}, Employee Company: ${element.emp_company}`);
    
});
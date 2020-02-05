//function/object definition:
function Employee(name, title, salary, status = "Full-Time"){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}
//function call:
Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + ", title: " + this.title + ", salary: " + this.salary + ", status: " + this.status);
}
var bob = new Employee("Bob", "Web Developer", "$3000");
var sara = new Employee("Sara", "Full Stack Web Developer", "$2000");
var jessica = new Employee("Jessica", "Receptionist", "$1000", "Part-time");

const array = [];
array.push(bob, sara, jessica);
console.log(array);

bob.printEmployeeForm();
sara.printEmployeeForm();
jessica.printEmployeeForm();
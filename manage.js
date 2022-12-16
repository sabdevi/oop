/*

A script that ‘manages’ different kinds of employees in a sales department. Each month, 
all the employees have an employee-specific sales target expressed as the number of successful sales. 
Your script will showcase how the compensation of such employees will be managed.

*/

// Create a global Employee class

class Employee {
    constructor (employeeName, employeeType, monthlySalary, monthSalesTargets) {
        this.employeeName = employeeName;
        this.employeeType = employeeType;
        this.monthlySalary = monthlySalary;
        this.monthSalesTargets = monthSalesTargets;
    }

    // A method that outputs salaried employees basic flat salary, or their flat salary increased by 10% if they meet the monthly sales targets.

    salariedCalc() {
        if (this.monthSalesTargets > 500) {
            let totalSalary = (this.monthlySalary * 10/100) + this.monthlySalary;
            console.log(`Monthly Payslip (Salaried Employee)\n===================================\n\nEmployee Name: ${this.employeeName}\nEmployee Type: ${this.employeeType}\nBase Monthly Salary: £${this.monthlySalary}`);
            console.log(`Commission: Monthly Sales Targets of £${this.monthSalesTargets} based on 10% gives you a total monthly salary of (£${this.monthlySalary} * 10%) + £${this.monthlySalary}\nTotal Monthly Salary: £${totalSalary}\n`);
        }
        else {
            console.log(`Monthly Payslip (Salaried Employee)\n===================================\n\nEmployee Name: ${this.employeeName}\nEmployee Type: ${this.employeeType}\nTotal Monthly Salary: £${this.monthlySalary}\n`);
        }
    }
}

// This is an extended class of the class Employee.  This class has the additional parameters for hourly staff (hourly and hybrid) that are calculated based on hours worked

class EmployeeHourly extends Employee {

    constructor (employeeName, employeeType, monthlySalary, monthSalesTargets, hoursWorked) {
        super(employeeName, employeeType, monthlySalary, monthSalesTargets);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = 12;
    }

    // A method that outputs hourly employees, hourly pay, and any commissions.

    hourlyCalc() {
        if (this.monthSalesTargets > 1000) {

            // Calculate monthly wage by multiplying hourly rate by the hours worked

            this.monthlySalary = this.hoursWorked * this.hourlyRate;
            
            console.log(`Monthly Payslip (Hourly Employee)\n=================================\n\nEmployee Name: ${this.employeeName}\nEmployee Type: ${this.employeeType}\nMonthly Salary: ${this.hoursWorked} Hours worked * ${this.hourlyRate} per hour is £${this.monthlySalary}`);
            
            // Calculate increase of hourly rate by 50% multiply ns output final monthly salary + commissions.

            this.hourlyRate = (this.hourlyRate * 50/100) + this.hourlyRate;
            let totalSalary = this.hoursWorked * this.hourlyRate;
            console.log(`Commission: Monthly Sales Targets of £${this.monthSalesTargets} based on 50% increase to hourly rate is £${this.hourlyRate} per hour * ${this.hoursWorked} hours worked.\nTotal monthly salary: £${totalSalary}\n`);
        }
        else {

            // Calculate monthly wage by multiplying hourly rate by the hours worked (no commission)
            
            this.monthlySalary = this.hoursWorked * this.hourlyRate;
            console.log(`Monthly Payslip (Hourly Employee)\n=================================\n\nEmployee Name: ${this.employeeName}\nEmployee Type: ${this.employeeType}\nMonthly Salary: ${this.hoursWorked} Hours worked * ${this.hourlyRate} per hour\nTotal Monthly Salary: £${this.monthlySalary}\n`);
        }      
    }

    // A method that outputs hybrid employees basic flat pay, overtime worked, and any commission if monthly sales target is reached.

    hybridCalc () {

        if (this.monthSalesTargets > 1000) {

            // Calculate monthly wage by multiplying hourly rate by the hours worked

            let addHours = this.hoursWorked * this.hourlyRate;
            let standardSalary = this.monthlySalary + addHours;

            //this.monthlySalary = this.hoursWorked * this.hourlyRate;
            
            console.log(`Monthly Payslip (Hybrid Employee)\n=================================\n\nEmployee Name: ${this.employeeName}\nEmployee Type: ${this.employeeType}\nMonthly Salary: ${this.monthlySalary}\nAdditional Hours: ${this.hoursWorked} Hours worked * ${this.hourlyRate} per hour is £${addHours}\nStandard Monthly Salary: £${standardSalary}`);
            
            // Calculate increase of hourly rate by 50% multiply and output final monthly salary + commissions.

            this.hourlyRate = (this.hourlyRate * 20/100) + this.hourlyRate;
            let commissionHours = this.hoursWorked * this.hourlyRate;
            let totalSalary = this.monthlySalary + commissionHours;
            console.log(`Commission: Monthly Sales Targets of £${this.monthSalesTargets} based on 20% increase to hourly rate is £${this.hourlyRate} per hour * ${this.hoursWorked} hours worked is £${commissionHours}\nTotal monthly salary: £${totalSalary}\n`);
        }
        else {

            // Calculate base monthly wage. And multiplying hourly rate by the additional hours worked (no commission)
            
            let addHours = this.hoursWorked * this.hourlyRate;
            let totalSalary = this.monthlySalary + addHours;
            console.log(`Monthly Payslip (Hybrid Employee)\n=================================\n\nEmployee Name: ${this.employeeName}\nEmployee Type: ${this.employeeType}\nMonthly Salary: £${this.monthlySalary}\nAdditional Hours: ${this.hoursWorked} Hours worked * ${this.hourlyRate} per hour is £${addHours}\nTotal Monthly Salary: £${totalSalary}\n`);
        }      
    }
}

// Create new instances of the class Employee and extended class EmployeeHourly

const john = new Employee ("John Roe", "Salaried", 2000, 600);
const sarah = new Employee ("Sarah James", "Salaried", 1500, 400);
const joe = new EmployeeHourly ("Joe Bloggs", "Hourly", 0, 300, 160);
const mary = new EmployeeHourly ("Mary Cartwright", "Hourly", 0, 1100, 200);
const maxine = new EmployeeHourly ("Maxine Jeffreys", "Hybrid", 2000, 1300, 25);
const peter = new EmployeeHourly ("Peter Ray", "Hybrid", 1000, 200, 15);

// Call the salaried calculation method

john.salariedCalc();
sarah.salariedCalc();

// Call the Run hourly calculation method

joe.hourlyCalc();
mary.hourlyCalc();

// Call the Run hybrid calculation method

maxine.hybridCalc();
peter.hybridCalc();
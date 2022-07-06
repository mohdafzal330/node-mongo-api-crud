const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employeedb')
    .then(()=>console.log('Connected successfully with database'))
    .catch((err)=>console.log('Error in connecting db ',err));

const scheema = new mongoose.Schema({
    name: {type: String, required: true},
    Department: String,
    salary: Number,
    isActive: Boolean
});

const Employee = mongoose.model('Employee',scheema);

async function createEmployee(){
    const employee = new Employee({
        name: 'Afzal', Department: 'IT - Engineering', salary: 1726000, isActive: true 
    });
    const result = await employee.save();
    console.log(result);
}

async function getEmployees(){
    const result = await Employee.find();
    console.log(result);
}

async function getEmployee(){
    const result = await Employee.find({salary: {$gte:1726000}});
    console.log(result.length);
}
async function updateEmployee(id){
    const emp = await Employee.findById(id);
    console.log(emp);
    if(!emp) return;

    emp.name = 'Neta Ji';
    const result = await emp.save();
    console.log(result);
}

async function removeEmployee(id){
    const result = await Employee.deleteOne({_id:id});
    console.log(result);
}

removeEmployee('62c2e11ff74f0fe5cddf763a');

// getEmployee();
// getEmployees();
// updateEmployee('62c2e11ff74f0fe5cddf763a');
// createEmployee();
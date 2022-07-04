const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employeedb')
    .then(()=>console.log('Connected successfully with database'))
    .then((err)=>console.log('Error in connecting db ',err));


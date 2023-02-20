const {model, Schema} = require('mongoose');

const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    salary: {
        type: Number,
        required: true
    }
});

const employee = model('Employee', EmployeeSchema);
module.exports = employee;

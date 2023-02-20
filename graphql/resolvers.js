const Employee = require('../models/Employee');
const User = require('../models/User');

module.exports = {
    Query: {
        getAllEmployees: async () => {
            try{
                const employees = await Employee.find();
                if(employees){
                    return employees;
                } else {
                    throw new Error('Employees not found');
                }
            } 
            catch (err) {
                throw new Error(err);
            }
        },
        getEmployeeById: async (_, { _id }) => {
            try {
                const employee = await Employee.findById(_id);
                if (employee) {
                    await employee.save();
                    return employee;
                } else {
                    throw new Error('Employee not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        login: async (_, { username, password }) => {
            try{
                const user = await User.findOne({username: username, password: password});
                if(user){
                    await user.save();
                    return user;
                } else {
                    throw new Error('User not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        signup: async (_, { username, email, password }) => {
            try{
                const user = await User.create({username: username, email: email, password: password});
                if(user){
                    await user.save();
                    return user;
                } else {
                    throw new Error('User not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        deleteEmployee: async (_, { _id }) => {
            try{
                const employee = await Employee.findByIdAndDelete(_id);
                if(employee){
                    await employee.remove();
                    return employee;
                } else {
                    throw new Error('Employee not found');
                }
            }
            catch (err) {
                throw new Error(err);
            }
        },
        createEmployee: async (_, { firstName, lastName, email, gender, salary }) => {
            try{
                const newEmp = await Employee.create({firstName: firstName, lastName: lastName, email: email, gender: gender, salary: salary});
                if(newEmp){
                    await newEmp.save();
                    return newEmp;
                } else {
                    throw new Error('Employee not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        updateEmployee: async (_, { _id, firstName, lastName, email, gender, salary }) => {
            try{
                const emp = await Employee.findByIdAndUpdate({ _id: _id, firstName: firstName, lastName: lastName, email: email, gender: gender, salary: salary});
                if(emp){
                    await emp.save();
                    return emp;
                }
                else {
                    throw new Error('Employee not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}
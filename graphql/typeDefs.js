const { gql } = require('apollo-server-express');

module.exports = gql`
type Employee {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    gender: String!
    salary: Float!
}
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
}

type Query {
    getAllEmployees: [Employee]
    getEmployeeById(_id: ID!): Employee
    login(username: String!, password: String!): User
}

type Mutation {
    signup(username: String!, email: String!, password: String!): User
    createEmployee(firstName: String!, lastName: String!, email: String!, gender: String!, salary: Float!): Employee
    updateEmployee(_id: ID!, firstName: String!, lastName: String!, email: String!, gender: String!, salary: Float!): Employee
    deleteEmployee(_id: ID!): Employee
}`
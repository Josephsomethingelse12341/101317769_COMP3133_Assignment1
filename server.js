const { ApolloServer } = require('apollo-server-express');
const express = require('express')

const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


mongoose.connect('mongodb+srv://Josephadmin:7HYpxGTzZiOnEocy@cluster0.gsshbsu.mongodb.net/comp3133_assignment1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(success => {
  console.log('Success Mongodb connection')
})
.catch(err => {
  console.log('Error Mongodb connection')
});

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    await server.start();

    app.get('/', (_, res) => {
      res.redirect('/graphql');
    });

    
    server.applyMiddleware({app, path: '/graphql'});

    
    
    
    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    });
}


startApolloServer(typeDefs, resolvers);




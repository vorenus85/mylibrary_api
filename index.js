import express from 'express';
import { ApolloServer, gql }  from 'apollo-server-express';
import mongoose  from 'mongoose';
import typeDefs from './models/typeDefs.js';
import resolvers from './resolvers/index.js';

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/mylibrary';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();


server.start().then(res => {
  server.applyMiddleware({ app, path: '/' });
  
  app.listen({ port: 4000 }, () => 
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );  
});
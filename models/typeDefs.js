import { gql }  from 'apollo-server-express';

export default  gql`
    type Author {
        id: ID!
        name: String
    }
    type Query {
      getAuthors: [Author]
    }
    type Mutation {
      addAuthor(name: String!): Author
    }
`;
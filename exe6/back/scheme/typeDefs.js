const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    name: String 
  }

  type Movie {
    Title: String
    Year: String
    imdbID: String
    Poster: String
  }

  type Watch {
    Title: String
    Year: String
    imdbID: String
    Poster: String
    watch: Int
    rate: Int
  }
  
  type Query {
    currentUser: User
    getWatchList: [Watch]
    logOut: Boolean
  }

  type Mutation {
    search(chain: String!): [Movie]
    login(name:String!, pass:String!): User
    createUser(name:String!, pass:String!): User
    addMovie(imdbid:String!, title:String!, year:String!, poster:String!):Boolean
    deleteFromWatchList(imdbid:String!):Boolean
    updateWatchedValue(watched:Int!, imdbid:String!):Boolean
    updateRateValue(rate:Int!, imdbid:String!):Boolean
  }
`;

module.exports = typeDefs;

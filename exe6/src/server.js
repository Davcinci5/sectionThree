// // NODE MODULES

const typeDefs = require('../src/scheme/typeDefs');
const resolvers = require('../src/scheme/resolvers');
const { resolveToken } = require('../src/token/token');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const PORT = 4000;

const app = express();
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
        const token = req.cookies.token;
        const user = await resolveToken(token);
        return { req, res, user };
    }
});

server.applyMiddleware({ app, cors: false });

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

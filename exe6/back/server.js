// // NODE MODULES

const typeDefs = require('./scheme/typeDefs');
const resolvers = require('./scheme/resolvers');
const { resolveToken } = require('./token/token');
const { errorType } = require('./errors/error');
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
    },
    formatError: (err) => {
        const e = errorType[err.message];
        return e;
    }
});

server.applyMiddleware({ app, cors: false });

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

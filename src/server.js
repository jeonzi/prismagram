require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

const PORT = process.env.PORT || 4000;

// type 정의와 resolver가 필요하다.
const typeDefs = `
    type Query {
        hello: String!
    }
`;

const resolvers = {
  Query: { hello: () => "Hi Jieun" }
};

// GraphQLServer에는 express서버가 내장되어 있다.
const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`Server Running on port ${PORT}`)
);

require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

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

const server = new GraphQLServer({ schema }); // GraphQLServer에는 express서버가 내장되어 있다.

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);

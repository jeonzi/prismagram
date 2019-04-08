import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";

const PORT = process.env.PORT || 4000;

// GraphQLServer에는 express서버가 내장되어 있다.
// context는 resolver 사이에서 정보를 공유할 때 사용한다.
const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated })
});

// morgan은 미들웨어 로깅 모듈 => app.use(logger('dev'))로 미들웨어 생성 가능
// the logger middleware will generate a detailed log using what is called the default format.
server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);

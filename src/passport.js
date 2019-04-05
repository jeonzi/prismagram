import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { prisma } from "../generated/prisma-client";

// jwt는 발행한 token에서 정보를 가져와 해독한 후 사용자 객체를 express의 request에 추가해준다.

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET // passport 정보를 암호화하는데 필요한 값(보안 중요!!!)
};

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false); // id가 없다면 false를 리턴하거나 사용자 계성을 새로 생성할 수 있다.
    }
  } catch (error) {
    return done(error, false);
  }
};

// 미들웨어는 req, res, next를 인자로 받는다.
// passport는 쿠키와 세션에서 작업하기 좋다. 쿠키를 가져오고 만들어주는 일을 한다.
// 이 함수 authenticateJwt에서는 passport에 어떤것도 입력하지 않을 거라서 session: false를 입력해준다.
export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", { sessions: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();

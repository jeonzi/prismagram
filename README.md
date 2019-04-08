# Prismagram

Instagram clone with Express + Prisma + React and React Native

## User Stroies

- [x] Create account 
- [x] Request Secret 🔒
- [x] Confirm Secret (Login)
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [x] Search by user
- [x] Search by location
- [ ] See user profile
- [ ] Follow / Unfollow User
- [ ] Edit my profile
- [ ] Upload photo
- [ ] Edit the photo (Delete)
- [ ] See the feed


## Setting
### About Babel
    1. babel은 ES6/ES7 코드를 ECMAScript5 문법으로 변환시켜주는(transpiling) 자바스크립트 모듈이다. 
    2. React 개발시 ES6 문법을 주로 이용하기 때문에 Babel이 많이 사용된다. 
    3. yarn dev : nodemon을 실행할때 마다 babel-node로 server.js 파일을 실행해준다.
    4. .babelrc 파일 생성: {
         "presets": ["@babel/preset-env"]
    } 
    5. yarn add @babel/node @babel/preset-enb @babel/core

### Nodemon

파일을 저장할 때마다 실행을 새로 해주는 도구. 
서버를 restart 해 줄 필요가 없다.

### dotenv

.env 파일을 읽음

### About GraphQL Schema and Resolvers

yarn add graphql-tools merge-grapghql-schemas 

### yarn add morgan

middleware로 로깅 전용 모듈(logger) 
app.use(logger('dev'))로 미들웨어 생성 가능

### nodemailer📫

    1. mail을 보내주는 모듈로 'yarn add nodemailer'로 설치할 수 있다.
    2. yarn add nodemailer-sendgrid-transport : sendgrid라는 메일을 보내주는 api를 사용해서 메일을 보내준다. 

### Passportjs

    1. passport는 인증 관련한 모든 일을 한다. jwt 토큰이나 쿠키에서 정보를 가져와서 사용자 정보에 저장한다.
    2. yarn add passport-jwt passport : 로그인시 인증을 위해서 passportjs의 passport-jwt 라이브러리를 설치한다.

### jsonwebtoken
    
web token을 생성해주는 모듈이다. yarn add jsonwebtoken으로 설치
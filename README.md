# Prismagram

Instagram clone with Express + Prisma + React and React Native

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

middleware로 로깅전용 모듈(logger)


## User Stroies

- [ ] Log in
- [ ] Like / Unlike a photo
- [ ] Comment on a photo
- [ ] Search by user
- [ ] Search by location
- [ ] See user profile
- [ ] Follow / Unfollow User
- [ ] Edit my profile
- [ ] Create account
- [ ] Upload photo
- [ ] Edit the photo (Delete)
- [ ] See the feed
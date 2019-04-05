import { prisma } from "../../../../generated/prisma-client";
// server.js 의 context가 자동으로 prisma를 import 해준다.

export default {
  Mutation: {
    createAccount: async (_, args, { request }) => {
      console.log(prisma);
      // firstName, lastNamek, bio는 필수값이 아니므로 기본값 ""을 넣어주어 null값이 입력되는것을 방지한다.
      const { username, email, firstName = "", lastName = "", bio = "" } = args;
      const user = await prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio
      });
      return user;
    }
  }
};

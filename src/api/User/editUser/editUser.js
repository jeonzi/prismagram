import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { username, email, firstName, lastName, bio } = args;
      const { user } = request;
      // return을 써주면 서버가 자동으로 promise를 resolve 해서 브라우저에 결과를 전달해 주기 때문에, await를 사용해 return 할 필요가 없다.
      // const user = await prisma.updateUser
      return prisma.updateUser({
        where: { id: user.id },
        data: { username, email, firstName, lastName, bio }
      });
    }
  }
};

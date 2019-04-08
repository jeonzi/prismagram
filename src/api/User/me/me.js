import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    // __ (doubleUnderScore) : 부모의 arguments를 의미 => 변수가 될 수 있음
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts
      };
    }
  }
};

// resolver
import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    userById: async (_, args) => {
      const { id } = args;
      return await prisma.user({ id }).$fragment(); // prisma client에 자동으로 추가되지 않는 것들 때문에, $fragment를 추가해주어야 한다!!!!!
    }
  }
};

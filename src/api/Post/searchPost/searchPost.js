import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) =>
      prisma.posts({
        where: {
          OR: [
            { location_starts_with: args.term },
            // { caption_contains: args.term } : 해당하는 글자만 있으면 다 찾아주니까
            { caption_starts_with: args.term }
          ]
        }
      })
  }
};

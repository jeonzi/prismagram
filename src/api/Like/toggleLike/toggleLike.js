import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleLike: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      const filterOptions = {
        // user id와 post id를 갖고 있는 like를 찾고 삭제
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            post: {
              id: postId
            }
          }
        ]
      };
      try {
        // prisma client를 사용해 user의 exsitence를 확인하는 방법
        const existingLike = await prisma.$exists.like(filterOptions);
        if (existingLike) {
          // id가 아닌, 한개의 like는 지울 수가 없다. ID도 모르고
          await prisma.deleteManyLikes(filterOptions);
        } else {
          await prisma.createLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: postId
              }
            }
          });
        }
        return true;
      } catch {
        return false;
      }
    }
  }
};

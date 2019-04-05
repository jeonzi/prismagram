// Not express middleware, but Graphql middleware
export const isAuthenticated = request => {
  if (!request.user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};

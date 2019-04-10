// prisma에서 relation을 갖기 위해서는 fragment로 따로 지정해주어야한다.
export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment{
        id
        text
        user {
            username
        }
    }
`;

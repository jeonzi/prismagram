export const USER_FRAGMENT = `
    fragment UerParts on User {
        id
        username
        firstName
        lastName
        posts {
            id
            caption
        }
    }
`;

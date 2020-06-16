export interface Comments {
        _id: string;
        comments: [Comment];
}

export interface Comment {
    userId: string;
    message: string;
    dateCreated: string;
    username?: string;
}

export interface CommentStore {
    getListComment: {
        _id: string;
        comments: Comment[]
    };
}

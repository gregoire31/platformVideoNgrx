export interface userList {
    _id: string,
    username: string,
    password: string
}

export interface userListStore {
    getUserList : userList[]
}

export interface addUser {
    username: string,
    password: string
}
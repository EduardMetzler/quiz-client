export interface UserState {
    firstName: string;
    setFirstName: (name: string) => void;
    lastName: string;
    setlastName: (name: string) => void;
    role?: string;
    setRole: (name: string) => void;

}


export interface OneUserOfListState {
    firstName: string;
    setFirstName: (name: string) => void;
    lastName: string;
    setlastName: (name: string) => void;
    _id: string;
    setId: (_id: string) => void;


}

export interface UserListState {
    allUsers: OneUserOfListState[]
    setAllUsers: (allUsers: OneUserOfListState[]) => void;
}

export interface isLoginedState {
    isAuthenticate: boolean | undefined
    setIsAuthenticate: (data: boolean) => void;
}






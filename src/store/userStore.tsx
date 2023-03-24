import create from "zustand";
import { UserListState, UserState, isLoginedState } from "../interface/interface";


export const userStore = create<UserState>((set) => ({
    firstName: "",
    setFirstName: (firstName) =>
        set((state) => ({
            ...state,
            firstName
        })),
    lastName: "",
    setlastName: (lastName) =>
        set((state) => ({
            ...state,
            lastName
        })),
    role: "",
    setRole: (role) =>
        set((state) => ({
            ...state,
            role
        })),


}));

export const allUserStore = create<UserListState>((set) => ({
    allUsers: [],
    setAllUsers: (allUsers) =>
        set((state) => ({
            ...state,
            allUsers
        })),



}));

export const isLogined = create<isLoginedState>((set) => ({
    isAuthf: undefined,
    setIsAuth: (data) =>
        set((state) => ({
            ...state,
            data
        })),



}));

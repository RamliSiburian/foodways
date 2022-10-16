import { createContext, useReducer, useState } from "react";

export const LoginContext = createContext();

const initialState = {
    isLogin: false,
    aslogin: "",
    email: "",
    password: "",
};

const reducer = (_, action) => {
    const { type, dataName, valLogin } = action;

    switch (type) {
        case "SUCCESS":
            return {
                isLogin: true,
                aslogin: valLogin,
                email: dataName,
                password: dataName,
            };
        case "LOGOUT":
            return {
                isLogin: false,
                email: "",
                password: "",
            };
        default:
            throw new Error();
    }
};

export const DataContextProvider = ({ children }) => {
    const [dataLogin, dispatch] = useReducer(reducer, initialState);

    return (
        <LoginContext.Provider value={[dataLogin, dispatch]}>
            {children}
        </LoginContext.Provider>
    );
};

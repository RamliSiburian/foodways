import { createContext, useReducer } from "react";

export const LoginContext = createContext();

const initialState = {
    isLogin: false,
    email: "",
    password: ""
};

const reducer = (_, action) => {
    const { type, dataName } = action;

    switch (type) {
        case "SUCCESS":
            return {
                isLogin: true,
                email: dataName,
                password: dataName,
            };
        case "CLEAR":
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
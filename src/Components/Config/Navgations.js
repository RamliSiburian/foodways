import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../../context/DataContext";

export const PrivateRoute = () => {
    const [dataLogin, dispatch] = useContext(LoginContext)

    const Logins = dataLogin.isLogin ? <Outlet /> : <Navigate to="/" />
    return Logins;
} 
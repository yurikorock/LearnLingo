import { useLocation } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";

export default function AuthPage (){
const location = useLocation();
const isLogin = location.pathname === "/auth/login";

    return (<>

        {isLogin ? <LoginForm/> : <RegistrationForm/>}
    </>)
}
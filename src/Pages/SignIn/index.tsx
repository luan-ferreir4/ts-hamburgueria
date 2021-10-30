import { LoginForm } from "../../Components/LoginForm"
import { Link } from "react-router-dom"
export const SignInPage = () => {
    return(
        <div>
            <LoginForm/>
            <div>
                <small>Não possui uma conta?</small>
                <Link to="/register">registre-se!</Link>
            </div>
        </div>
    )
}
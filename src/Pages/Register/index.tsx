import { RegisterForm } from "../../Components/RegisterForm"
import { Link } from "react-router-dom"
export const RegisterPage = () => {
    return(
        <div>
            <RegisterForm/>
            <div>
                <small>Já possui uma conta?</small>
                <Link to="/">Faça login!</Link>
            </div>
        </div>
    )
}
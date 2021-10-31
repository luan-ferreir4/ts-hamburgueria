import { useHistory } from "react-router";
import { UseSignIn } from "../../Providers/SignIn"

export const HomePage = () => {
    const history = useHistory(); 
    
    const  { signOut, auth } = UseSignIn();
    if(auth === ""){
       history.push("/")
    }

    return(
        <div>
            HOme
            <button onClick={signOut}>Sair</button>
        </div>
    )
}
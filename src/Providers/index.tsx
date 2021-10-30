import { IProvidersProps } from "../Interfaces/ProvidersProps";
import { SignInProvider } from "./SignIn";

const Providers = ({children}: IProvidersProps) => {
    return(
        <SignInProvider>
            {children}
        </SignInProvider>
    )
}

export default Providers;
import axios from "axios";
import { createContext, useContext } from "react";
import { useHistory } from "react-router";

import { IProvidersProps } from "../../Interfaces/ProvidersProps";
import { IUserDataLogin } from "../../Interfaces/UserData";

interface ISignInProviderData {
  signIn: (data: IUserDataLogin) => void;
  signOut: () => void;
}

const SingInContext = createContext<ISignInProviderData>(
  {} as ISignInProviderData
);

export const SignInProvider = ({ children }: IProvidersProps) => {
  const history = useHistory();
  const signOut = () => {
    localStorage.clear();
    history.push("/");
  };

  const signIn = (data: IUserDataLogin) => {
    axios
      .post("https://hamburg-burguer-api.herokuapp.com/signin", data)
      .then((res) => {
        localStorage.clear();
        
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));

        localStorage.setItem("userId", JSON.stringify(res.data.user.id));
      
        history.push("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <SingInContext.Provider value={{ signIn, signOut }}>
      {children}
    </SingInContext.Provider>
  );
};

export const UseSignIn = () => useContext(SingInContext);

import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";

import { IProvidersProps } from "../../Interfaces/ProvidersProps";
import { IUserDataLogin } from "../../Interfaces/UserData";

interface ISignInProviderData {
  signIn: (data: IUserDataLogin) => void;
  signOut: () => void;
  auth: string;
}

const SingInContext = createContext<ISignInProviderData>({} as ISignInProviderData);

export const SignInProvider = ({children}: IProvidersProps) => {
  const history = useHistory();

  const [ auth, setAuth ] = useState("");

  const signIn = (data: IUserDataLogin) => {
    axios
      .post("https://hamburg-burguer-api.herokuapp.com/signin", data)
      .then(
          (res) => {
            setAuth(JSON.stringify(res.data.accessToken))

            localStorage.setItem("token", JSON.stringify(res.data.accessToken))

            history.push("/home")
          } 
      )
      .catch(err => console.log(err));
  };

  const signOut = () => {
    localStorage.clear();
    setAuth("");
    history.push("/")
  }

  return <SingInContext.Provider value={{signIn, signOut, auth}}>
      {children}
  </SingInContext.Provider>;
};

export const UseSignIn = () => useContext(SingInContext); 
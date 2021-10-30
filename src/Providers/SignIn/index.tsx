import axios from "axios";
import { createContext, useContext, useState } from "react";

import { IProvidersProps } from "../../Interfaces/ProvidersProps";
import { IUserDataLogin } from "../../Interfaces/UserData";

interface ISignInProviderData {
    signIn: (data: IUserDataLogin) => void;
}

const SingInContext = createContext<ISignInProviderData>({} as ISignInProviderData);

export const SignInProvider = ({children}: IProvidersProps) => {
  const signIn = (data: IUserDataLogin) => {
    axios
      .post("https://hamburg-burguer-api.herokuapp.com/signin", data)
      .then(
          res => console.log(res)
      )
      .catch(err => console.log(err));
  };

  return <SingInContext.Provider value={{signIn}}>
      {children}
  </SingInContext.Provider>;
};

export const UseSignIn = () => useContext(SingInContext); 
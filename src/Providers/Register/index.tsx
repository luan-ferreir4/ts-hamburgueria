import axios from "axios";
import { createContext, useContext } from "react";

import { IProvidersProps } from "../../Interfaces/ProvidersProps";
import { IUserDataRegister } from "../../Interfaces/UserData";

interface IRegisterProviderData {
    registerUser: (data: IUserDataRegister) => void;
}

const RegisterContext = createContext<IRegisterProviderData>({} as IRegisterProviderData);

export const RegisterProvider = ({children}: IProvidersProps) => {

  const registerUser = (data: IUserDataRegister) => {
    axios
      .post("https://hamburg-burguer-api.herokuapp.com/register", data)
      .then(
          res => console.log(res)
      )
      .catch(err => console.log(err));
  };

  return <RegisterContext.Provider value={{registerUser}}>
      {children}
  </RegisterContext.Provider>;
};

export const UseRegister = () => useContext(RegisterContext); 
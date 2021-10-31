import axios from "axios";
import { createContext, useContext, useState } from "react";
import { IBurger } from "../../Interfaces/Burger";

import { IProvidersProps } from "../../Interfaces/ProvidersProps";

interface IUserProviderData {
  userCart: IBurger[];
  addToUserCart: (newProduct: IBurger, userToken: object) => void;
  deleteFromUserCart: (productID: number, userToken: object) => void;
  getUserCart: (id: number) => void;
}

const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

export const UserProvider = ({ children }: IProvidersProps) => {
  const [userCart, setUserCart] = useState<IBurger[]>([]);

  const getUserCart = (id: number) => {
    axios
      .get(
        `https://hamburg-burguer-api.herokuapp.com/users/${id}?_embed=userCart`
      )
      .then((res) => {
        setUserCart(res.data.userCart);
      })
      .catch((err) => console.log(err));
  };

  const addToUserCart = (newProduct: IBurger, userToken: object) => {
    axios
      .post("https://hamburg-burguer-api.herokuapp.com/userCart", newProduct, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(() => console.log("adicionado"))
      .catch((err) => console.log(err.message, ", Item já adicionado"));
  };

  const deleteFromUserCart = (productID: number, userToken: object) => {
    axios
      .delete(
        `https://hamburg-burguer-api.herokuapp.com/userCart/${productID}`,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      )
      .then(() => console.log("deletado"))
      .catch((err) => console.log(err.message));
  };
  return (
    <UserContext.Provider
      value={{ userCart, getUserCart, addToUserCart, deleteFromUserCart }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);

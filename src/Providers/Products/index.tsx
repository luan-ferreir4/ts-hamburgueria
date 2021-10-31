import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IBurger } from "../../Interfaces/Burger";
import { IProvidersProps } from "../../Interfaces/ProvidersProps";
import { UseSignIn } from "../SignIn";

interface IProductsProviderData {
  productsList: IBurger[];
    getProducts: (userToken: object)=> void;
}

const ProductsContext = createContext<IProductsProviderData>(
  {} as IProductsProviderData
);

export const ProductsProviders = ({ children }: IProvidersProps) => {

    const [productsList, setProductsList] = useState<IBurger[]>([]);

  const getProducts = (userToken: object) => {
    axios
      .get<IBurger[]>("https://hamburg-burguer-api.herokuapp.com/products", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        setProductsList(res.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <ProductsContext.Provider value={{ getProducts, productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const UseProducts = () => useContext(ProductsContext);

import axios from "axios";
import { createContext, useContext, useState } from "react";
import { IBurger } from "../../Interfaces/Burger";
import { IProvidersProps } from "../../Interfaces/ProvidersProps";

interface IProductsProviderData {
  productsList: IBurger[];
  getProducts: (userToken: object) => void;
  findProduct: (itemID: number) => IBurger;
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
        setProductsList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const findProduct = (itemID: number) => {
    const pdt = productsList.find((item) => item.id === itemID) as IBurger;
    return pdt;
  };

  return (
    <ProductsContext.Provider value={{ getProducts, findProduct,productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const UseProducts = () => useContext(ProductsContext);

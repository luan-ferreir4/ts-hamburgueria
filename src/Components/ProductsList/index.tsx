import { useEffect, useState } from "react";

import { UseProducts } from "../../Providers/Products";
import { ProductsCard } from "../ProductCard";

export const ProductsList = () => {
  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const { getProducts, productsList } = UseProducts();

  useEffect(() => {
    getProducts(token);
  });

  return (
    <div>
      <h3>Produtos:</h3>
      <div>
        {productsList.map((item) => (
          <ProductsCard key={item.id} name={item.name} price={item.price} id={item.id} category={item.category}/>
        ))}
      </div>
    </div>
  );
};

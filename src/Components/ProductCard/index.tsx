import { useState } from "react";
import { IBurger } from "../../Interfaces/Burger";
import { UseProducts } from "../../Providers/Products";
import { UseUser } from "../../Providers/User";

export const ProductsCard = ({name, price, category,id }:IBurger) => {
  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return current;
  });
  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const {findProduct} = UseProducts();
  const {addToUserCart} = UseUser();

  const handleAdd = () =>{
    const newPdt = {...findProduct(id), userId: parseInt(userId)}
    addToUserCart(newPdt, token)
  }

  return (
    <div>
      <h5>{name}</h5>
      <div>
        <p>{price}</p>
        <p>{category}</p>
      </div>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

import { useState } from "react";
import { IBurger } from "../../Interfaces/Burger";
import { UseUser } from "../../Providers/User";

export const CartCard = ({name, price, category,id }:IBurger) => {

  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const {deleteFromUserCart} = UseUser();

  const handleDel = () =>{
    deleteFromUserCart(id, token)
  }

  return (
    <div>
      <h5>{name}</h5>
      <div>
        <p>{price}</p>
        {/* <p>{category}</p> */}
      </div>
      <button onClick={handleDel}>Remover</button>
    </div>
  );
};
